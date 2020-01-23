import React, { Component } from 'react';
import { Link } from 'react-scroll';
import './navbar.scss';

class NavBar extends Component {
    render(){
        return(
            <div className="nav">
                <div className="nav__header">
                    <div className="nav__left">
                        <Link to="/" className="nav__link">Timothy Kim</Link>
                    </div>
                    <div className="nav__center">
                    </div>
                    <div className="nav__right">
                        <Link 
                        activeClass="active" 
                        to="landing" 
                        className="nav__link"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                        >Home</Link>
                        <Link activeClass="active" 
                        to="about" 
                        className="nav__link"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                        >About Me</Link>
                        <Link activeClass="active" 
                        to="skills" 
                        className="nav__link"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                        >Skills</Link>
                        <Link 
                        activeClass="active" 
                        to="projects" className="nav__link"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration= {500}
                        >Projects</Link>
                        <Link 
                        activeClass="active" 
                        to="resume" 
                        className="nav__link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        >Resume</Link>
                        <Link 
                        activeClass="active" 
                        to="contact" 
                        className="nav__link"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration= {500}
                        >Contact</Link>
                        {/* <div className="hamburger-menu">
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div> */}
                    </div>
                </div>
                {/* <div class="overlay">
                    <div class="overlay__content">
                        <a href="/aboutme" class="overlay__link">About Me</a>
                        <a href="/skills" class="overlay__link">Skills</a>
                        <a href="/projects" class="overlay__link">Projects</a>
                        <a href="/resume" class="overlay__link">Resume</a>
                    </div>
                </div> */}
            </div>
        )
    }
}





export default NavBar