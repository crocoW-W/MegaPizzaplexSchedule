
export function PassCardGhost() {
    return (
        <article className="
            bg-darkblue flex-[0_0_180px] min-w-[120px]
            snap-start flex flex-col border border-white
            p-1.5 m-1
        ">

            {/* Imagem */}
            <div className="
                w-full aspect-square bg-gray-700
                animate-pulse
            " />

            {/* Nome */}
            <div className="
                mt-2 mb-1 h-4 w-4/5 rounded
                bg-gray-600 animate-pulse
            " />

            {/* Descrição */}
            <div className="my-1 space-y-1.5">
                <div className="h-2 w-full rounded bg-gray-700 animate-pulse" />
                <div className="h-2 w-5/6 rounded bg-gray-700 animate-pulse" />
            </div>

            {/* Preço */}
            <div className="
                my-2 h-5 w-2/5 rounded
                bg-gray-600 animate-pulse
            " />

            {/* Botão */}
            <div className="
                mt-auto w-full h-7 rounded-[5px]
                bg-gray-700 border border-gray-600
                animate-pulse
            " />

        </article>
    );
}
