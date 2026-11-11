
import { useState } from "react";
import type { Show } from "../dtos/show";

type ShowCardProps = {
    show: Show;
}

export function ShowCard({ show }: ShowCardProps) {
    const [expanded, setExpanded] = useState(false);

    return (
        <article
            onMouseEnter={() => {
                if (window.matchMedia("(min-width: 1024px)").matches) {
                    setExpanded(true);
                }
            }}
            onMouseLeave={() => setExpanded(false)}
            className={`
                relative min-w-0 grid grid-cols-[56px_minmax(0,1fr)]
                gap-2 items-center shrink-0
                md:flex md:flex-col-reverse md:items-center md:gap-4
                md:transition-all md:duration-300
                ${expanded ? "lg:w-[440px]" : "lg:w-[340px]"}
            `}
        >
            <div className="relative z-[1] shrink-0 w-14 h-14 rounded-full bg-white border-2 border-white flex items-center justify-center">
                <h3 className="m-0 text-black text-base font-black">
                    {show.date}
                </h3>
            </div>

            <div
                className="
                    bg-darkblue min-w-0 grid
                    grid-cols-[minmax(0,6rem)_minmax(0,1fr)]
                    grid-rows-[auto_1fr] items-stretch min-h-[70px]
                    border-2 border-white rounded-lg box-border overflow-hidden
                    md:flex md:flex-col md:w-full
                    transition-all duration-300 ease-in-out
                    md:h-[260px] lg:h-[320px]
                "
            >
                <img
                    className="row-span-2 w-full h-full object-cover md:h-3/5 md:shrink-0"
                    src={`${import.meta.env.BASE_URL}${show.imageSource}`}
                    alt=""
                />

                <h3 className={`col-start-2 min-w-0 break-words m-0 mt-2 mx-1.5 pb-1 md:text-[0.95rem] font-bold md:mt-3 md:mx-4 md:text-lg lg:text-xl 
                    transition-all duration-300 ease-in-out
                    ${expanded ? "lg:text-[1.75rem]" : "lg:text-[1.4rem]"}`}>
                    {show.name}
                </h3>

                <p className={`col-start-2 min-w-0 break-words my-0.5 mx-2 leading-[1.3] md:text-[0.72rem] md:mx-4 md:mt-1 md:text-sm lg:text-base 
                    transition-all duration-300 ease-in-out
                    ${expanded ? "lg:text-[1.25rem]" : "lg:text-[1.2rem]"}`}>
                    {show.description}
                </p>
            </div>
        </article>
    );
}
