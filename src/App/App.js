import React from 'react';
import NavBar from '../components/NavBar/navbar'
import Main from '../components/Main/main'
import AboutMe from '../components/AboutMe/aboutme'
import Landing from '../components/Landing/landing'
import Skills from '../components/Skills/skills'
import Projects from '../components/Projects/projects'
import Contact from '../components/Contact/contact'
import Resume from '../components/Resume/resume'
import Footer from '../components/Footer/footer'
import { Link } from 'react-router-dom'

function App() {
  return (
    <div >
        <NavBar />
        <Landing />
        <Main />
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Resume />
        

    </div>
  );
}

export default App;
