import React from 'react';
import NavBar from './components/NavBar/navbar'
import AboutMe from './components/AboutMe/aboutme'
import Landing from './components/Landing/landing'
import Skills from './components/Skills/skills'
import Projects from './components/Projects/projects'
import Contact from './components/Contact/contact'
import Resume from './components/Resume/resume'
import Footer from './components/Footer/footer'
import { Link, animateScroll as scroll } from "react-scroll";
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
        <Resume />
    </div>
  );
}

export default App;
