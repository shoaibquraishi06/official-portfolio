
import React, { useEffect, useState, useRef } from "react";
// import  './HeroSection.css'
import gsap from "gsap";
import heroImg from "../assets/heroimage.png";
import { ScrollTrigger } from "gsap/ScrollTrigger";
  import { Document, Page } from 'react-pdf';
  // import { FaWhatsapp } from "react-icons/fa";
 import resume from '../assets/resume.pdf'


gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
 
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);
  const mounted = useRef(true);

  
  const roles = ["FullStack Developer", "Frontend Developer", "Backend Developer"];

  useEffect(() => {
    mounted.current = true;
    const tick = setTimeout(() => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setText(prev => {
        if (isDeleting) return fullText.substring(0, prev.length - 1);
        return fullText.substring(0, prev.length + 1);
      });

    
      if (!isDeleting && text === fullText) {
        setIsDeleting(true);
        setTypingSpeed(600);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(n => n + 1);
        setTypingSpeed(200);
      } else {
        setTypingSpeed(isDeleting ? 60 : 120);
      }
    }, typingSpeed);

    return () => clearTimeout(tick);
   
  }, [text, isDeleting, loopNum, typingSpeed]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-photo', {
        y: 30,
        opacity: 0,
        duration: 0.9,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.hero-section', start: 'top 85%' }
      });

      gsap.from('.hero-top', {
        x: -18,
        opacity: 0,
        duration: 0.9,
        delay: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.hero-section', start: 'top 85%' }
      });
    });

    return () => ctx.revert();
  }, []);

  
  const handleDownloadPDF = () => {
   
    const link = document.createElement('a');
    link.href = resume;
    link.download = 'resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
     
     <section className="hero-section" aria-label="Hero">
     
         <div className="hero-right">
       
        <div className="hero-top">
          <h2 id="herotop">Hello,</h2>
          <h1 className="hero-title">
            <span id="hero-name">I'm Shoaib Quraishi,<br></br></span>
          
            <span className="work"> <span className="typed" aria-live="polite">{text}</span>
            <span className="cursor" aria-hidden="true">|</span> <br /></span>
            <span id="hero-name" >Web Developer</span>
          </h1>
        </div>
        <div className="hero-text">
          <p className="hero-description">
           I'm an expericned in Web development with 1+ years in field. collaboration with various companies and startups.
          </p>

          <div className="hero-button">
          <button id="button1" onClick={handleDownloadPDF}> CV Download</button>
          <button id="button2">View Work</button>
          </div>
        </div>
        </div> 
        <div className="hero-left">
          <div className="hero-photo">
            <img src={heroImg} alt="Portrait of Shoaib Quraishi" />
          </div>
        </div>
       
      </section>
    );
};
export default HeroSection

