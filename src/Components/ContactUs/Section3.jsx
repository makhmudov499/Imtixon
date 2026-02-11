import React from 'react';
import { useEffect } from 'react';
import "./Section3.css";
import barg from "../../assets/barg.jpg";
import { IoLocationOutline } from "react-icons/io5";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Section2 = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      
    })
  }, [])}
const Section3 = () => {
  return (
    <div className='bargs-containers' >
      <div className='bargs-cards'>
        <img src={barg} alt="Barg" className='bargs-bg-imgs' />

        <div className='bargs-content-boxs'>
          <i className='bargs-subtitles'>Location</i>
          <h1 className='bargs-titles'>Our Farms</h1>
          <p className='bargs-texts'>
            Established fact that a reader will be distracted <br />
            by the readable content of a page when looking <br />
            a layout. The point of using.
          </p>

          <div className='bargs-locations-lists'>
            <div className='bargs-location-items'>
              <div className='bargs-icon-wrappers'>
                <IoLocationOutline className='bargs-icons' />
              </div>
              <div className='bargs-info-boxs'>
                <h3>New York, USA:</h3>
                <p>299 Park Avenue New York, <br /> New York 10171</p>
              </div>
            </div>

            <div className='bargs-location-items'>
              <div className='bargs-icon-wrappers'>
                <IoLocationOutline className='bargs-icons' />
              </div>
              <div className='bargs-info-boxs'>
                <h3>London, UK:</h3>
                <p>30 Stamford Street, <br /> London SE1 9LQ</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;