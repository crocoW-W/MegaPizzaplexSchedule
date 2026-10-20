import './App.css'

function App() {
  return (
    <>
      <header>
        <div>
          <div className='logo'>
            <img src="src/assets/Mega_Pizzaplex_logo_no_bg_(credit_to_Under_Score).webp" alt="" />
          </div>

          <div className='titulo'>
            <h1>Shows no Mega Pizzaplex</h1>
            <p>Venha explorar o Pizzaplex e assistir a performances incríveis!</p>
          </div>
        </div>
      </header>

      <main>
        <div className='calendario'></div>

        <div className='loja'></div>
      </main>

      <footer>
        <div>
          <img src="src/assets/FE_SOTM_logo.webp" alt="" />
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
