import React from 'react';
import { DiReact, DiNodejsSmall, DiVisualstudio } from "react-icons/di";
import Title from '../title/title';
import './skills.css';

const Skills = () => {
    return (
        <div className="skillsContainer">
            <Title name="Technologies" />
            <div className="skillsContainerCont">
                <div className="">
                    I've worked with a variety of technologies in the web development industry. These technologies range from email marketing, to front-end development, to data analysis.
                </div>

                <div className="skillsIconContainer">
                    <div className="skillsIconCard">
                        <div className="skillsIconCardCont">
                            <DiReact size="40px" />
                            <span className="skillsHeader">Front-End</span>
                            <div>
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
                            <DiNodejsSmall size="40px" />
                            <span className="skillsHeader">Back-End</span>
                            <div>
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
                            <DiVisualstudio size="40px" />
                            <span className="skillsHeader">Data Analysis</span>
                            <div>
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