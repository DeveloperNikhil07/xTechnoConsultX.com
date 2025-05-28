// pages/api/send-email.js
import nodemailer from "nodemailer"

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed")

  const { name, email, phone, message } = req.body

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // 1. Email to You (Admin)
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `
        <table max-width="767px" min-width="320px" cellpadding="0" cellspacing="0" style="background:#f4f4f4;border-radius:10px; padding: 30px 0; font-family: Arial, sans-serif; width: 100%;">
    <tr>
      <td align="center">
        <table width="90%" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05); overflow: hidden;">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #4a00e0; padding: 20px; text-align: center;">
              <h2 style="color: #ffffff; margin: 0; font-size: 22px;">📩 New Contact Submission</h2>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 25px;">
              <table width="100%" cellpadding="10" cellspacing="0" style="border-collapse: collapse; font-size: 15px;">
                <tr style="border-bottom: 1px solid #dddddd;">
                  <td width="50%" style="font-weight: bold; color: #333;">Name:</td>
                  <td style="color: #333;">${name}</td>
                </tr>
                <tr style="background-color: #f9f9f9; border-bottom: 1px solid #dddddd;">
                  <td style="font-weight: bold; color: #333;">Email:</td>
                  <td style="color: #333;">${email}</td>
                </tr>
                <tr style="border-bottom: 1px solid #dddddd;">
                  <td style="font-weight: bold; color: #333;">Phone:</td>
                  <td style="color: #333;">${phone}</td>
                </tr>
                <tr style="background-color: #f9f9f9;">
                  <td style="font-weight: bold; color: #333; vertical-align: top;">Message:</td>
                  <td style="color: #333; white-space: pre-wrap;">${message}</td>
                </tr>
              </table>

              <p style="margin-top: 25px; font-size: 13px; color: #666666;">
                You can reply directly to this email to follow up with the user.
              </p>

              <div style="text-align: center; margin-top: 30px;">
                <a href="https://xtechnoconsultx.netlify.app" style="background-color: #8e2de2; color: #ffffff; padding: 12px 24px; text-decoration: none; font-size: 14px; border-radius: 6px; font-weight: bold;">
                  Visit Website
                </a>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 20px; text-align: center; font-size: 12px; color: #999999; background-color: #fafafa;">
              © TechnoconsultX • All rights reserved
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
      `,
    })

    // 2. Thank You Email to the User
    await transporter.sendMail({
      from: `"Your Company" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting us!",
      html: `
      <table style="max-width: 550px; min-width: 320px; background-color: #ffffff; border: 1px solid #dddddd; margin: auto;" cellpadding="0" cellspacing="0" width="100%">
        <tr>
          <td style="padding: 30px;">
            <h1 style="font-family: Tahoma, Geneva, sans-serif; color: #2a2a2a; text-align: center; margin-bottom: 65px; font-size: 20px; letter-spacing: 6px; border: 2px solid #4a00e0; padding: 15px;">
              THANK YOU!
            </h1>

            <h3 style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; font-style: italic; font-weight: 500; color: #4a00e0;">
              Hi <span style="border-bottom: 1px solid #8e2de2;">${name}</span>,
            </h3>

            <p style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; font-size: 15px; color: #444; line-height: 1.5; text-align: justify; margin-bottom: 5px;">
              Thank you for reaching out to us through our contact form. We have received your message and will get back to you as soon as possible.
            </p>

            <p style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; font-size: 15px; color: #444; line-height: 1.5; text-align: justify; margin-bottom: 5px;">
              Our team is reviewing your inquiry and will respond shortly. In the meantime, feel free to explore more about our services or reply to this email if you have additional information to share.
            </p>

            <p style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; font-size: 15px; color: #444; line-height: 1.5; text-align: justify; margin-bottom: 5px;">
              We appreciate your interest in working with us!
            </p>

            <p style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; font-size: 15px; color: #444; line-height: 1.5; text-align: justify; margin-bottom: 5px;">
              Warm regards,
            </p>

            <p style="font-family: 'Palatino Linotype', 'Book Antiqua', Palatino, serif; font-size: 15px; color: #444; line-height: 1.5; text-align: justify; margin-bottom: 75px;">
              The TechnoconsultX Team
            </p>

            <table width="100%" cellpadding="0" cellspacing="0">
              <tr>
                <td width="25%"></td>
                <td width="50%" style="background-color: #4a00e0; text-align: center; padding: 15px;">
                  <a href="https://xtechnoconsultx.netlify.app/" style="text-decoration: none; color: #ffffff; font-family: 'Courier New', Courier, monospace; font-weight: 600; letter-spacing: 2px;">
                    VISIT WEBSITE
                  </a>
                </td>
                <td width="25%"></td>
              </tr>
            </table>

            <hr style="margin: 55px 0 10px; border: none; border-top: 1px solid #cccccc;" />

            <p style="text-align: center; margin-bottom: 15px;">
              <small style="font-family: 'Courier New', Courier, monospace; font-size: 12px; color: #888888;">
                <a href="https://xtechnoconsultx.netlify.app/" style="color: #888888;">TechnoconsultX</a> | Made with <span style="color: #e63946;">&hearts;</span> by Nikhil
              </small>
            </p>

            <p>&nbsp;</p>
          </td>
        </tr>
      </table>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error("Error sending email:", err)
    return res.status(500).json({ success: false, error: err.message })
  }
}
