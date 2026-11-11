import type { Show } from "../dtos/show";

type ShowCardProps = {
    show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
    return (
        <article className="relative min-w-0 grid grid-cols-[56px_minmax(0,1fr)] gap-2 items-center shrink-0 md:flex md:flex-col-reverse md:items-center md:gap-4 md:w-[280px] lg:w-[340px]">
            <div className="relative z-[1] shrink-0 w-14 h-14 rounded-full bg-white border-2 border-white flex items-center justify-center">
                <h3 className="m-0 text-black text-base font-black">{show.date}</h3>
            </div>
            <div className="bg-darkblue min-w-0 grid grid-cols-[minmax(0,6rem)_minmax(0,1fr)] grid-rows-[auto_1fr] items-stretch min-h-[70px] border-2 border-white rounded-lg box-border overflow-hidden md:flex md:flex-col md:h-[260px] md:w-full lg:h-[320px]">
                <img className="row-span-2 w-full h-full object-cover md:h-3/5 md:shrink-0" src={`${import.meta.env.BASE_URL}${show.imageSource}`} alt="" />
                <h3 className="col-start-2 min-w-0 break-words m-0 mt-2 mx-1.5 pb-1 text-[0.95rem] md:mt-3 md:mx-4 md:text-lg lg:text-xl">{show.name}</h3>
                <p className="col-start-2 min-w-0 break-words my-0.5 mx-2 text-[0.72rem] leading-[1.3] md:mx-4 md:mt-1 md:text-sm lg:text-base">{show.description}</p>
            </div>
        </article>
    )
}