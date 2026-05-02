import "../styles/Pricing.css";
import arrowIcon from "../assets/arrow-Icon.png";
import tickIcon from "../assets/right-icom.png";
import crossIcon from "../assets/cross-Icon.png";
import { GoDotFill } from "react-icons/go";

const plans = [
  {
    title: "Basic",
    tagline: "Perfect for new businesses",
    price: "₹3999",
    featured: false,
    features: [
      { text: "1-3 pages", ok: true },
      { text: "Basic UI/UX", ok: true },
      { text: "Mobile responsive", ok: true },
      { text: "3 Day Delivery", ok: true },
    ],
  },
  {
    title: "Standard",
    tagline: "Most popular",
    price: "₹7999",
    featured: true,
    features: [
      { text: "4-6 pages", ok: true },
      { text: "Modern design", ok: true },
      { text: "3 days delivery", ok: true },
      { text: "Free deployment", ok: true },
    ],
  },
  {
    title: "Premium",
    tagline: "For serious businesses",
    price: "₹13999",
    featured: false,
    features: [
      { text: "7+ pages", ok: true },
      { text: "Advanced UI/UX", ok: true },
      { text: "SEO optimized", ok: true },
      { text: "Free deployment", ok: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing">
      <h2 className="heading">Pricing Plans</h2>

      <div className="pricing-grid">
        {plans.map((plan, i) => (
          <div key={i} className={`card ${plan.featured ? "featured" : ""}`}>
            <div className="card-header">
              <span className={`tag ${plan.title.toLowerCase()}`}>
                {plan.tagline}
              </span>
              <img src={arrowIcon} alt="" className="arrow" />
            </div>

            <h3>{plan.title}</h3>
            <h1>{plan.price}</h1>

            <ul className="features">
              {plan.features.map((f, idx) => (
                <li key={idx}>
                  <img src={f.ok ? tickIcon : crossIcon} alt="" />
                  {f.text}
                </li>
              ))}
            </ul>

            <button className="btn">
              {plan.featured ? "Get Started" : "Choose Plan"}
            </button>
          </div>
        ))}
      </div>

      <div className="important-note">
   
       <p><span><GoDotFill /></span>  Free revision included</p>
       <p><span><GoDotFill /></span>  On-time delivery guaranteed</p>
       <p><span><GoDotFill /></span> 24/7 WhatsApp Support</p>

      </div>

     <div className="supprt-btn">
      <p>Need a custom plan?
       <a href="https://wa.me/qr/EXDPSY577V5AO1" className="social-cta" aria-label="whatapp"><span>  Let's talk on WhatsApp → </span> </a>  </p>
      </div>  
  
    </section>
  );
}
