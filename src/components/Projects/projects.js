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
                    <h4>Click on images to open projects</h4>
                    <div className="projects__grid-1">
                        <a href="https://www.goodfoodla.org/" target="_blank">
                            <img src={pic06} alt=""/>
                        </a>
                    </div>
                    <div className="projects__grid-2">
                        <a href="https://mixr-1.herokuapp.com/" target="_blank">
                            <img src={pic03} alt=""/>
                        </a>
                    </div>
                    <div className="projects__grid-3">
                        <a href="https://local-la.herokuapp.com/" target="_blank">
                            <img src={pic04} alt=""/>
                        </a>
                    </div>
                    <div className="projects__grid-4">
                        <a href="https://kimtimmy93.github.io/whackamole/" target="_blank">
                            <img src={pic02} alt=""/>
                        </a>
                    </div>
                    <div className="projects__grid-5">
                        <a href="https://localhost0003.herokuapp.com/" target="_blank">
                            <img src={pic05} alt=""/>
                        </a>
                    </div>

                    
                </div>
            </div>
            
        )
    }
}

export default Projects