
export function ShowCardGhost() {
    return (
        <article
            className="
                relative min-w-0 grid grid-cols-[56px_minmax(0,1fr)]
                gap-2 items-center shrink-0
                md:flex md:flex-col-reverse md:items-center md:gap-4
                md:w-[340px] lg:w-[340px]
            "
        >
            
            <div className="
                relative z-[1] shrink-0 w-14 h-14 rounded-full
                bg-gray-700 border-2 border-white
                animate-skeleton
            " />

            
            <div className="
                bg-darkblue min-w-0 grid
                grid-cols-[minmax(0,6rem)_minmax(0,1fr)]
                grid-rows-[auto_1fr] items-stretch min-h-[70px]
                border-2 border-white rounded-lg box-border overflow-hidden
                md:flex md:flex-col md:w-full
                md:h-[260px] lg:h-[320px]
                animate-pulse
            ">

                
                <div className="
                    row-span-2 w-full h-full min-h-[70px]
                    bg-gray-700
                    md:h-3/5 md:shrink-0
                " />

                
                <div className="
                    col-start-2 min-w-0 mx-2 mt-3
                    h-5 rounded bg-gray-600
                    md:mx-4 md:mt-3
                " />

                
                <div className="
                    col-start-2 min-w-0 mx-2 my-2
                    space-y-2
                    md:mx-4
                ">
                    <div className="h-3 rounded bg-gray-700 w-full" />
                    <div className="h-3 rounded bg-gray-700 w-4/5" />
                    <div className="h-3 rounded bg-gray-700 w-3/5" />
                </div>
            </div>
        </article>
    );
}
