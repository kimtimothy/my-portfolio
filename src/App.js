import React from 'react';
import NavBar from './components/NavBar/navbar'
import AboutMe from './components/AboutMe/aboutme'
import Landing from './components/Landing/landing'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/projects'
import Contact from './components/Contact/contact'
import './App.scss'

function App() {
  return (
    <div className="App">
        <NavBar />
        <Landing />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
    </div>
  );
}

export default App;
