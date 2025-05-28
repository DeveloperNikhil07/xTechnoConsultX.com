"use client"
import React, { useState } from "react"
import ContactForm from "../Component/ConatctUs/ContactForm"
import ContactInfo from "../Component/ConatctUs/ContactInfo"
import { SendThankYouMail } from "../api/WBGlobalDataApi/ContactUsApi/SendThankYouMail"
import toast from "react-hot-toast"
export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    let newValue = value

    if (name === "phone") {
      newValue = value.replace(/\D/g, "") // Allow only digits
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
          else if (!/^\d{10}$/.test(newValue))
            newErrors.phone = "Phone must be exactly 10 digits"
          else delete newErrors.phone
          break

        default:
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
    else if (!emailRegex.test(formData.email))
      newErrors.email = "Email is invalid"

    const phoneRegex = /^\d{10}$/
    if (!formData.phone.trim()) newErrors.phone = "Phone is required"
    else if (!phoneRegex.test(formData.phone))
      newErrors.phone = "Phone must be exactly 10 digits"

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Handle form submit
  const [loading, setLoading] = useState(false)
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return
    setLoading(true)
    try {
      const res = await SendThankYouMail(formData)
      if (res.success) {
        toast.success("Message sent successfully!")
        setErrors({})
      } else {
        toast.error("Failed to send message. Please try again later.")
      }
    } catch (err) {
      toast.error("An error occurred while sending the email.")
    } finally {
      setLoading(false)
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
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
              <ContactInfo />

              {/* Right Form Column */}
              <ContactForm
                loading={loading}
                formData={formData}
                errors={errors}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
