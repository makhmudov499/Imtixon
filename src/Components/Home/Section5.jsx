import React, { useEffect } from 'react';
import "./Section5.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
import { Star } from 'lucide-react';
import h50 from "../../assets/h50.png";

const Section5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='section5-wrapper'>
      <div className='section5-container'>
        
        {/* Testimonial Section */}
        <div className='testimonial-section' data-aos="fade-up">
          <i className="testimonial-subtitle">Testimonial</i>
          <h1 className="testimonial-title">What Our Customer Saying?</h1>
          
          <div className='testimonial-content'>
            <img src={h50} alt="Sara Taylor" className='customer-image' />
            
            <div className='stars'>
              <Star fill="#FF9D00" color="#FF9D00" size={20} />
              <Star fill="#FF9D00" color="#FF9D00" size={20} />
              <Star fill="#FF9D00" color="#FF9D00" size={20} />
              <Star fill="#FF9D00" color="#FF9D00" size={20} />
              <Star fill="#FF9D00" color="#FF9D00" size={20} />
            </div>
            
            <p className='testimonial-text'>
              Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy <br /> text of the printing and typesetting industry. Lorem Ipsum has been.
            </p>
            
            <h3 className='customer-name'>Sara Taylor</h3>
            <p className='customer-role'>Consumer</p>
            
            <div className='dots'>
              <span className='dot active'></span>
              <span className='dot'></span>
              <span className='dot'></span>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className='stats-container' data-aos="zoom-out-right">
          
          <div className='stat-item'>
            <div className='stat-circle'>
              <h3 className='stat-number'>
                <CountUp end={100} duration={3} enableScrollSpy />%
              </h3>
              <p className='stat-label'>Organic</p>
            </div>
          </div>
          
          <div className='stat-item' data-aos="zoom-out-down">
            <div className='stat-circle'>
              <h3 className='stat-number'>
                <CountUp end={285} duration={3} enableScrollSpy />
              </h3>
              <p className='stat-label'>Active Product</p>
            </div>
          </div>
          
          <div className='stat-item' data-aos="zoom-out-up">
            <div className='stat-circle'>
              <h3 className='stat-number'>
                <CountUp end={350} duration={3} enableScrollSpy />+
              </h3>
              <p className='stat-label'>Organic Orchads</p>
            </div>
          </div>
          
          <div className='stat-item' data-aos="zoom-out-left">
            <div className='stat-circle'>
              <h3 className='stat-number'>
                <CountUp end={25} duration={3} enableScrollSpy />+
              </h3>
              <p className='stat-label'>Years of Farming</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section5;