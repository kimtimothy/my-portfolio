import React from 'react';
import Main from '../components/Main/main'
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div style={{height: '900px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: 'black' }}></span><strong>Timothy Kim</strong></span>}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact Me</Link>
            </Navigation>
        </Header>
        <Drawer title="Timothy Kim">
            <Navigation>
                <a href="/aboutme">About Me</a>
                <a href="/projects">Projects</a>
                <a href="/skills">Skills</a>
                <a href="/resume">Resume</a>
                <a href="/contact">Contact Me</a>
            </Navigation>
        </Drawer>
        <Content>
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
