import React from 'react'
import "./Section2.css"
import h2 from "../../assets/h2.png"
import h3 from "../../assets/h3.png"
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
const Section2 = () => {
  return (
    <div className='sec2'>
      <div className='sec3' data-aos="fade-down-right">
        <div className='card-content'>
          <i className='card-subtitle'>Natural!!</i>
          <h2 className='card-title'>Get Garden<br/>Fresh Fruits</h2>
        </div>
        <img src={h2} className='h2' alt='Fresh Fruits' />
      </div>
      
      <div className='sec4' data-aos="fade-down-left">
        <div className='card-content'>
          <i className='card-subtitle'>Offer!!</i>
          <h2 className='card-title'>Get 10% off<br/>on Vegetables</h2>
        </div>
        <img src={h3} className='h3' alt='Vegetables' />
      </div>
    </div>
  )
}

export default Section2