import React, { useEffect } from 'react'
import "./Section3.css"
import p1 from "../../assets/p1.png"
import { Tractor, LeafyGreen, ArrowRightCircle } from 'lucide-react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      
    })
  }, [])

  return (
    <section className='section3-container'>
      <div className='section3-wrapper'>
        <div 
          className='image-block'
          data-aos="fade-right"
        >
          <img src={p1} alt="Salad bowl" />
        </div>

        <div className='sect-wrapper'>
          <i 
            className="subtitles"
            data-aos="fade-up"
          >
            About Us
          </i>
          
          <h1 
            className="main-titles"
            data-aos="fade-up"
          >
            We do Creative <br /> Things for Success
          </h1>
          
          <p 
            className="description"
            data-aos="fade-up"
          >
            Simply dummy text of the printing and typesetting industry. Lorem had ceased 
            to been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley.
          </p>

          <p 
            className="descriptionw"
            data-aos="fade-up"
          >
            Simply dummy text of the printing and typesetting industry. Lorem had ceased 
            to been the industry's standard dummy text ever since the 1500s, when an 
            unknown printer took a galley.
          </p>

          <div className='features'>
            <div 
              className='feature-item'
              data-aos="fade-up"
            >
              <div className="icon-box">
                <Tractor size={24} />
              </div>
              <div className="feature-text">
                <h3>Modern Agriculture Equipment</h3>
              </div>
            </div>

            <div 
              className='feature-item'
              data-aos="fade-up"
            >
              <div className="icon-box">
                <LeafyGreen size={24} />
              </div>
              <div className="feature-text">
                <h3>No growth hormones are used</h3>
              </div>
            </div>
          </div>

          <button 
            className='explore-btn'
            data-aos="fade-up"
            
          >
            Explore More <ArrowRightCircle size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Section3