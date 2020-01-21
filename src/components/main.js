import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './landing'
import AboutMe from './aboutme'
import Projects from './projects'
import Resume from './resume'
import Contact from './contact'

const Main = () => {
    <Switch>
        <Route exact path="/" component={ Landing } />
        <Route exact path="/aboutme" component={ AboutMe }/>
        <Route exact path="/projects" component={ Projects }/>
        <Route exact path="/resume" component={ Resume }/>
        <Route exact path="/contact" component={ Contact }/>
    </Switch>
}


export default Main

