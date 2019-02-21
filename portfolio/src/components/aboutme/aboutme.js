import React, { Component } from 'react';
import './aboutme.css'

const background = {
    width: '100%',
    height: '800px',
    backgroundSize: 'cover',
    backgroundColor: 'white'
}

class aboutme extends Component {
    render() {
        return (
            <div>
                <div class="main" style={background}>
                    <div class="aboutme">
                        <h3>About Erik</h3>
                        <div class="flexContainer flexSpaceAround">
                            <div class="pic">

                            </div>
                            <div class="bio">
                                <p>
                                    Erik Foshager is a highly creative visionary with a strong background in web development, research, and technical writing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default aboutme;