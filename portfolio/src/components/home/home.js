import React, { Component } from 'react';
import Topnav from './topnav';
import './home.css'

const imgUrl = require('../images/map.gif');
const background = {
    backgroundImage: `url(${imgUrl})`,
    width: '100%',
    height: '800px',
    backgroundSize: 'cover'
}


class home extends Component {
    render() {
        return (
            <div>
                <div>
                    <Topnav />
                </div>

                <div class="main" style={background}>
                    <div class="center">
                        <h1>Developer</h1>
                        <h2>Focusing on creating <strong>bold</strong>, <i>unique</i>, and <enjoyable class="enjoy">enjoyable</enjoyable> user experiences.</h2>
                        <a class="words">Motivated. Curious. Adaptable.</a>
                        <br></br><br></br>
                        <a href="#contact"><button role="button" class="talk"><strong><span>Let's Talk </span></strong></button></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default home;