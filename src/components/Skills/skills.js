import React, { Component } from 'react'

class Skills extends Component {
    render(){
        return(
            <div className="skills-section" id="skills">
                <div className="skills_container">
                    <h2>Skills</h2>
                    <div className="icons">
                        <div className="first-half-icons">
                            <i className="devicon-html5-plain-wordmark colored"></i>
                            <i className="devicon-css3-plain-wordmark colored"></i>
                            <i className="devicon-bootstrap-plain-wordmark colored"></i>
                            <i className="devicon-javascript-plain colored"></i>
                            <i className="devicon-jquery-plain-wordmark colored"></i>
                            <i className="devicon-react-original-wordmark colored"></i>
                            <i className="devicon-nodejs-plain-wordmark colored"></i>
                        </div>
                        <div className="second-half-icons">
                            <i className="devicon-express-original-wordmark colored"></i>
                            <i className="devicon-mongodb-plain-wordmark colored"></i>
                            <i className="devicon-postgresql-plain-wordmark colored"></i>
                            <i className="devicon-python-plain-wordmark colored"></i>
                            <i className="devicon-git-plain-wordmark colored"></i>
                            <i className="devicon-github-plain-wordmark colored"></i>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Skills