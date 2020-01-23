import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

class Contact extends Component {
    render(){
        return (
            <div className="contact-section" id="contact">
                <div className="contact__container">
                    <h2 className="contact__h2">Contact</h2>
                </div>
                <div className="contact__icons">
                    <i class="fab fa-github"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-envelope-o"></i>
                </div>
            </div>
        )
            
    }
}


export default Contact