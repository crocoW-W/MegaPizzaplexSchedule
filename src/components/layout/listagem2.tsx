import { PassCard } from "../../cases/passes/components/pass-card";
import { usePass } from "../../cases/passes/hooks/use-pass";
import { PassCardGhost } from "../../cases/passes/components/pass-card-ghost";

export function Listagem2() {
    const { passes, loading, error } = usePass();

    return (
        <div className="mt-1 pt-4">
            <div>
                <h2 className="m-0 pb-2 text-[1.1rem] font-bold">Compre seus passes aqui:</h2>
            </div>

            <div className={`bg-black flex gap-2.5 mt-4 overflow-x-auto snap-x snap-mandatory border-2 border-white scrollbar-thumb-white scrollbar-track-black scrollbar-thin ${loading ? "overflow-x-hidden" : ""} ${error ? "" : "pb-2"}`}>

                {loading && (
                    <>
                        {Array.from({ length: 8 }).map((_, index) => (
                            <PassCardGhost key={index} />
                        ))}
                    </>
                )}

                {error && <p className='w-full text-center text-red-600 text-lg font-bold py-6'>Erro ao carregar produtos: {error}</p>}

                {passes.map((pass) => (
                    <PassCard pass={pass} />
                ))}

            </div>
        </div>
    )
}