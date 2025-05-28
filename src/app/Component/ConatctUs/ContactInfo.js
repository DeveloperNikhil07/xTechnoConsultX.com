import { faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import SocialIcons from './SocialIcons'

export default function ContactInfo() {
    return (
        <div>
            <div className="contact-info">
                <h3 className="title">Lets get in touch</h3>
                <p className="text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                    dolorum adipisci recusandae praesentium dicta!
                </p>

                <div className="info">
                    <div className="information">
                        <FontAwesomeIcon icon={faMapMarkedAlt} />
                        <p>92 Cherry Drive Uniondale, NY 11553</p>
                    </div>
                    <div className="information">
                        <FontAwesomeIcon icon={faEnvelope} />
                        <p>nikhil@gmail.com</p>
                    </div>
                    <div className="information">
                        <FontAwesomeIcon icon={faPhone} />
                        <p>+91 0987654321</p>
                    </div>
                </div>
                <SocialIcons />
            </div>
        </div>
    )
}
