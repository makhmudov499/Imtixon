import React, { useEffect } from 'react';
import './Section8.css';
import h19 from '../../assets/h19.png';
import h20 from '../../assets/h20.png';
import h21 from '../../assets/h21.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section8 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const images = [h19, h20, h21];

  return (
    <section className="section8-wrapper">
      <div className="section8-container">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="category-card" 
            data-aos="fade-up"
            data-aos-delay={index * 100} 
          >
            <div className="image-box">
              <img src={img} alt={`category-${index}`} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section8;