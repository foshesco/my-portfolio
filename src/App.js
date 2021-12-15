import React, { Component, useEffect, useState } from 'react';
import Header from './components/header/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import './App.css';
import Loading from './components/loading/loading';

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  })

  return (
    <div className="mainContainer">
      {loading === true ?
        <div>
          <Loading />
        </div>
        : <>
          <div id="header">
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
            <div id="footer">
              <Footer />
            </div>
          </div>
        </>
      }
    </div>
  );
}

export default App;
