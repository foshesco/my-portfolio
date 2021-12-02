import React from 'react';
import './title.css';

const Title = (props) => (
    <div className="titleContainer">
        <div className="divider" />
        <span className="title">{props.name}</span>
    </div>
);

export default Title;