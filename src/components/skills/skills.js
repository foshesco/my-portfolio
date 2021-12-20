import React from 'react';
import Title from '../title/title';
import './skills.css';

const Skills = () => {
    return (
        <div className="skillsContainer">
            <Title name="Technologies" />
            <div className="skillsContainerCont">
                <div>
                    I've worked with a variety of technologies in the web development industry. These technologies range from email marketing, to front-end development, to data analysis.
                </div>

                <div className="skillsIconContainer">
                    <div className="skillsIconCard">
                        <div className="skillsIconCardCont">
                            <div className="skillsHeaderContainer">
                                <i className="fab fa-react fa-3x"></i>
                                <span className="skillsHeader">Front-End</span>
                            </div>
                            <div className="skillsList">
                                <ul>
                                    <li>
                                        React.js
                                    </li>
                                    <li>
                                        React Native
                                    </li>
                                    <li>
                                        JavaScript
                                    </li>
                                    <li>
                                        APIs
                                    </li>
                                    <li>
                                        Git
                                    </li>
                                    <li>
                                        HTML/CSS
                                    </li>
                                    <li>
                                        Accessibility
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="skillsIconCard">
                        <div className="skillsIconCardCont">
                            <div className="skillsHeaderContainer">
                                <i className="fab fa-node-js fa-3x"></i>
                                <span className="skillsHeader">Back-End</span>
                            </div>
                            <div className="skillsList">
                                <ul>
                                    <li>
                                        Node.js
                                    </li>
                                    <li>
                                        mongoDB
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="skillsIconCard">
                        <div className="skillsIconCardCont">
                            <div className="skillsHeaderContainer">
                                <i className="far fa-chart-bar fa-3x"></i>
                                <span className="skillsHeader">Data Analysis</span>
                            </div>
                            <div className="skillsList">
                                <ul>
                                    <li>
                                        Abobe Analytics
                                    </li>
                                    <li>
                                        Power BI
                                    </li>
                                    <li>
                                        Excel
                                    </li>
                                    <li>
                                        Microsoft Certified Data Analyst (in progress)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;