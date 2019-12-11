import React from 'react';

import Logo from '../../assets/images/meninogustavobackground.png';

 const Header = () => {
    return(
        <div>
            <div id="preloader">
                <div className="spinner"></div>
            </div>
            <header className="header-area">
                <div className="container">
                    <div className="row">
                        <div className="menu-area">
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="logo">
                                    <a href="index.html"><img src={Logo} alt="Logo" /></a>
                                </div>
                            </div>
                            <div className="col-md-9 hidden-xs hidden-sm">
                                <div className="main-menu">
                                    <nav className="nav-menu">
                                        <ul>
                                            <li className="active"><a href="#home">HOME</a></li>
                                            <li><a href="#about">SOBRE</a></li>
                                            <li><a href="#features">RECURSOS</a></li>
                                            <li><a href="#pricing">PREÇOS</a></li>
                                            <li><a href="#download">DOWNLOAD</a></li>
                                            <li><a href="#teamarea">NOSSO TIME</a></li>
                                            <li><a href="#contact">CONTATO</a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                            <div className="col-sm-12 col-xs-12 visible-sm visible-xs">
                                <div className="mobile_menu"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;

