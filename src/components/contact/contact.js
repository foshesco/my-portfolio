import React from 'react';
import Title from '../title/title';
import './contact.css'

const Home = () => {
    return (
        <div className="contactContainer">
            <Title name="Contact" />
            <div className="methodcontainer">
                <div className="methods">
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'mailto:efoshager@gmail.com';
                    }} className="email-btn contact-btn">Send an Email
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://www.linkedin.com/in/erik-foshager-09083487';
                    }} className="link-btn contact-btn">Connect on LinkedIn
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://facebook.com/foshager';
                    }} className="fb-btn contact-btn">Message on Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;