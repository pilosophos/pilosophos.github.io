import { createSignal } from "solid-js";
import ArrowNavButton from "./ArrowNavControl.jsx";

export default function GalleryViewer({imgSrcs, className, showNav}) {
    const [imgIndex, setImageIndex] = createSignal(0);

    function seeNextImg() { setImageIndex(currentIndex => currentIndex + 1) }
    function seePrevImg() { setImageIndex(currentIndex => currentIndex - 1) }

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
                        <ArrowNavButton left={ true } onClick={ seePrevImg }/>
                        <ArrowNavButton left={ false } onClick={ seeNextImg }/>
                    </>
                }
                </div>

                <aside class="flex flex-col bg-zinc-900 px-5 pt-0 w-screen h-full lg:w-150 lg:h-screen lg:p-10 lg:pt-3">
                    <slot name="sidebar-header" />

                    <div class="prose prose-invariants prose-headings:font-normal overflow-y-auto">
                        <slot name="description" />
                    </div>
                </aside>
            </article>
        </div>
    )
}