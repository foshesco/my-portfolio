import React from 'react';
import BackgroundAnimation from './animation';
import './home.css'

const Home = () => {
    return (
        <div className="homeContainer">
            <div className="homeContainerCont">
                <div>
                    <h2 class="animated">
                        <span>Welcome</span>
                        <span>Bienvenidos</span>
                        <span>வரவேற்பு</span>
                        <span>欢迎</span>
                        <span>أهلا بك</span>
                    </h2>
                    <p className="intro">A creative and detailed individual with the ability to develop effective and efficient solutions with zero tolerance for errors. Looking to join a progressive tech company where my technical skills will be fully harnessed.</p>
                    <p><a href="#contact"><button className="talk"><strong><span>Get in touch </span></strong></button></a></p>
                </div>
                <div className="homeAnimation">
                    <BackgroundAnimation />
                </div>
            </div>
        </div>
    );
}

export default Home;