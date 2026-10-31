export function Listagem2() {
    return (
        <div className="mt-1 pt-4">
            <div>
                <h2 className="m-0 pb-2 text-[1.1rem] font-bold">Compre seus passes aqui:</h2>
            </div>

            <div className="bg-black flex gap-2.5 mt-4 overflow-x-auto snap-x snap-mandatory pb-2 border-2 border-white scrollbar-thumb-white scrollbar-track-black scrollbar-thin">
                <article className="bg-darkblue flex-[0_0_180px] min-w-[120px] snap-start flex flex-col border border-white p-1.5 m-1">
                    <img className="w-full aspect-square object-cover" src="src/assets/EntryPass.webp" alt="" />
                    <h3 className="mt-1.5 mb-0.5 text-[0.9rem] leading-[1.2]">Passe de Entrada</h3>
                    <p className="my-0.5 text-[0.6rem] leading-[1.3] font-thin">Um passe para entrar no Mega Pizzaplex</p>
                    <p className="my-0.5 text-base leading-[1.3] font-bold">R$ 10,00</p>
                    <button className="mt-auto w-full py-1.5 bg-black text-white border border-white rounded-[5px] text-[0.7rem] font-bold cursor-pointer hover:bg-white hover:text-black">
                        Comprar
                    </button>
                </article>

                <article className="bg-darkblue flex-[0_0_180px] min-w-[120px] snap-start flex flex-col border border-white p-1.5 m-1">
                    <img className="w-full aspect-square object-cover" src="src/assets/DancePass.webp" alt="" />
                    <h3 className="mt-1.5 mb-0.5 text-[0.9rem] leading-[1.2]">Passe de Dança</h3>
                    <p className="my-0.5 text-[0.6rem] leading-[1.3] font-thin">Acesse uma secção exclusiva na frente do palco</p>
                    <p className="my-0.5 text-base leading-[1.3] font-bold">R$ 15,00</p>
                    <button className="mt-auto w-full py-1.5 bg-black text-white border border-white rounded-[5px] text-[0.7rem] font-bold cursor-pointer hover:bg-white hover:text-black">
                        Comprar
                    </button>
                </article>

                <article className="bg-darkblue flex-[0_0_180px] min-w-[120px] snap-start flex flex-col border border-white p-1.5 m-1">
                    <img className="w-full aspect-square object-cover" src="src/assets/BackstagePass.webp" alt="" />
                    <h3 className="mt-1.5 mb-0.5 text-[0.9rem] leading-[1.2]">Passe de Bastidores</h3>
                    <p className="my-0.5 text-[0.6rem] leading-[1.3] font-thin">Conheça as estrelas pós-show</p>
                    <p className="my-0.5 text-base leading-[1.3] font-bold">R$ 40,00</p>
                    <button className="mt-auto w-full py-1.5 bg-black text-white border border-white rounded-[5px] text-[0.7rem] font-bold cursor-pointer hover:bg-white hover:text-black">
                        Comprar
                    </button>
                </article>

                <article className="bg-darkblue flex-[0_0_180px] min-w-[120px] snap-start flex flex-col border border-white p-1.5 m-1">
                    <img className="w-full aspect-square object-cover" src="src/assets/PhotoPass.webp" alt="" />
                    <h3 className="mt-1.5 mb-0.5 text-[0.9rem] leading-[1.2]">Passe de Foto</h3>
                    <p className="my-0.5 text-[0.6rem] leading-[1.3] font-thin">Tire fotos com as estrelas no Rockstar Row</p>
                    <p className="my-0.5 text-base leading-[1.3] font-bold">R$ 20,00</p>
                    <button className="mt-auto w-full py-1.5 bg-black text-white border border-white rounded-[5px] text-[0.7rem] font-bold cursor-pointer hover:bg-white hover:text-black">
                        Comprar
                    </button>
                </article>

                <article className="bg-darkblue flex-[0_0_180px] min-w-[120px] snap-start flex flex-col border border-white p-1.5 m-1">
                    <img className="w-full aspect-square object-cover" src="src/assets/PartyPass.webp" alt="" />
                    <h3 className="mt-1.5 mb-0.5 text-[0.9rem] leading-[1.2]">Passe de Festa</h3>
                    <p className="my-0.5 text-[0.6rem] leading-[1.3] font-thin">Acesso para o Fazer Blast ou Monty's golf</p>
                    <p className="my-0.5 text-base leading-[1.3] font-bold">R$ 20,00</p>
                    <button className="mt-auto w-full py-1.5 bg-black text-white border border-white rounded-[5px] text-[0.7rem] font-bold cursor-pointer hover:bg-white hover:text-black">
                        Comprar
                    </button>
                </article>

                <article className="bg-darkblue flex-[0_0_180px] min-w-[120px] snap-start flex flex-col border border-white p-1.5 m-1">
                    <img className="w-full aspect-square object-cover" src="src/assets/BowlingTicket.webp" alt="" />
                    <h3 className="mt-1.5 mb-0.5 text-[0.9rem] leading-[1.2]">Ticket de Boliche</h3>
                    <p className="my-0.5 text-[0.6rem] leading-[1.3] font-thin">Jogue uma rodada no Boliche do Bonnie</p>
                    <p className="my-0.5 text-base leading-[1.3] font-bold">R$ 30,00</p>
                    <button className="mt-auto w-full py-1.5 bg-black text-white border border-white rounded-[5px] text-[0.7rem] font-bold cursor-pointer hover:bg-white hover:text-black">
                        Comprar
                    </button>
                </article>

                <article className="bg-darkblue flex-[0_0_180px] min-w-[120px] snap-start flex flex-col border border-white p-1.5 m-1">
                    <img className="w-full aspect-square object-cover" src="src/assets/MazerciseTicket.webp" alt="" />
                    <h3 className="mt-1.5 mb-0.5 text-[0.9rem] leading-[1.2]">Ticket do Mazercise</h3>
                    <p className="my-0.5 text-[0.6rem] leading-[1.3] font-thin">Venha se divertir no Mazercise</p>
                    <p className="my-0.5 text-base leading-[1.3] font-bold">R$ 25,00</p>
                    <button className="mt-auto w-full py-1.5 bg-black text-white border border-white rounded-[5px] text-[0.7rem] font-bold cursor-pointer hover:bg-white hover:text-black">
                        Comprar
                    </button>
                </article>

                <article className="bg-darkblue flex-[0_0_180px] min-w-[120px] snap-start flex flex-col border border-white p-1.5 m-1">
                    <img className="w-full aspect-square object-cover" src="src/assets/DaycarePass.webp" alt="" />
                    <h3 className="mt-1.5 mb-0.5 text-[0.9rem] leading-[1.2]">Passe da Creche</h3>
                    <p className="my-0.5 text-[0.6rem] leading-[1.3] font-thin">Acesse a creche por tempo limitado</p>
                    <p className="my-0.5 text-base leading-[1.3] font-bold">R$ 30,00</p>
                    <button className="mt-auto w-full py-1.5 bg-black text-white border border-white rounded-[5px] text-[0.7rem] font-bold cursor-pointer hover:bg-white hover:text-black">
                        Comprar
                    </button>
                </article>
            </div>
        </div>
    )
}