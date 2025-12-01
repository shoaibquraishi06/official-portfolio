import './App.css'
import { useEffect } from 'react'
import Mainroutes from './routes/Mainroutes.jsx'
import Nav from './components/Nav.jsx'
import Footer from './components/Footer.jsx'
import Lenis from 'lenis'
import PricingAnimation from './components/Pricing2.jsx'


 


function App() {
   
    useEffect(() => {

     const lenis = new Lenis();

// Use requestAnimationFrame to continuously update the scroll
function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

    })
// Initialize Lenis
 
 
 
  return (
 <>

     
     <Nav />
      <Mainroutes />
      {/* <PricingAnimation /> */}
      {/* <Footer /> */}
    </>
  )
}

export default App
