import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from './landing'
import AboutMe from './aboutme'
import Projects from './projects'
import Resume from './resume'
import Contact from './contact'

const Main = () => {
    <Switch>
        <Route exact path="/" component={Landing} />
    </Switch>
}