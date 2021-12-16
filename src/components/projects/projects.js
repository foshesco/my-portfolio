import React, { useState } from 'react';
import './projects.css';
import { projects } from '../../constants/constants';
import Title from '../title/title';

const Projects = () => {
    return (
        <div className="projectContainer">
            <Title name="Projects" />
            <div className="projectCardContainer">
                {projects.map((a, b) => (
                    <Card p={a} key={b} />
                ))}
            </div>
        </div>
    )
};

const Card = ({ p, i }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    }

    return (
        <div className="poster-container" key={i}>
            <div className={isFlipped ? "poster flipped" : "poster"}>
                <div className="pic">
                    <img className="projectImg" src={p.image} alt="project-pic-front" />
                    <div>
                        <h4>
                            {p.title}
                        </h4>
                        <p>
                            {p.description}
                        </p>
                    </div>
                    <b>Stack</b>
                    <div className="projectStack">
                        {p.tags.map((t, i) => {
                            return <span key={i}>{t}</span>;
                        })}
                    </div>
                    <div className="projectButtons">
                        <div className="projectButtonContainer" onClick={(e) => {
                            e.preventDefault();
                            window.location.href = p.visit
                        }}>
                            <div className="projectButton">Code</div>
                        </div>
                        <div className="projectButtonContainer" onClick={(e) => {
                            e.preventDefault();
                            flipCard();
                        }}>
                            <div className="projectButton">Preview</div>
                        </div>
                    </div>
                </div>

                <div onClick={() => flipCard()} className="pic back">
                    <img className="previewImg" src={p.previewImg} alt="project-pic-back" />
                </div>
            </div>
        </div>
    )
}

export default Projects;