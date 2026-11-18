import { PassCard } from "../../cases/passes/components/pass-card";
import { usePass } from "../../cases/passes/hooks/use-pass";

export function Listagem2() {
    const { passes, loading, error } = usePass();

    return (
        <div className="mt-1 pt-4">
            <div>
                <h2 className="m-0 pb-2 text-[1.1rem] font-bold">Compre seus passes aqui:</h2>
            </div>

            <div className="bg-black flex gap-2.5 mt-4 overflow-x-auto snap-x snap-mandatory pb-2 border-2 border-white scrollbar-thumb-white scrollbar-track-black scrollbar-thin">

                {loading && <p className='loading'>Carregando produtos...</p>}

                {error && <p className='error'>Erro ao carregar produtos: {error}</p>}

                {passes.map((pass) => (
                    <PassCard pass={pass} />
                ))}

            </div>
        </div>
    )
}