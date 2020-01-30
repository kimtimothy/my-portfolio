import React, { Component } from 'react'
import pic02 from '../../assets/images/pic02.jpg'
import pic03 from '../../assets/images/pic03.jpg'
import pic04 from '../../assets/images/pic04.jpg'
import pic05 from '../../assets/images/pic05.jpg'
import pic06 from '../../assets/images/pic06.jpg'

class Projects extends Component {
    render(){
        return(
            <div className="projects-section" id="projects">
                <div className="projects__container">
                    <h2>Projects</h2>
                    <h4>Click images to open projects</h4>
                    <div className="projects__container-1">
                    <div className="projects__grid-1">
                        <a href="https://www.goodfoodla.org/" target="_blank">
                            <img src={pic06} alt=""/>
                        </a>
                    </div>
                    <div className="projects__info-1"> 
                        <h4>LAFPC Food Dashboard</h4>
                            <p>A dashboard created for the LA Food Policy Council. Worked in an agile environment with UX Designers, Data Scientists, and other Developers. Created a search function that filters through the data’s indicator titles. Implemented CSV upload capability that automatically converts and populates data onto a categorized table</p>
                        <h5>Technologies Used</h5>
                            <p>
                                React.js | Node.js | MongoDB | JavaScript | CSS3 | Styled Components
                            </p>
                    </div>
                    </div>
                    <div className="projects__container-2">
                    <div className="projects__info-2"> 
                        <header>
                            <h4>MIXR</h4>
                                <p>Web application designed for musicians, artists, and producers to come together to create, connect, and collaborate on projects.</p>
                            <h5>Technologies Used</h5>
                                <p>
                                    HTML5 | CSS3 | Bootstrap | Node.js | Express.js | Embedded Javascript(EJS) | MongoDB
                                </p>
                        </header>
                    </div>
                    <div className="projects__grid-2">
                        <a href="https://mixr-1.herokuapp.com/" target="_blank">
                            <img src={pic03} alt=""/>
                        </a>
                    </div>
                    </div>
                    <div className="projects__container-3">
                    <div className="projects__grid-3">
                        <a href="https://local-la.herokuapp.com/" target="_blank">
                            <img src={pic04} alt=""/>
                        </a>
                    </div>
                    <div className="projects__info-3"> 
                        <header>
                            <h4>LOCALA</h4>
                                <p>Full-stack application that provides users with information on current and upcoming local sporting events in the Los Angeles and surrounding areas. Implemented Flask authentication. Consumed SeatGeek API. Managed GitHub branches and merges
                                </p>
                            <h5>Technologies Used</h5>
                                <p>React.js | CSS3 | Bootstrap | Flask | SQLite | PostgreSQL | Flask-Login</p>
                        </header>
                    </div>
                    </div>
                    <div className="projects__container-4">
                    <div className="projects__grid-4">
                        <a href="https://kimtimmy93.github.io/whackamole/" target="_blank">
                            <img src={pic02} alt=""/>
                        </a>
                    </div>
                    <div className="projects__info-4"> 
                        <h4>Whack-A-Mole</h4>
                            <p>Web application based on the all-time classic arcade game of Whack-A-Mole built in JavaScript</p>
                        <h5>Technologies Used</h5>
                            <p>
                                HTML5 | CSS3 | jQuery | JavaScript
                            </p>
                    </div>
                    </div>
                    <div className="projects__container-5">
                    <div className="projects__grid-5">
                        <a href="https://localhost0003.herokuapp.com/" target="_blank">
                            <img src={pic05} alt=""/>
                        </a>
                    </div>
                    <div className="projects__info-5">
                            <h4>LOCAL:HOST</h4>
                                <p>Local:Host is a full-stack MERN app created for individuals looking for homestay accommodations abroad, and for hospitable hosts who are passionate about assimilating foreigners to their local culture. Implemented Firebase authentication and storage.
                                </p>
                            <h5>Technologies Used</h5>
                                <p>React.js | Node.js | Express.js | MongoDB | Firebase</p>
                    </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default Projects