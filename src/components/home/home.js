import React from 'react';
import BackgroundAnimation from './animation';
import './home.css'

const Home = () => {
    return (
        <div class="homeContainer">
            <div class="homeContainerCont">
                <div>
                    <p><h1>Welcome to my Personal Portfolio</h1></p>
                    <p>A creative and detailed individual with the ability to develop effective and efficient solutions with zero tolerance for errors. Looking to join a progressive tech company where my technical skills will be fully harnessed.</p>
                    <p><a href="#contact"><button role="button" class="talk"><strong><span>Get In Touch </span></strong></button></a></p>
                </div>
                <div className="homeAnimation">
                    <BackgroundAnimation />
                </div>
            </div>
        </div>
    );
}

export default Home;