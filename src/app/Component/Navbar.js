import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from 'next/navigation';
import SwitchDarkAndLightButton from './DarkAndLightBtn/SwitchDarkAndLightButton';


export default function Navbar() {
    const ActiveMenu = usePathname()
    const [MenuOffcanvas, setMenuOffcanvas] = useState(false)
    const ShowMenuToggleBtn = () => {
        setMenuOffcanvas(!MenuOffcanvas)
    }
    const CloseOffcanvasHandle = () => {
        setMenuOffcanvas(!MenuOffcanvas)
    }
    return (
        <>
            <navbar className={`navbar justify-content-end ${MenuOffcanvas === true ? 'show-menu' : ''}`}>
                <div className='d-flex align-items-center'>
                    <SwitchDarkAndLightButton />
                    <ul className='menu'>
                        <div className='offcanvas-overlay d-block d-lg-none' onClick={CloseOffcanvasHandle}></div>
                        <li className='close-btn d-block d-lg-none' onClick={CloseOffcanvasHandle}><FontAwesomeIcon icon={faArrowRightFromBracket} /></li>
                        <li className={`${ActiveMenu === "/" ? "active" : ""}`}><Link href="/"><FontAwesomeIcon icon={faHouse} className='d-none d-lg-inline'/> Home</Link></li>
                        <li className={`${ActiveMenu === "/aboutus" ? "active" : ""}`}><Link href="/aboutus">About</Link></li>
                        <li className={`${ActiveMenu === "/ourservices" ? "active" : ""}`}><Link href="/ourservices">Our Services</Link></li>
                        <li className={`${ActiveMenu === "/ourprojects" ? "active" : ""}`}><Link href="/ourprojects">Our Projects</Link></li>
                        <li className='cm-button'><Link href="/contact-us">Contact Us</Link></li>
                    </ul>
                    <button className='toggle-button' onClick={ShowMenuToggleBtn}><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </navbar>
        </>
    )
}
