import React from "react";
import "./Pricing.css";
import writeIcon from "../assets/right-icom.png"
import crossIcon from "../assets/cross-icon.png"
import arrowIcon from "../assets/arrow-icon.png"

const plans = [
  {
    id: "hourly",
    title: "Basic",
    price: "3999₹",
    
    features: [
      { text: "1–3 pages", ok: true },
      { text: "Modern UI/UX", ok: true },
      { text: "Mobile responsive", ok: true },
      { text: "Contact form", ok: true },
      { text: "3-day delivery", ok: true },
      { text: "SEO friendly", ok: false },
    ],
  },
  {
    id: "monthly",
    title: "Standard",
    price: "7999₹",

    featured: true,
    features: [
      { text: "4–6 pages", ok: true },
      { text: "Custom design", ok: true },
      { text: "Backend forms (contact, leads)", ok: true },
      { text: "5-7 day delivery", ok: true },
      { text: "SEO friendly", ok: true },
      { text: "Free deployment on Vercel/Render", ok: true },
    ],
  },
  {
    id: "quarterly",
    title: "Premium",
    price: "13999₹",
  
    features: [
      { text: "7–12 pages", ok: true },
      { text: "Full backend (Node/Express)", ok: true },
      { text: "Login/Signup", ok: true },
      { text: "Dashboard", ok: true },
      { text: "Database (MongoDB)", ok: true },
      { text: "Payment Integration (Razorpay)", ok: true },
      { text: "Free deployment on Vercel/Render", ok: true },
    ],
  },
];

export default function Pricing() {
  return (
    <div className="pricing-container">
      {/* <header className="pricing-top">
        <div>
          <span className="tag">Pricing Table</span>
          <h1 className="title">
            My <span>Pricing Model</span>
          </h1>
          <p className="subtitle">Choose a plan that fits your needs.</p>
        </div>

        <button className="cta">Get Started </button>
      </header> */}

             <div className="pricing-top">
        <h5>Pricing Table</h5>
        <h4>Pricing Model <span>| </span>  
         <span>Choose a plan that fits your needs.</span></h4>
            <h2 id='pric-top'>PRICING TABLE</h2>
      </div>



      <div className="pricing-grid">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`card ${plan.featured ? "featured" : ""}`}
          >
            <div className="card-top">
              <div>
                <div className="plan-title">{plan.title}</div>
                <div className="price-row">
                  <h2 className="price">{plan.price}</h2>
                  <span className="cadence">{plan.cadence}</span>
                </div>
              </div>

              <div className="badge">
                <div className="badge-inner"><img src={arrowIcon} alt="badge icon" /></div>
              </div>
            </div>

            <ul className="features">
              {plan.features.map((f, index) => (
                <li
                  key={index}
                  className={`feature ${f.ok ? "ok" : "no"}`}
                >
                  <span className="icon">{f.ok ? <img src={writeIcon} alt="check" /> : <img src={crossIcon} alt="cross" />}</span>
                  <span className="feat-text">{f.text}</span>
                </li>
              ))}
            </ul>

            <button
              className={`choose-btn ${
                plan.featured ? "choose-featured" : ""
              }`}
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      <p className="note">
        Need a custom plan ? <span > <a href="#contact"></a>  Contact us </span> for enterprise pricing.
      </p>
    </div>
  );
}
