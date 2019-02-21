import React, { Component } from 'react';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import AboutMe from './components/aboutme/aboutme';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <body>

          <div id="home">
            <Home />
          </div>

          <div id="projects">
            <Projects />
          </div>

          <div id="aboutme">
            <AboutMe />
          </div>

          <div id="skills">
            <Skills />
          </div>
          
          <div id="contact">
            <Contact />
          </div>

        </body>
      </div>
    );
  }
}

export default App;
