"use client";
import React, { useEffect, useState } from "react";
import "../DarkAndLightBtn/switchToggle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

export default function SwitchDarkAndLightButton() {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        const savedTheme = localStorage.getItem('isDarkMode');
        if (savedTheme === null) {
            localStorage.setItem('isDarkMode', 'false');
            setIsDark(false);
        } else if (savedTheme === 'true') {
            setIsDark(true);
            document.body.classList.add('dark-mode');
        } else {
            setIsDark(false);
            document.body.classList.remove('dark-mode');
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = !isDark;
        setIsDark(newTheme);

        localStorage.setItem('isDarkMode', newTheme.toString());

        if (newTheme) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    };

    return (
        <div className='theme-switch-wrapper me-3'>
            <div className='theme-switch'>
                <label className="theme-switch">
                    <input
                        type="checkbox"
                        id="theme-toggle"
                        checked={isDark}
                        hidden
                        onChange={toggleTheme}
                    />
                    <div className="dark-mode">
                        <FontAwesomeIcon icon={faMoon} className="moon" />
                    </div>
                    <div className="light-mode">
                        <FontAwesomeIcon icon={faSun} className="sun" />
                    </div>
                    <div className="ball"></div>
                </label>
            </div>
        </div>
    );
}
