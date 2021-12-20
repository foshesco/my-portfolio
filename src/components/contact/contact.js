import React from 'react';
import Title from '../title/title';
import './contact.css'

const Contact = () => {
    return (
        <div className="contactContainer">
            <Title name="Contact" />
            <div className="methodcontainer">
                <div className="containerIntro">
                    Feel free to reach out, my inbox is always open.
                </div>
                <div className="contactButtonContainer" onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'mailto:efoshager@gmail.com';
                }}>
                    <div className="contactButton">Send an Email</div>
                </div>
            </div>
        </div>
    );
}

export default Contact;