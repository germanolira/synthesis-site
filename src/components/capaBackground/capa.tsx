import React from 'react'

import logo from './logo.png'
import send from './send.png'

import { CapaStyles, Container, TextoPrincipal, SubTexto, ButtonStyle } from './styles'

const Capa: React.FC = () => {
    return (
        <CapaStyles className="capaCor">
            <Container>
                <div>
                    <img src={logo} width="228" height="50" />
                </div>
            </Container>
            <TextoPrincipal>
                <h1>Construa um produto que seu público vai amar</h1>
                <SubTexto>
                    <h2>Ajudamos as startups e empresas em qualquer estagio a alcançar o mercado por meio de aplicativos e da web, sendo orientados por dados e focados no cliente.
                    </h2>
                </SubTexto>
            </TextoPrincipal>
            <ButtonStyle className="botaoStyle">
                Veja como trabalhamos
                <img src={send} width="18" height="18" />
            </ButtonStyle>
        </CapaStyles>
    )
}

export default Capa