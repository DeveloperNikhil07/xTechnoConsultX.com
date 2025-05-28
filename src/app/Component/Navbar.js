import React, { useState } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowRightFromBracket, faBars } from "@fortawesome/free-solid-svg-icons";
import { usePathname } from 'next/navigation';
import SwitchDarkAndLightButton from './DarkAndLightBtn/SwitchDarkAndLightButton';


export default function Navbar({ websiteData }) {
    const GetNavigationData = websiteData;
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
                        {GetNavigationData?.menu?.map((item, index) => (
                            <li key={index} className={`${ActiveMenu === item?.url ? "active" : ""}`} onClick={CloseOffcanvasHandle}>
                                <Link href={item?.url}>
                                    {item?.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className='toggle-button' onClick={ShowMenuToggleBtn}><FontAwesomeIcon icon={faBars} /></button>
                </div>
            </navbar>
        </>
    )
}
