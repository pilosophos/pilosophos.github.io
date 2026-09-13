import { createSignal } from "solid-js";

export default function GalleryViewer({imgSrcs}) {
    const [imgIndex, setImageIndex] = createSignal(0);

    return (
        <div>
            <img src={ imgSrcs[imgIndex()] }/>
        </div>
    )
}