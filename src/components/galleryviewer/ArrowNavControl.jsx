import { clsx } from 'clsx';

export default function ArrowNavButton({left, onClick}) {
    return (
        <button
            onClick={ onClick }
            aria-label="Previous"
            id="viewer__prev"
            className={clsx(
                "group absolute h-full flex-center px-3",
                "from-black/30 to-transparent",
                "transition-all duration-200",
                "lg:px-5",
                "disabled:hover:px-3 disabled:opacity-10",
                left && "left-0 bg-gradient-to-r hover:ps-7 lg:disabled:hover:ps-5",
                !left && "right-0 bg-gradient-to-l hover:pe-7 lg:disabled:hover:pe-5",
            )}
        >
            <div class="
                group-hover:opacity-90 flex-center w-8 h-8 rounded-full bg-white opacity-70 text-pi-gray text-2xl font-display box-shadow
            ">
                { left ? "←" : "→" }
            </div>
        </button>   
    );
}