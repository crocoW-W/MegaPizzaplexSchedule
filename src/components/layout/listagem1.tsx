export function Listagem1() {
    return (
        <div
            className="bg-black border-2 border-white max-h-[400px] overflow-y-auto scroll-smooth overscroll-contain
             md:max-h-none md:overflow-x-auto md:overflow-y-hidden scrollbar-thumb-white scrollbar-track-black scrollbar-thin"
        >
            <div
                className="relative flex flex-col gap-5 py-0 pr-3 pl-2
               before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[36px] before:w-px before:bg-white before:pointer-events-none
               md:flex-row md:items-end md:gap-6 md:p-4 md:min-w-max
               md:before:top-auto md:before:bottom-[44px] md:before:left-0 md:before:right-0 md:before:h-px md:before:w-auto"
            >
                <article className="relative min-w-0 grid grid-cols-[56px_minmax(0,1fr)] gap-2 items-center shrink-0 md:flex md:flex-col-reverse md:items-center md:gap-4 md:w-[280px] lg:w-[340px]">
                    <div className="relative z-[1] shrink-0 w-14 h-14 rounded-full bg-white border-2 border-white flex items-center justify-center">
                        <h3 className="m-0 text-black text-base font-black">14/11</h3>
                    </div>
                    <div className="bg-darkblue min-w-0 grid grid-cols-[minmax(0,6rem)_minmax(0,1fr)] grid-rows-[auto_1fr] items-stretch min-h-[70px] border-2 border-white rounded-lg box-border overflow-hidden md:flex md:flex-col md:h-[260px] md:w-full lg:h-[320px]">
                        <img className="row-span-2 w-full h-full object-cover md:h-3/5 md:shrink-0" src="src/assets/TeaserImage.webp" alt="" />
                        <h3 className="col-start-2 min-w-0 break-words m-0 mt-2 mx-1.5 pb-1 text-[0.95rem] md:mt-3 md:mx-4 md:text-lg lg:text-xl">Show Clássico</h3>
                        <p className="col-start-2 min-w-0 break-words my-0.5 mx-2 text-[0.72rem] leading-[1.3] md:mx-4 md:mt-1 md:text-sm lg:text-base">19:00 às 21:00 no palco principal</p>
                    </div>
                </article>

                <article className="relative min-w-0 grid grid-cols-[56px_minmax(0,1fr)] gap-2 items-center shrink-0 md:flex md:flex-col-reverse md:items-center md:gap-4 md:w-[280px] lg:w-[340px]">
                    <div className="relative z-[1] shrink-0 w-14 h-14 rounded-full bg-white border-2 border-white flex items-center justify-center">
                        <h3 className="m-0 text-black text-base font-black">20/11</h3>
                    </div>
                    <div className="bg-darkblue min-w-0 grid grid-cols-[minmax(0,6rem)_minmax(0,1fr)] grid-rows-[auto_1fr] items-stretch min-h-[70px] border-2 border-white rounded-lg box-border overflow-hidden md:flex md:flex-col md:h-[260px] md:w-full lg:h-[320px]">
                        <img className="row-span-2 w-full h-full object-cover md:h-3/5 md:shrink-0" src="src/assets/TeaserImage.webp" alt="" />
                        <h3 className="col-start-2 min-w-0 break-words m-0 mt-2 mx-1.5 pb-1 text-[0.95rem] md:mt-3 md:mx-4 md:text-lg lg:text-xl">Show de Fim de Semana</h3>
                        <p className="col-start-2 min-w-0 break-words my-0.5 mx-2 text-[0.72rem] leading-[1.3] md:mx-4 md:mt-1 md:text-sm lg:text-base">20:00 às 23:00 no palco principal</p>
                    </div>
                </article>

                <article className="relative min-w-0 grid grid-cols-[56px_minmax(0,1fr)] gap-2 items-center shrink-0 md:flex md:flex-col-reverse md:items-center md:gap-4 md:w-[280px] lg:w-[340px]">
                    <div className="relative z-[1] shrink-0 w-14 h-14 rounded-full bg-white border-2 border-white flex items-center justify-center">
                        <h3 className="m-0 text-black text-base font-black">15/11</h3>
                    </div>
                    <div className="bg-darkblue min-w-0 grid grid-cols-[minmax(0,6rem)_minmax(0,1fr)] grid-rows-[auto_1fr] items-stretch min-h-[70px] border-2 border-white rounded-lg box-border overflow-hidden md:flex md:flex-col md:h-[260px] md:w-full lg:h-[320px]">
                        <img className="row-span-2 w-full h-full object-cover md:h-3/5 md:shrink-0" src="src/assets/TeaserImage.webp" alt="" />
                        <h3 className="col-start-2 min-w-0 break-words m-0 mt-2 mx-1.5 pb-1 text-[0.95rem] md:mt-3 md:mx-4 md:text-lg lg:text-xl">Show Infantil</h3>
                        <p className="col-start-2 min-w-0 break-words my-0.5 mx-2 text-[0.72rem] leading-[1.3] md:mx-4 md:mt-1 md:text-sm lg:text-base">18:00 às 19:30 no palco exterior da creche</p>
                    </div>
                </article>

                <article className="relative min-w-0 grid grid-cols-[56px_minmax(0,1fr)] gap-2 items-center shrink-0 md:flex md:flex-col-reverse md:items-center md:gap-4 md:w-[280px] lg:w-[340px]">
                    <div className="relative z-[1] shrink-0 w-14 h-14 rounded-full bg-white border-2 border-white flex items-center justify-center">
                        <h3 className="m-0 text-black text-base font-black">19/11</h3>
                    </div>
                    <div className="bg-darkblue min-w-0 grid grid-cols-[minmax(0,6rem)_minmax(0,1fr)] grid-rows-[auto_1fr] items-stretch min-h-[70px] border-2 border-white rounded-lg box-border overflow-hidden md:flex md:flex-col md:h-[260px] md:w-full lg:h-[320px]">
                        <img className="row-span-2 w-full h-full object-cover md:h-3/5 md:shrink-0" src="src/assets/TeaserImage.webp" alt="" />
                        <h3 className="col-start-2 min-w-0 break-words m-0 mt-2 mx-1.5 pb-1 text-[0.95rem] md:mt-3 md:mx-4 md:text-lg lg:text-xl">Show da Roxy</h3>
                        <p className="col-start-2 min-w-0 break-words my-0.5 mx-2 text-[0.72rem] leading-[1.3] md:mx-4 md:mt-1 md:text-sm lg:text-base">20:00 às 22:00 no palco principal</p>
                    </div>
                </article>

                <article className="relative min-w-0 grid grid-cols-[56px_minmax(0,1fr)] gap-2 items-center shrink-0 md:flex md:flex-col-reverse md:items-center md:gap-4 md:w-[280px] lg:w-[340px]">
                    <div className="relative z-[1] shrink-0 w-14 h-14 rounded-full bg-white border-2 border-white flex items-center justify-center">
                        <h3 className="m-0 text-black text-base font-black">25/12</h3>
                    </div>
                    <div className="bg-darkblue min-w-0 grid grid-cols-[minmax(0,6rem)_minmax(0,1fr)] grid-rows-[auto_1fr] items-stretch min-h-[70px] border-2 border-white rounded-lg box-border overflow-hidden md:flex md:flex-col md:h-[260px] md:w-full lg:h-[320px]">
                        <img className="row-span-2 w-full h-full object-cover md:h-3/5 md:shrink-0" src="src/assets/TeaserImage.webp" alt="" />
                        <h3 className="col-start-2 min-w-0 break-words m-0 mt-2 mx-1.5 pb-1 text-[0.95rem] md:mt-3 md:mx-4 md:text-lg lg:text-xl">Show de Natal</h3>
                        <p className="col-start-2 min-w-0 break-words my-0.5 mx-2 text-[0.72rem] leading-[1.3] md:mx-4 md:mt-1 md:text-sm lg:text-base">18:00 às 24:00 no palco principal</p>
                    </div>
                </article>
            </div>
        </div>
    )
}