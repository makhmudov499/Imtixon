
import React from 'react'
import "./Section3.css"
import h4 from "../../assets/h4.png"
import asd from "../../assets/h26.png"
import asded from "../../assets/h27.png"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Section7 = () => {
     useEffect(() => {
    AOS.init({
      duration: 1000, 
    })
  }, [])
}
const Section3 = () => {
  return (
    <div className='section3-container'>
      <div className='section3-image'>
        <img src={h4} alt='Fresh Fruits' />
      </div>
      
      <div className='section3-content'>
        <p className='section3-subtitle'>About Us</p>
        <h2 className='section3-title'>
          We Believe in Working<br/>
          Accredited Farmers
        </h2>
        <p className='section3-description'>
        Simply dummy text of the printing and typesetting industry. Lorem had ceased to <br /> 
        been the industry's standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.
        </p>
        
        <div className='section3-features'>
          <div className='feature-item'>
            <div className='feature-icon'>
             <img src={asd} />
            </div>
            <div className='feature-text'>
              <h3 className='feature-title'>Organic Foods Only</h3>
              <p className='feature-desc'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
          </div>
          
          <div className='feature-item'>
            <div className='feature-icon'>
                <img src={asded} />
            </div>
            <div className='feature-text'>
              <h3 className='feature-title'>Quality Standards</h3>
              <p className='feature-desc'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</p>
            </div>
          </div>
        </div>
        
        <button className='section3-button' data-aos="zoom-in">
          Shop Now →
        </button>
      </div>
    </div>
  )
}

export default Section3