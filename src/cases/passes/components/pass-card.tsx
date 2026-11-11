import type { Pass } from "../dtos/pass";

type PassCardProps = {
    pass: Pass;
}

export function PassCard({ pass }: PassCardProps) {
    return (
        <article className="bg-darkblue flex-[0_0_180px] min-w-[120px] snap-start flex flex-col border border-white p-1.5 m-1">
            <img className="w-full aspect-square object-cover" src={`${import.meta.env.BASE_URL}${pass.imageSource}`} alt="" />
            <h3 className="mt-1.5 mb-0.5 text-[0.9rem] leading-[1.2]">{pass.name}</h3>
            <p className="my-0.5 text-[0.6rem] leading-[1.3] font-thin">{pass.description}</p>
            <p className="my-0.5 text-base leading-[1.3] font-bold">R$ {pass.price.toFixed(2).replace('.', ',')}</p>
            <button className="mt-auto w-full py-1.5 bg-black text-white border border-white rounded-[5px] text-[0.7rem] font-bold cursor-pointer hover:bg-white hover:text-black">
                Comprar
            </button>
        </article>
    )
}