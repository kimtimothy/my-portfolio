import React, { Component } from 'react'
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";

class Contact extends Component {
    render(){
        return (
            <div className="contact-section" id="contact">
                <div className="contact__container">
                    <h2 className="contact__h2">Contact</h2>
                </div>
                <div className="contact__icons">
                    <a href="https://linkedin.com/in/timhkim" target="_blank" className="icon__github">
                        <FaGithub  style={{color: "white", fontSize: "40pt"}}/>
                    </a>
                    <a href="http://github.com/kimtimmy93" target="_blank" className="icon__linkedin">
                        <FaLinkedinIn  style={{color: "white", fontSize: "40pt"}}/>
                    </a>
                    <a href="mailto:timhkim0623@gmail.com" target="_blank" className="icon__envelope">
                        <FaEnvelope  style={{color: "white", fontSize: "40pt"}}/>
                    </a>
                </div>
            </div>
        )
            
    }
}


export default Contact