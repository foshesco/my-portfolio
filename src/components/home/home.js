import React from 'react';
import BackgroundAnimation from './animation';
import './home.css'

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="homeContainerCont">
                <div>
                    {/* <h2 className="animated-intro">
                        <span>Welcome</span>
                        <span>Bienvenidos</span>
                        <span>வரவேற்பு</span>
                        <span>欢迎</span>
                        <span>أهلا بك</span>
                    </h2>
                    <p className="intro">A creative and detailed individual with the ability to develop effective and efficient solutions with zero tolerance for errors. Looking to join a progressive tech company where my technical skills will be fully harnessed.</p> */}
                    <div className="home-section animated animatedFadeInUp fadeInUp-five"><span><h2 className="home-hello">Hi, I'm Erik.</h2></span></div>
                    <div className="home-section animated animatedFadeInUp fadeInUp-six"><p className="home-intro">I'm a front-end developer specializing in building exceptional digital experiences.</p></div>
                    <div className="animated animatedFadeInUp fadeInUp-seven"><a href="#contact"><button className="talk"><strong><span>Get in touch </span></strong></button></a></div>
                </div>
                <div className="homeAnimation">
                    <BackgroundAnimation />
                </div>
            </div>
        </div>
    );
}

export default Home;