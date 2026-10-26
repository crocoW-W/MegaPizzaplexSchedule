export function Header() {
    return (
        <header>
            <div className="flex items-center gap-3 p-2 md:p-4 md:gap-6">
                <div>
                    <img
                        className="w-[150px] md:w-[200px] lg:w-[240px] object-contain"
                        src="src/assets/Mega_Pizzaplex_logo_no_bg_(credit_to_Under_Score).webp"
                        alt="Logo do Mega Pizzaplex"
                    />
                </div>

                <div>
                    <h1 className="m-0 mb-1 text-2xl md:text-3xl font-bold leading-[1.2]">
                        Shows no Mega Pizzaplex
                    </h1>
                    <p className="m-0 text-xs md:text-sm leading-[1.3]">
                        Venha explorar o Pizzaplex e assistir a performances incríveis!
                    </p>
                </div>
            </div>
        </header>
    )
}