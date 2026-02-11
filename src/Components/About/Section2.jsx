import React, { useEffect } from 'react'
import "./Section2.css"
import { ShoppingCart, Leaf, ClockArrowDown, CreditCard } from 'lucide-react'
import b2 from "../../assets/b2.png"
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      
    })
  }, [])

  return (
    <div className='section2-container'>
      <div className='choose-main'>
        <div className='choose-text-side'>
          <i className="subtitler">Why Choose us?</i>
          <h1 className="main-titler">We do not buy from the <br /> open market & traders.</h1>
          <p className="main-desc">Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard the 1500s, when an unknown</p>
          
          <div className='natural-items'>
            <div className='natural-box'>
              <div className='badge'>100% Natural Product</div>
              <p>Simply dummy text of the printing and typesetting industry Lorem Ipsum</p>
            </div>
            <div className='natural-box'>
              <div className='badge'>Increases resistance</div>
              <p>Filling, and temptingly healthy, our Biona Organic Granola with Wild Berries is just the thing</p>
            </div>
          </div>
        </div>

        <div 
          className='choose-image-side'
          data-aos="fade-left"
         
        >
          <img src={b2} alt="Vegetables" />
        </div>
      </div>

      <div className='info-cards-wrapper'>
        <div 
          className='card-item'
          data-aos="fade-up"
         
        >
          <div className='icon-container'><ShoppingCart /></div>
          <h3>Return Policy</h3>
          <p>Simply dummy text of the printintypesetting industry.</p>
        </div>
        
        <div 
          className='card-item'
          data-aos="fade-up"
        
        >
          <div className='icon-container'><Leaf /></div>
          <h3>100% Fresh</h3>
          <p>Simply dummy text of the printintypesetting industry.</p>
        </div>
        
        <div 
          className='card-item'
          data-aos="fade-up"
     
        >
          <div className='icon-container'><ClockArrowDown /></div>
          <h3>Support 24/7</h3>
          <p>Simply dummy text of the printintypesetting industry.</p>
        </div>
        
        <div 
          className='card-item'
          data-aos="fade-up"
        >
          <div className='icon-container'><CreditCard /></div>
          <h3>Secured Payment</h3>
          <p>Simply dummy text of the printintypesetting industry.</p>
        </div>
      </div>
    </div>
  )
}

export default Section2