import { Header } from './components/layout/header.tsx';
import { Footer } from './components/layout/footer.tsx';
import { Listagem1 } from './components/layout/listagem1.tsx';
import { Listagem2 } from './components/layout/listagem2.tsx';

function App() {
  return (
    <div className="bg-[url('src/assets/BackgroundBlurred.jpg')] bg-cover bg-center bg-no-repeat bg-fixed min-h-screen w-full max-w-[480px] md:max-w-none mx-auto bg-black text-white font-sans">
      
      <Header />

      <main className="p-4 md:px-6 md:py-6 lg:px-8">
        
        <Listagem1 /> 

        <Listagem2 />
        
      </main>

      <Footer />

    </div>
  );
}

export default App;