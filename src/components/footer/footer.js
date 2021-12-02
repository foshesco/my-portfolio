import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css';

const Footer = () => (
    <div class="footerContainer">
        <div class="footerCopy">
            Copyright EF © 2019
        </div>
        <div class="socialmedia">
            <div><SocialIcon network="instagram" url="https://instagram.com/erikfoshager" style={{ height: 30, width: 30 }} /></div>
            <div><SocialIcon network="github" url="https://github.com/foshesco" style={{ height: 30, width: 30 }} /></div>
            <div><SocialIcon network="facebook" url="https://facebook.com/foshager" style={{ height: 30, width: 30 }} /></div>
        </div>
    </div>
);

export default Footer;