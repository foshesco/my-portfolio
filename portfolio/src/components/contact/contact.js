import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import './contact.css'

const background = {
    width: '100%',
    height: '650px',
    backgroundSize: 'cover',
    backgroundColor: 'white'
}


class home extends Component {
    render() {
        return (
            <div>
                <div class="main" style={background}>
                    <div class="contact">
                        <h3>Contact Me</h3>
                        <div class="methodcontainer">
                            <div class="methods">
                                <a href="https://facebook.com/foshager" target="_blank" class="facebook">
                                    <button role="button" class="fb-btn">Message on Facebook</button>
                                </a>
                                <a href="https://www.linkedin.com/in/erik-foshager-09083487" class="linkedin">
                                    <button role="button" class="link-btn">Connect on LinkedIn</button>
                                </a>
                                <a href="mailto:efoshager@gmail.com" class="email">
                                    <button role="button" class="email-btn">Send an Email</button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer">
                    <div class="copy">
                        <a>Copyright Erik Foshager © 2019</a>
                    </div>
                    <div class="socialmedia">
                        <a><SocialIcon network="instagram" url="https://instagram.com" style={{ height: 30, width: 30 }} /></a>
                        <a><SocialIcon network="github" url="https://github.com" style={{ height: 30, width: 30 }} /></a>
                        <a><SocialIcon network="facebook" url="https://facebook.com" style={{ height: 30, width: 30 }} /></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;