import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

export default function SocialIcons() {
    return (
        <div>
            <div className="social-media">
                <p>Connect with us :</p>
                <div className="social-icons">
                    <Link href="#">
                        <FontAwesomeIcon icon={faFacebook} />
                    </Link>
                    <Link href="#">
                        <FontAwesomeIcon icon={faTwitter} />
                    </Link>
                    <Link href="#">
                        <FontAwesomeIcon icon={faInstagram} />
                    </Link>
                    <Link href="#">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                </div>
            </div>
        </div>
    )
}
