import React, { useEffect } from 'react'
import "./Section1.css"
import g1 from "../../assets/g1.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
     
    });
  }, []);

  return (
    <div className='not'>
        <img 
          src={g1} 
          alt="" 
          data-aos="fade-right" 
        />
        
       <div className='nota' data-aos="fade-left">
          <h1 data-aos="zoom-in" data-aos-delay="200">404</h1>
          <h2 data-aos="fade-up" data-aos-delay="400">Page not found</h2>
          <p data-aos="fade-up" data-aos-delay="600">
            The page you are looking for doesn't exist or has been moved
          </p>
          <button data-aos="flip-up" data-aos-delay="800">
            Go to Homepage
          </button>
       </div>
    </div>
  )
}

export default Section1