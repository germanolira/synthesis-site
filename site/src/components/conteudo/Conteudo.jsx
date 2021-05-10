import Image from 'next/image';

export default function Conteudo() {
    return (
        <>
            <div className="conteudo-texto">
                <h1>
                    Soluções que se alinham com
                    seu público e objetivos
                </h1>
                <p className="conteudo-subtexto">
                    Entendemos que o crescimento é a sua maior preocupação,
                    por isso nos concentramos em soluções que aumentam as
                    conversões,  por fim, aumentam seus resultados financeiros.
                </p>
            </div>
            <div className="align-square">
                <div className="conteudo-square">
                    <h1>
                        Construído sob medida para seus clientes e objetivos
                        finais do produto
                    </h1>
                    <p>
                        Em vez de usar modelos genéricos, construímos todo o
                        seu produto do zero, garantindo que ele se alinhe com seu público e objetivos.
                    </p>
                    <div className="personagem-square">
                        <Image
                            className="personagem-square"
                            src="/personagem.png"
                            alt="Personagem"
                            width={249}
                            height={207}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}