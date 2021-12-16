import React from 'react';
import './header.css';

const Header = () => {
    return (
        <div className="navbarcontainer">
            <nav className="navbar navbar-expand-md navbar-dark bg-custom justify-content-between">
                <a className="navbar-brand home-logo animated animatedFadeInUp fadeInUp-one" href="#!">&#9428;</a>
                <button className="navbar-toggler animated animatedFadeInUp fadeInUp-two" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item animated animatedFadeInUp fadeInUp-two">
                            <a className="nav-link" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item animated animatedFadeInUp fadeInUp-three">
                            <a className="nav-link" href="#tech">Technologies</a>
                        </li>
                        <li className="nav-item animated animatedFadeInUp fadeInUp-four">
                            <a className="nav-link" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;