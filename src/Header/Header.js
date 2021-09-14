import React from "react";
import './Header.css';

function Header() {

    return (
        <div className="HeaderPage" id="/">
            <div className="pageBox">
                <div className="pageTitle">Portfolio</div>
                </div>
                <div className="navBox">
                <nav className="pageLinks">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </nav>
                </div>
                </div>
    );
};

export default Header;