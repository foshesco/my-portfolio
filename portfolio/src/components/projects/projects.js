import React, { Component } from 'react';
import './projects.css'

const background = {
    width: '100%',
    height: '1200px',
    backgroundSize: 'cover',
    backgroundColor: 'gray'
}

class projects extends Component {
    render() {
        return (
            <div>
                <div class="main" style={background}>
                    <div class="projects">
                        <h3>Personal Projects</h3>
                        <div class="flexContainer flexSpaceAround">
                            <div class="work">
                                <h4>
                                    GIF/Crypto API
                                </h4>
                                <p>
                                    Simple website that renders GIFs and Cryptocurrency prices using APIs.
                                    <ul>
                                        <li>
                                            Built in React
                                        </li>
                                        <li>
                                            Renders JSON data from APIs
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div class="pic">

                            </div>
                        </div>
                        <div class="flexContainer flexSpaceAround">
                            <div class="work">
                                <h4>
                                    GIF/Crypto API
                                </h4>
                                <p>
                                    Simple website that renders GIFs and Cryptocurrency prices using APIs.
                                    <ul>
                                        <li>
                                            Built in React
                                        </li>
                                        <li>
                                            Renders JSON data from APIs
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div class="pic">

                            </div>
                        </div>
                        <div class="flexContainer flexSpaceAround">
                            <div class="work">
                                <h4>
                                    GIF/Crypto API
                                </h4>
                                <p>
                                    Simple website that renders GIFs and Cryptocurrency prices using APIs.
                                    <ul>
                                        <li>
                                            Built in React
                                        </li>
                                        <li>
                                            Renders JSON data from APIs
                                        </li>
                                    </ul>
                                </p>
                            </div>
                            <div class="pic">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default projects;