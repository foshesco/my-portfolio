import React, { Component } from 'react';
import Title from '../title/title';
import './contact.css'

const Home = () => {
    return (
        <div class="contactContainer">
            <Title name="Contact" />
            <div class="methodcontainer">
                <div class="methods">
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'mailto:efoshager@gmail.com';
                    }} role="button" class="email-btn contact-btn">Send an Email
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://www.linkedin.com/in/erik-foshager-09083487';
                    }} role="button" class="link-btn contact-btn">Connect on LinkedIn
                    </button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = 'https://facebook.com/foshager';
                    }} role="button" class="fb-btn contact-btn">Message on Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;