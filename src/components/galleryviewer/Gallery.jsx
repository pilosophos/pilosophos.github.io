import { createSignal, Show, onMount } from "solid-js";
import { getImage } from 'astro:assets';
import GalleryViewer from '@components/galleryviewer/GalleryViewer.jsx';

export function Gallery(props) {
	const [viewerShownPiece, setViewerShownPiece] = createSignal(null);
	const maxIndex = props.pieces.length - 1;

  function openPiece(mouseEvent, piece) {
    mouseEvent.preventDefault();
    setViewerShownPiece(piece);
  }

  function exitViewer() {
    setViewerShownPiece(null);
  }

  function viewerNextPiece() {
    setViewerShownPiece(props.pieces[Math.min(viewerShownPiece().index + 1, maxIndex)]);
  }

  function viewerPrevPiece() {
    setViewerShownPiece(props.pieces[Math.max(viewerShownPiece().index - 1, 0)]);
  }

  onMount(async () => {
    const Masonry = (await import('masonry-layout')).default;

    new Masonry('#gallery', {
      itemSelector: '.gallery-item',
      gutter: 10,
      fitWidth: true,
      transitionDuration: '0.2s',
    })
  });

	return (
		<div>
      <div id="gallery" class="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-3 mx-auto">
        <For each={props.pieces}>{
          piece => (
            <a href={ piece.href }
              class="gallery-item mb-[10px] w-[350px] lg:w-[420px] bg-black/20"
              onClick={ event => openPiece(event, piece) }
            >
              <img
                src={ piece.thumbImgSrc }
                alt={ piece.title }
                width={ piece.thumbWidth }
                height={ piece.thumbHeight }
                loading="lazy"
              />
            </a>
          )          
        }</For>
      </div>

      <Show when={viewerShownPiece() !== null}>
        <GalleryViewer
          imgIndex={ viewerShownPiece().index }
          imgSrc={ viewerShownPiece().fullImgSrc }
          descSrc={ viewerShownPiece().descSrc }
          showNav={ true }
          maxIndex={ maxIndex }
          onNextClicked={ viewerNextPiece }
          onPrevClicked={ viewerPrevPiece }
          onExit={ exitViewer }
        />
      </Show>
    </div>
	);
}

/**
 * Prepare an array of Art collection entries for use in the `pieces` prop of the
 * Gallery element.
 * @param {Object[]} artEntries Art collection entries from astro.getEntries/getCollection
 */
export async function prepareArtForGallery(artEntries) {
  const descriptions = artEntries.map(piece => `/art/${piece.id}-desc`);
  const images = await Promise.all(artEntries.map(async piece => await getImage({src: piece.data.cover})));
  const thumbs = await Promise.all(artEntries.map(async piece => await getImage({
    src: piece.data.cover,
    width: 450,
    quality: 'max',
  })));

  return Array.from(artEntries.map((piece, i) => ({
    index: i,
    href: `/art/${piece.id}`,
    title: piece.data.title,
    thumbImgSrc: thumbs[i].src,
    thumbWidth: thumbs[i].attributes.width,
    thumbHeight: thumbs[i].attributes.height,
    fullImgSrc: images[i].src,
    descSrc: descriptions[i],
  })));
}