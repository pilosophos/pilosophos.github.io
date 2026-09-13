export default function GalleryViewerExit(props) {
	return (
    <nav class="pb-2 border-b border-stone-500 mb-3 text-end">
	  	<button onclick={ props.onExit } class="muted hover:text-pi-cyan font-display text-xl">
	  		Close <span class="text-4xl relative top-1.5">&times;</span>
	  	</button>
	  </nav>
  )
}