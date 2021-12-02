import React, { Component } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="mainContainer">
        <div>
          <Header />
        </div>
        <div className="secondContainer">
          <div id="home">
            <Home />
          </div>
          <div id="projects">
            <Projects />
          </div>
          <div id="tech">
            <Skills />
          </div>
          <div id="contact">
            <Contact />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
