import React, { useState } from 'react';
import './projects.css';
import { projects } from '../../constants/constants';
import Title from '../title/title';

const Projects = () => {
    return (
        <div className="projectContainer">
            <Title name="Projects" />
            <div className="projectCardContainer">
                {projects.map((p, i) => (
                    <Card p={p} i={`card-${i}`} />
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
        <>
            <div className={isFlipped ? 'hideCard' : 'projectCard showCard'}>
                <img className="projectImg" src={p.image} alt="project-image" />
                <h4>
                    {p.title}
                </h4>
                <p>
                    {p.description}
                </p>
                <b>Stack</b>
                <div className="projectStack">
                    {p.tags.map((t, i) => {
                        return <span key={i}>{t}</span>;
                    })}
                </div>
                <div className="projectButtons">
                    <button onClick={(e) => {
                        e.preventDefault();
                        window.location.href = p.visit
                    }}>Code</button>
                    <button onClick={(e) => {
                        e.preventDefault();
                        flipCard();
                    }}>Preview</button>
                </div>
            </div>

            <div className={isFlipped ? 'projectCard showCard' : 'hideCard'}>
                <img className="previewImg" src={p.previewImg} />
                <div className="projectButtons">
                    <button onClick={(e) => {
                        e.preventDefault();
                        flipCard();
                    }}>Back</button>
                </div>
            </div>
        </>
    )
}

export default Projects;