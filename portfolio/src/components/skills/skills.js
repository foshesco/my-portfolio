import React, { Component } from 'react';
import './skills.css';

const background = {
    width: '100%',
    height: '800px',
    backgroundSize: 'cover',
    backgroundColor: 'black',
}

class skills extends Component {
    render() {
        return (
            <div>
                <div class="main" style={background}>
                    <div class="skills">
                        <h3>Skills</h3>
                        <div class="flexContainer flexSpaceAround">
                            <div class="col">
                                <h4>
                                    Designer
                                </h4>
                                <ul>
                                    <li>
                                        UX/UI Design
                                    </li>
                                    <li>
                                        User Stories
                                    </li>
                                </ul>
                                <h5>
                                    Design Tool Kit
                                </h5>
                                <ul>
                                    <li>
                                        Photoshop
                                    </li>
                                    <li>
                                        HitFilm
                                    </li>
                                </ul>
                            </div>
                            <div class="col">
                                <h4>
                                    Developer
                                </h4>
                                <h5>
                                    Front End
                                </h5>
                                <ul>
                                    <li>
                                        Javascript
                                    </li>
                                    <li>
                                        React
                                    </li>
                                    <li>
                                        HTML
                                    </li>
                                    <li>
                                        CSS
                                    </li>
                                </ul>
                                <h5>
                                    Back End
                                </h5>
                                <ul>
                                    <li>
                                        REST
                                    </li>
                                    <li>
                                        MongoDB
                                    </li>
                                </ul>
                                <h5>
                                    Developer Tool Kit
                                </h5>
                                <ul>
                                    <li>
                                        Git
                                    </li>
                                    <li>
                                        GitHub
                                    </li>
                                    <li>
                                        Chrome Developer Tools
                                    </li>
                                    <li>
                                        SCRUM/Agile Methodologies
                                    </li>
                                    <li>
                                        Visual Studio Code
                                    </li>
                                </ul>
                            </div>
                            <div class="col">
                                <h4>
                                    Soldier
                                </h4>
                                <h5>
                                    Training
                                </h5>
                                <ul>
                                    <li>
                                        Multinational Training
                                    </li>
                                    <li>
                                        Leadership Course
                                    </li>
                                    <li>
                                        Paratrooper
                                    </li>
                                    <li>
                                        Language Training
                                    </li>
                                    <li>
                                        Physical Fitness Training
                                    </li>
                                </ul>
                                <h5>
                                    Soft Skills
                                </h5>
                                <ul>
                                    <li>
                                        Adaptable
                                    </li>
                                    <li>
                                        Determined
                                    </li>
                                    <li>
                                        Respectful
                                    </li>
                                    <li>
                                        Professional
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default skills;