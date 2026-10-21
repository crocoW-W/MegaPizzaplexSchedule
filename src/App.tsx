function App() {
  return (
    <div className="bg-[url('src/assets/BackgroundBlurred.jpg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-full max-w-[480px] md:max-w-none mx-auto bg-black text-white font-sans">
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

      <main className="p-4 md:px-6 md:py-6 lg:px-8">
        {/* ===== CALENDÁRIO ===== */}
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
          </div>
        </div>

        {/* ===== LOJA ===== */}
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
      </main>

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
    </div>
  );
}

export default App;