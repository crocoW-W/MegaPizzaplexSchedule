export function Footer() {
    return (
        <footer className="bg-black p-4 border-t-4 border-white">
            <div className="flex items-center justify-between gap-3">
                <img
                    className="w-24 h-24 object-contain shrink-0"
                    src="src/assets/FazbearEntertainment-ARLogo.webp"
                    alt="Logo da Fazbear Entertainment"
                />
                <div className="flex-1 min-w-0 text-right">
                    <p className="my-1 text-base font-bold leading-[1.3]">Informações de contato: Indisponível</p>
                    <p className="my-1 text-[0.65rem] leading-[1.3] font-thin">
                        Ao usar o site, você concorda que não pode tomar ação legal contra a empresa.
                    </p>
                    <p className="my-1 text-[0.65rem] leading-[1.3] font-thin">
                        A Fazbear Entertainment não se responsabiliza por danos, ferimentos ou mortes ocorridos em seus estabelecimentos.
                    </p>
                </div>
            </div>
        </footer>
    )
}