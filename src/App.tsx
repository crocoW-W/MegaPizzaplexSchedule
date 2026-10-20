function App() {
  return (
    <>
      <header>
        <div>
          <div className='logo'>
            <img src="src/assets/Mega_Pizzaplex_logo_no_bg_(credit_to_Under_Score).webp" alt="Logo do Mega Pizzaplex" />
          </div>

          <div className='titulo'>
            <h1>Shows no Mega Pizzaplex</h1>
            <p>Venha explorar o Pizzaplex e assistir a performances incríveis!</p>
          </div>
        </div>
      </header>

      <main>
        <div className='calendario'>
          <article>
            <div className='dia'>
              <h3>14/11</h3>
            </div>
            <div className='informacoes'>
              <img src="src/assets/TeaserImage.webp" alt=""/>
              <h3>Show Clássico</h3>
              <p>19:00 às 21:00 no palco principal</p>
            </div>
          </article>
          <article>
            <div className='dia'>
              <h3>20/11</h3>
            </div>
            <div className='informacoes'>
              <img src="src/assets/TeaserImage.webp" alt=""/>
              <h3>Show de Fim de Semana</h3>
              <p>20:00 às 23:00 no palco principal</p>
            </div>
          </article>
          <article>
            <div className='dia'>
              <h3>15/11</h3>
            </div>
            <div className='informacoes'>
              <img src="src/assets/TeaserImage.webp" alt=""/>
              <h3>Show Infantil</h3>
              <p>18:00 às 19:30 no palco exterior da creche</p>
            </div>
          </article>
          <article>
            <div className='dia'>
              <h3>19/11</h3>
            </div>
            <div className='informacoes'>
              <img src="src/assets/TeaserImage.webp" alt=""/>
              <h3>Show da Roxy</h3>
              <p>20:00 às 22:00 no palco principal</p>
            </div>
          </article>
        </div>

        <div className='loja'>
          <div className='loja-titulo'>
            <h2>Compre seus passes aqui:</h2>
          </div>
          <div className='produtos'>
            <article>
              <img src="src/assets/EntryPass.webp" alt=""/>
              <h3>Passe de Entrada</h3>
              <p>Um passe para entrar no Mega Pizzaplex</p>
              <p>R$ 10,00</p>
              <button>Comprar</button>
            </article>
            <article>
              <img src="src/assets/DancePass.webp" alt=""/>
              <h3>Passe de Dança</h3>
              <p>Acesse uma secção exclusiva na frente do palco</p>
              <p>R$ 15,00</p>
              <button>Comprar</button>
            </article>
            <article>
              <img src="src/assets/BackstagePass.webp" alt=""/>
              <h3>Passe de Bastidores</h3>
              <p>Conheça as estrelas pós-show</p>
              <p>R$ 40,00</p>
              <button>Comprar</button>
            </article>
            <article>
              <img src="src/assets/PhotoPass.webp" alt=""/>
              <h3>Passe de Foto</h3>
              <p>Tire fotos com as estrelas no Rockstar Row</p>
              <p>R$ 20,00</p>
              <button>Comprar</button>
            </article>
            <article>
              <img src="src/assets/PartyPass.webp" alt=""/>
              <h3>Passe de Festa</h3>
              <p>Acesso para o Fazer Blast ou Monty's golf</p>
              <p>R$ 20,00</p>
              <button>Comprar</button>
            </article>
            <article>
              <img src="src/assets/BowlingTicket.webp" alt=""/>
              <h3>Ticket de Boliche</h3>
              <p>Jogue uma rodada no Boliche do Bonnie</p>
              <p>R$ 30,00</p>
              <button>Comprar</button>
            </article>
            <article>
              <img src="src/assets/MazerciseTicket.webp" alt=""/>
              <h3>Ticket do Mazercise</h3>
              <p>Venha se divertir no Mazercise</p>
              <p>R$ 25,00</p>
              <button>Comprar</button>
            </article>
            <article>
              <img src="src/assets/DaycarePass.webp" alt=""/>
              <h3>Passe da Creche</h3>
              <p>Acesse a creche por tempo limitado</p>
              <p>R$ 30,00</p>
              <button>Comprar</button>
            </article>
          </div>
        </div>
      </main>

      <footer>
        <div>
          <img src="src/assets/FazbearEntertainment-ARLogo.webp" alt="Logo da Fazbear Entertainment" />
          <div>
          <p>Informações de contato: Indisponível</p>
          <p>Ao usar o site, você concorda que não pode tomar ação legal contra a empresa.</p>
          <p>A Fazbear Entertainment não se responsabiliza por danos, ferimentos ou mortes ocorridos em seus estabelecimentos.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App