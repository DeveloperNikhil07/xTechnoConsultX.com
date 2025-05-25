import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import TopProgressBar from '../ProgressBar/TopProgressBar'
export default function ContactForm({ errors, handleSubmit, handleChange, formData }) {

    // Calculate progress based on filled fields
    const totalFields = Object.keys(formData).length
    const filledFields = Object.values(formData).filter((value) => value.trim() !== "").length
    const progress = Math.round((filledFields / totalFields) * 100);

    // Label animation handlers
    useEffect(() => {
        const inputs = document.querySelectorAll(".input")

        function focusFunc() {
            this.parentNode.classList.add("focus")
        }
        function blurFunc() {
            if (this.value === "") {
                this.parentNode.classList.remove("focus")
            }
        }
        inputs.forEach((input) => {
            input.addEventListener("focus", focusFunc)
            input.addEventListener("blur", blurFunc)
            // If value already present (e.g. after reset), add focus class
            if (input.value !== "") {
                input.parentNode.classList.add("focus")
            }
        })

        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("focus", focusFunc)
                input.removeEventListener("blur", blurFunc)
            })
        }
    }, [formData]);
    
    return (
        <>
            {/* Progress Bar */}
            {progress > 0 && (
                <div className="progress-container position-absolute start-0">
                    <TopProgressBar progress={progress} />
                </div>
            )}
            <form autoComplete="off" onSubmit={handleSubmit}>
                <h3 className="title">Contact us</h3>

                <div className="input-container" style={{ position: "relative" }}>
                    <input
                        type="text"
                        name="name"
                        className={`input ${errors.name ? "error" : ""}`}
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <label>Username</label>
                    <span>Username</span>
                    {errors.name && (
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className="error-icon"
                        />
                    )}
                </div>

                <div className="input-container" style={{ position: "relative" }}>
                    <input
                        type="email"
                        name="email"
                        className={`input ${errors.email ? "error" : ""}`}
                        onChange={handleChange}
                        value={formData.email}
                    />
                    <label>Email</label>
                    <span>Email</span>
                    {errors.email && (
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className="error-icon"
                        />
                    )}
                </div>

                <div className="input-container" style={{ position: "relative" }}>
                    <input
                        type="tel"
                        name="phone"
                        className={`input ${errors.phone ? "error" : ""}`}
                        onChange={handleChange}
                        value={formData.phone}
                        maxLength={12}
                    />
                    <label>Phone</label>
                    <span>Phone</span>
                    {errors.phone && (
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className="error-icon"
                        />
                    )}
                </div>

                <div
                    className="input-container textarea"
                    style={{ position: "relative" }}
                >
                    <textarea
                        name="message"
                        className={`input ${errors.message ? "error" : ""}`}
                        onChange={handleChange}
                        value={formData.message}
                    ></textarea>
                    <label>Message</label>
                    <span>Message</span>
                    {errors.message && (
                        <FontAwesomeIcon
                            icon={faExclamationCircle}
                            className="error-icon"
                        />
                    )}
                </div>

                <input type="submit" value="Send" className="btn" />
            </form>
        </>
    )
}
