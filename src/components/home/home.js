import React from 'react';
import BackgroundAnimation from './animation';
import './home.css'

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="homeContainerCont">
                <div>
                    <div className="home-section animated animatedFadeInUp fadeInUp-five">
                        <span>
                            <h2 className="home-hello">Hi, I'm Erik.</h2>
                        </span>
                    </div>
                    <div className="home-section animated animatedFadeInUp fadeInUp-six">
                        <span className="animated-intro">I'm a front-end developer specializing in building exceptional digital
                            <span>&nbsp;experiences.</span>
                            <span>&nbsp;applications.</span>
                            <span>&nbsp;pages.</span>
                            <span>&nbsp;programs.</span>
                            <span>&nbsp;things.</span>
                        </span>
                    </div>
                    <div className="animated animatedFadeInUp fadeInUp-seven">
                        <a href="#contact">
                            <div className="talkContainer">
                                <div className="talkButton">
                                    <strong><span>Get in Touch </span></strong>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="homeAnimation animated animatedFadeInUp fadeInUp-eight">
                    <BackgroundAnimation />
                </div>
            </div>
        </div>
    );
}

export default Home;