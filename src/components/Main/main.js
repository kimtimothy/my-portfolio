import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../Landing/landing'
import AboutMe from '../AboutMe/aboutme'
import Projects from '../Projects/projects'
import Skills from '../Skills/skills'
import Resume from '../Resume/resume'
import Contact from '../Contact/contact'

const Main = () => {
    return(
    // <div className="main-section">
    // </div>
    <Switch>
        <Route exact path="/" component={ Landing } />
        <Route exact path="/aboutme" component={ AboutMe }/>
        <Route exact path="/projects" component={ Projects }/>
        <Route exact path="/skills" component={ Skills }/>
        <Route exact path="/resume" component={ Resume }/>
        <Route exact path="/contact" component={ Contact }/>
    </Switch>
    )

}


export default Main

