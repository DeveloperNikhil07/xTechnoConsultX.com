// app/contact/page.jsx
"use client"
import { useState } from "react"
import React from "react"
import ContactForm from "../Component/ConatctUs/ContactForm"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  // Handle input change with validation and phone filtering
  const handleChange = (e) => {
    const { name, value } = e.target
    let newValue = value
    if (name === "phone") {
      newValue = value.replace(/\D/g, "")
    }

    setFormData((prev) => ({ ...prev, [name]: newValue }))
    setErrors((prev) => {
      const newErrors = { ...prev }

      switch (name) {
        case "name":
          if (!newValue.trim()) newErrors.name = "Name is required"
          else delete newErrors.name
          break

        case "email":
          if (!newValue.trim()) newErrors.email = "Email is required"
          else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newValue))
            newErrors.email = "Email is invalid"
          else delete newErrors.email
          break

        case "phone":
          if (!newValue.trim()) newErrors.phone = "Phone is required"
          else if (!/^\d{12}$/.test(newValue))
            newErrors.phone = "Phone must be exactly 10 or 12 digits"
          else delete newErrors.phone
          break

        case "message":
          if (!newValue.trim()) newErrors.message = "Message is required"
          else delete newErrors.message
          break
      }

      return newErrors
    })
  }

  // Validate all fields on submit
  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) newErrors.name = "Name is required"

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) newErrors.email = "Email is required"
    else if (!emailRegex.test(formData.email)) newErrors.email = "Email is invalid"

    const phoneRegex = /^\d{12}$/
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Phone must be exactly 10 or 12 digits"

    if (!formData.message.trim()) newErrors.message = "Message is required"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      alert("Form submitted successfully!")
      setFormData({ name: "", email: "", phone: "", message: "" })
      setErrors({})
    }
  }

  return (
    <div className="contact-us-wrapper">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="big-circle"></span>
            <div className="form mx-auto">
              {/* Left Info Column */}
              <div className="contact-info">
                <h3 className="title">Let's get in touch</h3>
                <p className="text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                  dolorum adipisci recusandae praesentium dicta!
                </p>

                <div className="info">
                  <div className="information">
                    <i className="fas fa-map-marker-alt"></i>
                    <p>92 Cherry Drive Uniondale, NY 11553</p>
                  </div>
                  <div className="information">
                    <i className="fas fa-envelope"></i>
                    <p>lorem@ipsum.com</p>
                  </div>
                  <div className="information">
                    <i className="fas fa-phone"></i>
                    <p>123-456-789</p>
                  </div>
                </div>

                <div className="social-media">
                  <p>Connect with us :</p>
                  <div className="social-icons">
                    <a href="#">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* End Left Column */}

              {/* Right Form Column */}
              <div className="contact-form">
                <span className="progress-row"></span>
                <span className="circle one"></span>
                <span className="circle two"></span>
                <ContactForm formData={formData} errors={errors} handleChange={handleChange} handleSubmit={handleSubmit} />
              </div>
              {/* End Right Column */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
