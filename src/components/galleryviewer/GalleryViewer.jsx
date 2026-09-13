import { createEffect, createSignal } from "solid-js";
import ArrowNavButton from "./ArrowNavControl.jsx";

export default function GalleryViewer(props) {
	const [desc, setDesc] = createSignal('');
	
	createEffect(async () => {
		const res = await fetch(props.descSrc);
		const html = await res.text();
		setDesc(html);
	}, []);

	return (
		<div 
			id="viewer"
			class="fixed left-0 top-0 w-screen h-screen bg-black/75"
		>
			<article class="flex flex-col items-center lg:justify-between w-full h-full overflow-y-auto lg:flex-row">
				<div class="flex-center relative w-full lg:h-full">
          <div>
            <img src={ props.imgSrc } class="max-h-screen object-contain w-auto h-auto"/>
          </div>

          <Show when={props.showNav}>
            <Show when={props.imgIndex > 0}>
              <ArrowNavButton left={ true } onClick={ props.prevClicked }/>
            </Show>

            <Show when={props.imgIndex < props.maxIndex}>
              <ArrowNavButton left={ false } onClick={ props.nextClicked }/>
            </Show>
          </Show>
				</div>

				<aside class="flex flex-col bg-zinc-900 px-5 pt-0 w-screen h-full lg:w-150 lg:h-screen lg:p-10 lg:pt-3">
					{ props.sidebarHeader }

					<div class="prose prose-invariants prose-headings:font-normal overflow-y-auto" innerHTML={desc()}></div>
				</aside>
			</article>
		</div>
	)
}