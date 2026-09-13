import { createEffect, createSignal, children as resolveChildren } from "solid-js";
import ArrowNavButton from "./ArrowNavControl.jsx";

export default function GalleryViewer({imgSrcs, descSrcs, className, showNav, sidebarHeader}) {
	console.log(testConst);
	const [imgIndex, setImageIndex] = createSignal(0);
	const [minIndex, maxIndex] = [0, imgSrcs.length - 1];

	const [desc, setDesc] = createSignal('');
	
	createEffect(async () => {
		const res = await fetch(descSrcs[imgIndex()]);
		const html = await res.text();
		setDesc(html);
	}, [imgIndex]);

	function seeNextImg() {
		setImageIndex(currentIndex => Math.min(currentIndex + 1, maxIndex))
	}
	function seePrevImg() {
		setImageIndex(currentIndex => Math.max(currentIndex - 1, minIndex))
	}

	return (
		<div 
			id="viewer"
			class={ `fixed left-0 top-0 w-screen h-screen bg-black/75 ${className}`}
		>
			<article class="flex flex-col items-center lg:justify-between w-full h-full overflow-y-auto lg:flex-row">
				<div class="flex-center relative w-full lg:h-full">

				<div>
					<img src={ imgSrcs[imgIndex()] } class="max-h-screen object-contain w-auto h-auto"/>
				</div>

				{ showNav &&
					<>
						{imgIndex() > minIndex && <ArrowNavButton left={ true } onClick={ seePrevImg }/>}
						{imgIndex() < maxIndex && <ArrowNavButton left={ false } onClick={ seeNextImg }/>}
					</>
				}
				</div>

				<aside class="flex flex-col bg-zinc-900 px-5 pt-0 w-screen h-full lg:w-150 lg:h-screen lg:p-10 lg:pt-3">
					{ sidebarHeader }

					<div class="prose prose-invariants prose-headings:font-normal overflow-y-auto" innerHTML={desc()}></div>
				</aside>
			</article>
		</div>
	)
}