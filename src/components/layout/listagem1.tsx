import { ShowCard } from "../../cases/shows/components/show-card";
import { useShow } from "../../cases/shows/hooks/use-show";

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
                {useShow().map((show) => (
                    <ShowCard key={show.id} show={show} />
                ))}
            </div>
        </div>
    )
}