import React, { useEffect, useState } from 'react';
import './header.css';

const Header = () => {
    const [show, setShow] = useState(true)
    const [scrollPos, setScrollPos] = useState(0)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    })

    function handleScroll() {
        const currPos = (window.pageYOffset / 50) * 50
        setScrollPos(currPos)
        setShow(currPos < scrollPos ? true : false)
    }

    const currPos = (window.pageYOffset / 50) * 50

    console.log(currPos, show)

    return (
        <div className="navbarcontainer">
            <nav className={`navbar navbar-expand-md navbar-dark bg-custom justify-content-between ${show ? 'navbar-fade-in' : 'navbar-fade-out'}`}>
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