import React, { Component } from 'react';
import './navbar.scss';

class NavBar extends Component {
    render(){
        return(
            <div className="nav">
                <div className="nav__header">
                    <div className="nav__left">
                        <a href="/" className="nav__link">Logo</a>
                    </div>
                    <div className="nav__center">
                    </div>
                    <div className="nav__right">
                        <a href="/" className="nav__link">Home</a>
                        <a href="/aboutme" className="nav__link">About Me</a>
                        <a href="/skills" className="nav__link">Skills</a>
                        <a href="/projects" className="nav__link">Projects</a>
                        <a href="/resume" className="nav__link">Resume</a>
                        <a href="/contact" className="nav__link">Contact</a>
                        <div class="hamburger-menu">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
                    </div>
                </div>
                <div class="overlay">
                    <div class="overlay__content">
                        <a href="#" class="overlay__link">One</a>
                        <a href="#" class="overlay__link">Two</a>
                        <a href="#" class="overlay__link">Three</a>
                        <a href="#" class="overlay__link">Four</a>
                    </div>
                </div>
            </div>
        )
    }
}





export default NavBar