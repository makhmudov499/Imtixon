import React, { useEffect } from 'react' 
import "../About/Section4.css"
import w1 from "../../assets/w1.png"
import w2 from "../../assets/w2.png"
import w3 from "../../assets/w3.png"

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Facebook, Twitter, Instagram } from 'lucide-react'; 

const Section4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  const producta = [
    {
      name: 'Giovani Bacardo',
      category: 'Farmer',
      img: w1
    },
    {
      name: 'Marianne Loreno',
      category: 'Designer',
      img: w2
    },
    {
      name: 'Riga Pelore',
      category: 'Farmer',
      img: w3
    },
  ];

  return (
    <div className='team-section' data-aos="fade-down">
      <div className='team-header'>
        <i>Team</i>
        <h1>Our Organic Experts</h1>
        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s.</p>
      </div>

      <div className='team-grid'>
        {producta.map((item, index) => (
          <div className='team-card' key={index} data-aos="zoom-out" data-aos-delay={index * 200}>
            <div className='image-container'>
              <img src={item.img} alt={item.name} />
            </div>
            <div className='team-info'>
              <h3>{item.name}</h3>
              <div className='info-footer'>
                <span className='category'>{item.category}</span>
                <div className='social-icons'>
                  <Facebook size={16} />
                  <Twitter size={16} />
                  <Instagram size={16} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Section4;