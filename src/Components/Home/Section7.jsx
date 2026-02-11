import React from 'react'
import "./Section7.css"
import h18 from "../../assets/h18.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Section7 = () => {
     useEffect(() => {
    AOS.init({
      duration: 1000, 
    })
  }, [])

  return (
    <div className='section7-container'>
      <div className='section7-image'>
        <img src={h18} alt='Organic Farm' data-aos="fade-up"/>
      </div>
      
      <div className='section7-content'>
        <i className='section7-subtitle'>Eco Friendly</i>
        <h2 className='section7-title'>
          Econis is a Friendly<br/>
          Organic Store
        </h2>
        
        <div className='section7-features'>
          <div className='feature-box'>
            <h3 className='feature-box-title'>Start with Our Company First</h3>
            <p className='feature-box-text'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
              doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          
          <div className='feature-box'>
            <h3 className='feature-box-title'>Learn How to Grow Yourself</h3>
            <p className='feature-box-text'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
              doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
          
          <div className='feature-box'>
            <h3 className='feature-box-title'>Farming Strategies of Today</h3>
            <p className='feature-box-text'>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium
              doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section7