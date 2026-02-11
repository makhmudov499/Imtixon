import React, { useEffect } from 'react'; 
import "./Section2.css";
import m1 from "../../assets/m1.png";
import { HiMail } from "react-icons/hi";
import { IoCall } from "react-icons/io5";
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,     
    });
  }, []);

  return (
    <div className='section2-containers'>
      <div className='section2-contents'>
        
        <div className='section2-images' data-aos="fade-right">
          <img src={m1} alt="Fruits" />
        </div>

        <div className='section2-texts'>
          <h1 data-aos="fade-down">
            We'd love to talk about how we <br /> can work together.
          </h1>
          
          <p className="descriptions" data-aos="fade-up" data-aos-delay="200">
            Simply dummy text of the printing and typesetting industry. Lorem had ceased to 
            been the industry's standard dummy text ever since the 1500s, when an unknown 
            printer took a galley.
          </p>

          <div className="contact-cardss">
            <div className="contact-cards" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon-boxs">
                <HiMail className="icons" />
              </div>
              <div className="card-infos">
                <h4>Message</h4>
                <p>support@organic.com</p>
              </div>
            </div>

            <div className="contact-cards" data-aos="zoom-in" data-aos-delay="600">
              <div className="icon-boxs">
                <IoCall className="icons" />
              </div>
              <div className="card-infos">
                <h4>Contact Us</h4>
                <p>+01 123 456 789</p>
              </div>
            </div>
          </div>

          <div className="social-linkss" data-aos="fade-up" data-aos-delay="800">
            <span><FaInstagram /></span>
            <span><FaFacebook /></span>
            <span><FaTwitter /></span>
            <span><FaPinterest /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;