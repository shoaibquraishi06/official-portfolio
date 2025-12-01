import React from "react";
import "./pricing2.css";
import "./pricingAnimation.css";

const plans = [
  {
    id: "hourly",
    title: "Hourly",
    price: "$80",
    cadence: "/ Hour",
    features: [
      { text: "Lorem ipsum dolor sit amet", ok: true },
      { text: "Sed ut perspiciatis", ok: true },
      { text: "At vero eos et accusamus", ok: true },
      { text: "Vitae dicta sunt explicabo", ok: true },
      { text: "Veritatis qui architecto", ok: false },
      { text: "Beatae vitae dicta sunt", ok: false },
    ],
  },
  {
    id: "monthly",
    title: "Monthly",
    price: "$9600",
    cadence: "/ Month",
    featured: true,
    features: [
      { text: "Lorem ipsum dolor sit amet", ok: true },
      { text: "Sed ut perspiciatis", ok: true },
      { text: "At vero eos et accusamus", ok: true },
      { text: "Vitae dicta sunt explicabo", ok: true },
      { text: "Veritatis qui architecto", ok: true },
      { text: "Beatae vitae dicta sunt", ok: false },
    ],
  },
  {
    id: "quarterly",
    title: "Quarterly",
    price: "$28,000",
    cadence: "/ Qtr",
    features: [
      { text: "Lorem ipsum dolor sit amet", ok: true },
      { text: "Sed ut perspiciatis", ok: true },
      { text: "At vero eos et accusamus", ok: true },
      { text: "Vitae dicta sunt explicabo", ok: true },
      { text: "Veritatis qui architecto", ok: false },
      { text: "Beatae vitae dicta sunt", ok: false },
    ],
  },
];

export default function PricingAnimated() {
  return (
    <section className="pricing-section">
      <div className="pricing-header fade-up">
        <span className="badge">Pricing Table</span>
        <h2 className="title">My <span>Pricing Model</span></h2>
      </div>

      <div className="pricing-grid">
        {plans.map((plan, index) => (
          <div
            key={plan.id}
            className={`card neon-glow fade-delay-${index}`}
          >
            <div className="card-top">
              <div>
                <div className="plan-label">{plan.title}</div>
                <div className="price-row">
                  <h2 className="price">{plan.price}</h2>
                  <span className="cadence">{plan.cadence}</span>
                </div>
              </div>

              <div className="badge-circle">
                {plan.title[0]}
              </div>
            </div>

            <ul className="features">
              {plan.features.map((feature, i) => (
                <li key={i} className={feature.ok ? "ok" : "no"}>
                  <span className="icon">{feature.ok ? "✓" : "✕"}</span>
                  <span className="text">{feature.text}</span>
                </li>
              ))}
            </ul>

            <button className={`btn ${plan.featured ? "btn-featured" : ""}`}>
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
