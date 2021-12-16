import React from 'react';
import { SocialIcon } from 'react-social-icons';
import './footer.css';

const Footer = () => (
    <div className="footerContainer">
        <div className="socialmedia">
            <div><SocialIcon network="instagram" url="https://instagram.com/erikfoshager" fgColor="#ffffff" className="socialIcons" /></div>
            <div><SocialIcon network="github" url="https://github.com/foshesco" fgColor="#ffffff" className="socialIcons" /></div>
            <div><SocialIcon network="facebook" url="https://facebook.com/foshager" fgColor="#ffffff" className="socialIcons" /></div>
        </div>
        <div className="footerCopy">
            Designed and Built by Erik
        </div>
    </div>
);

export default Footer;