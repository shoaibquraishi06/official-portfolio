import React from "react";
import "../components/Footer.css";
import logo from "../assets/logoImage.png";
import fotterArrow from "../assets/fotterArrow.png"
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";





export default function ConnectFooter() {
  return (
    <footer className="cf-root" aria-labelledby="connect-heading">
      <div className="cf-inner">
        <div className="cf-top">
          <h2 id="connect-heading" className="cf-heading">
            Let’s <span className="neon">Connect</span> there
          </h2>

          <button className="cf-hire" type="button">Hire Me Now</button>
        </div>

        <div className="cf-divider" role="presentation" />

        <div className="cf-grid">
          {/* Column 1: brand + about + socials */}
          <div className="cf-col cf-brand">
            <div className="logo">
              <div className="logo-circle"><img src={logo} alt="Logo" /></div>
              <div className="brand-name">codeCanvas</div>
            </div>

            <p className="brand-desc">
             Your trusted partner in website solutions, building high-converting websites for growing businesses.
            </p>

            <div className="socials" aria-label="social links">
              {/* Simple circle icons (SVG can be replaced with real icons) */}
              <a href="https://www.instagram.com/__codecanvas/" className="social" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.linkedin.com/in/shoaib-quraishi-047155288/" className="social" aria-label="linkdin"><CiLinkedin /></a>
              <a href="https://github.com/shoaibquraishi06/" className="social" aria-label="Github"><FaGithub /></a>
              <a href="https://wa.me/qr/EXDPSY577V5AO1" className="social" aria-label="whatapp"><FaWhatsapp /></a>
              
            </div>
          </div>

          {/* Column 2: Navigation */}
          <nav className="cf-col cf-nav" aria-label="footer navigation">
            <h3 className="col-title">Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Skill</a></li>
              <li><a href="#">Pricing</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          {/* Column 3: Contact */}
          <address className="cf-col cf-contact">
            <h3 className="col-title">Contact</h3>
            <p className="contact-item">+91 8420680130</p>
            <p className="contact-item">https://shoaibquraishi06.netlify.app/</p>
            <p className="contact-item">md55shoaib@gmail.com</p>
            <p className="contact-item">
              UP, Raebareli 
            </p>
          </address>

          {/* Column 4: Newsletter */}
          <div className="cf-col cf-news">
            <h3 className="col-title">Get the latest information</h3>

            <form
              className="newsletter"
              onSubmit={(e) => {
                e.preventDefault();
                const email = e.target.email.value;
                // placeholder: handle subscription
                alert(`Subscribed: ${email}`);
                e.target.reset();
              }}
            >
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email address"
                required
                className="newsletter-input"
              />
              <button className="newsletter-btn" aria-label="subscribe"><img src={fotterArrow} alt="Subscribe" /></button>
            </form>
          </div>
        </div>

        <div className="cf-bottom">
          <p className="copyright">© {new Date().getFullYear()} Oliver. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
