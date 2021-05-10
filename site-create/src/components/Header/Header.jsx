import React from 'react';
import Logo from '../../assets/logocompleta.png';
import './styles.css';

export default function Header() {
    return (
        <div className="header-background">
            <div className="conteudo-header">
                <img src={Logo} alt="A logo do site" className="logo-img" />
            </div>
        </div>
    )
}