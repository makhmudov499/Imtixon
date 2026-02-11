import React, { useEffect } from 'react'; 
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./Section5.css"; 
import q1 from "../../assets/q1.png"
import q2 from "../../assets/q2.png"
import q3 from "../../assets/q3.png"
import q4 from "../../assets/q4.png"

const Section5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const producta = [
    { name: 'Giovani Bacardo', img: q1 },
    { name: 'Marianne Loreno', img: q2 },
    { name: 'Riga Pelore', img: q3 },
    { name: 'Riga Pelore', img: q4 },
  ];

  return (
    <div className='section5-containerr'>
        <i>About Us</i>
        <h1>What We Offer for You</h1>
      <div className='product-grid'>
        {producta.map((item, index) => (
          <div 
            className='product-card' 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={index * 100}
          >
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Section5;