import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './header.css';

const Header = () => {
    return (
        <div className="navbarcontainer">
            <nav className="navbar navbar-expand-md navbar-dark bg-custom">
                <a className="navbar-brand" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
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
                    <div className="socialmedia">
                        <div><SocialIcon network="instagram" url="https://instagram.com/erikfoshager" style={{ height: 30, width: 30 }} /></div>
                        <div><SocialIcon network="github" url="https://github.com/foshesco" style={{ height: 30, width: 30 }} /></div>
                        <div><SocialIcon network="facebook" url="https://facebook.com/foshager" style={{ height: 30, width: 30 }} /></div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;