import { createSignal, Show } from "solid-js";
import GalleryViewer from '@components/galleryviewer/GalleryViewer.jsx';

export default function Gallery(props) {
	const [viewerShownPiece, setViewerShownPiece] = createSignal(null);
	const maxIndex = props.pieces.length - 1;

  function openPiece(mouseEvent, piece) {
    mouseEvent.preventDefault();
    setViewerShownPiece(piece);
  }

  function viewerNextPiece() {
    setViewerShownPiece(props.pieces[viewerShownPiece().index + 1]);
    console.log(props.pieces[viewerShownPiece().index])
  }

  function viewerPrevPiece() {
    setViewerShownPiece(props.pieces[viewerShownPiece().index - 1]);
    console.log(props.pieces[viewerShownPiece().index])
  }

	return (
		<div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-3 mx-auto">
        <For each={props.pieces}>{
          piece => (
            <a href={ piece.href }
              class="gallery-item mb-[10px] w-[350px] lg:w-[420px]"
              onClick={ event => openPiece(event, piece) }
            >
              <img
                src={ piece.thumbImgSrc }
                alt={ piece.title }
                quality="max"
                width={420}
                loading="lazy"
              />
            </a>
          )          
        }</For>
      </div>

      <Show when={viewerShownPiece()}>
        <GalleryViewer
          imgIndex={ viewerShownPiece().index }
          imgSrc={ viewerShownPiece().fullImgSrc }
          descSrc={ viewerShownPiece().descSrc }
          showNav={ true }
          maxIndex={ maxIndex }
          nextClicked={ viewerNextPiece }
          prevClicked={ viewerPrevPiece }
        >
          <nav
            slot="sidebar-header"
            class="pb-2 border-b border-stone-500 mb-3 text-end"
          >
            <button commandfor="viewer-modal" command="close" class="muted hover:text-pi-cyan font-display text-xl">
              Close <span class="text-4xl relative top-1.5">&times;</span>
            </button>
          </nav>
        </GalleryViewer>
      </Show>
    </div>
	);
}