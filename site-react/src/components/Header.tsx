import React from 'react';
import * as logo from '../assets/logo.png';

export function Header() {
    return (
        <React.Fragment>
            <img src={logo} alt="Essa é a logo do site" />
            <h1>Synthesis</h1>
        </React.Fragment>
    )
}