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
                        <DiReact size="40px" />
                        <span className="skillsHeader">Front-End</span>
                        <div>
                            Experience with React and more
                        </div>
                    </div>
                    <div className="skillsIconCard">
                        <DiNodejsSmall size="40px" />
                        <span className="skillsHeader">Back-End</span>
                        <div>
                            Experience with Node.js and mongoDB
                        </div>
                    </div>
                    <div className="skillsIconCard">
                        <DiVisualstudio size="40px" />
                        <span className="skillsHeader">Data Analysis</span>
                        <div>
                            Experience with Adobe Analytics, Power BI, and Excel
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Skills;