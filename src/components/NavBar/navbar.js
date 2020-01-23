import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom'
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
                        <Link to="/" className="nav__link">Home</Link>
                        <Link to="/aboutme" className="nav__link">About Me</Link>
                        <Link to="/skills" className="nav__link">Skills</Link>
                        <Link to="/projects" className="nav__link">Projects</Link>
                        <Link to="/resume" className="nav__link">Resume</Link>
                        <Link to="/contact" className="nav__link">Contact</Link>
                        <div class="hamburger-menu">
                            <div class="bar"></div>
                            <div class="bar"></div>
                            <div class="bar"></div>
                        </div>
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