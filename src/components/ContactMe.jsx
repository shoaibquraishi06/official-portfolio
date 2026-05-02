import React, { useState } from 'react'
import '../styles/ContactMe.css'
import { MdOutlineEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const ContactMe = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('')

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus('Please fill all fields')
      return
    }
    setStatus('Sending...')
    
    setTimeout(() => {
      setStatus('Message sent — I will reply soon.')
      setForm({ name: '', email: '', message: '' })
    }, 900)
  }

  return (
    <section id="contact" className="contact-section">
      <div className="contact-top">
        <h5>Contact Me</h5>
        <h4>Let's Talk For <span>|</span>  <span>Your Next Project</span></h4>
      </div>
      <h2 id='con-top'>CONTACT ME</h2>
      <div className="container contact-grid">
        <div className="contact-card">
          <h2>Get in touch</h2>
          <p className="muted">I'm available for freelance work or full-time positions. Reach out and I'll reply within 24 hours.</p>

          <ul className="contact-list">
            <li><MdLocationOn className="icon" /> UP, Lucknow, 229307</li>
            <li><MdPhone className="icon" /> +91 8420680130</li>
            <li><MdOutlineEmail className="icon" /> md55shoaib@gmail.com </li>
          </ul>

          <div className="social-note">Monday–Friday: 10:00 – 16:00<br />Saturday–Sunday: 10:00 – 14:00</div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} aria-label="Contact form">
          <div className="field-row">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" required />
          </div>

          <div className="field-row">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="example@gamil.com" required />
          </div>

          <div className="field-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={6} value={form.message} onChange={handleChange} placeholder="Tell me about your project..." required />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn-primary">Send Message</button>
            <span className="status" aria-live="polite">{status}</span>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactMe
