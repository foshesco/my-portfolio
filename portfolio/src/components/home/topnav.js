import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';
import './topnav.css';

class topnav extends Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div class="navbarcontainer">
                <nav class="navbar navbar-expand-md navbar-light fixed-top bg-light">
                    <a class="navbar-brand" href="#">Erik Foshager</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#projects">Projects</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#aboutme">About Me</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#skills">Skills</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#contact">Contact </a>
                            </li>
                        </ul>
                        <div class="socialmedia">
                            <a><SocialIcon network="instagram" url="https://instagram.com" style={{ height: 30, width: 30 }} /></a>
                            <a><SocialIcon network="github" url="https://github.com" style={{ height: 30, width: 30 }} /></a>
                            <a><SocialIcon network="facebook" url="https://facebook.com" style={{ height: 30, width: 30 }} /></a>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default topnav;