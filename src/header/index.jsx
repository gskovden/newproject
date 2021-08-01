import React from 'react';

import pkg from '../../package';

import style from './style.css';

// const header = document.createElement('header');
// header.classList.add(style.appHeader);
// header.append(`А вот и header нашего приложения v${pkg.version}`);

const Header = React.createElement(
    'header',
        { className: style.appHeader, children: `А вот и header нашего приложения v${pkg.version}`
    }
);

const Header2 = () => {
    return (
        <header>
            А вот и header нашего приложения v${pkg.version}
        </header>
    )
}

export default Header2;
