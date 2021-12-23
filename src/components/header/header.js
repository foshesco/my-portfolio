import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="navbarcontainer">
            <nav className="navbar navbar-expand-md navbar-dark bg-custom justify-content-between">
                <a className="navbar-brand home-logo animated animatedFadeInUp fadeInUp-one" href="#!">
                    <div className="headerLogoContainer">
                        <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" version="1.1" preserveAspectRatio="none" className="headerShape">
                            <defs>
                                <linearGradient id="header-shape-gradient" x2="0.35" y2="1">
                                    <stop offset="0%" stopColor="var(--color-stop)" />
                                    <stop offset="30%" stopColor="var(--color-stop)" />
                                    <stop offset="100%" stopColor="var(--color-bot)" />
                                </linearGradient>
                            </defs>

                            <path className="headerCircle gradient-bg"
                                strokeDasharray="100"
                                d="M18 2.0845
          a 15.9155 15.9155 0 0 1 0 31.831
          a 15.9155 15.9155 0 0 1 0 -31.831"
                            />
                        </svg>
                        <div className="headerLogoText"><span className="percentage">e</span></div>
                    </div>
                </a>
                <button className="navbar-toggler animated animatedFadeInUp fadeInUp-two" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#tech">Technologies</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;