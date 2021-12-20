import React, { useEffect } from 'react';
import AOS from 'aos';
import './title.css';

const Title = (props) => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

    return (
        <div className="titleContainer">
            <div className="divider" data-aos="fade-right" data-aos-once="true" />
            <h1 className="title">{props.name}</h1>
        </div>
    )
};

export default Title;