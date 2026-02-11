import React from 'react';
import './Section10.css';
import h24 from "../../assets/h24.png";

const Section10 = () => {
  return (
    <section className="section10">
      <div className="newsletter-container">
        <img src={h24}  className="newsletter-bg-img"  data-aos="fade-up"/>
        
        <div className="newsletter-overlay">
          <h2 className="newsletter-title">
            Subscribe to <br /> our Newsletter
          </h2>
          
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="newsletter-input" 
            />
            <button type="submit" className="subscribe-btn" data-aos="zoom-in">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Section10;