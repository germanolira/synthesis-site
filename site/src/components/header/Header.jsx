import Image from 'next/image';
// import './styles.module.css';

export default function Header() {
    return (
        <>
            <div className="header-container">
                <Image
                    className="header-image"
                    src="/logo.png"
                    alt="Nossa logo"
                    width={35}
                    height={15}
                />
                <h1 className="header-titulo">Synthesis</h1>
            </div>
            <div className="main-background">
                <h1>Construa um produto que seu público vai amar</h1>
                <p>Ajudamos as startups e empresas em qualquer estagio
                    a alcançar o mercado por meio de aplicativos e da
                    web, sendo orientados por dados e focados no cliente.
                </p>
                <div className="main-image">
                    <Image
                        className="main-image"
                        src="/pessoacomputador.png"
                        alt="Uma pessoa em um computador"
                        width={289}
                        height={227}
                    />
                </div>
            </div>
        </>
    )
}