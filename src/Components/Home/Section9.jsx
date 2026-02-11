import React from 'react'
import "./Section9.css"
import h22 from "../../assets/h22.png"
import h23 from "../../assets/h23.png"
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
const Section9 = () => {
  return (
    <div className='Section9'>
        <i>News</i>
        <h1>Discover weekly content about <br /> organic food, & more</h1>
        <button  data-aos="zoom-in">More News </button>
    <div className='img1'>
        <img src={h22}  data-aos="fade-up" />
    <div className='img11'>
        <p>👤By Rachi Card</p>
        <h1>The Benefits of Vitamin D & How to Get It</h1>
        <b>Simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum</b>
        <button  data-aos="zoom-in">Read More -</button>
    </div>
    </div>
    <div className='img2'>
         <img src={h23}   data-aos="fade-down"/>
    <div className='img22'>
        <p>👤By Rachi Card</p>
        <h1>Our Favourite Summertime Tommeto</h1>
        <b>Simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum</b>
        <button  data-aos="zoom-in">Read More -</button>
    </div>
    </div>
    </div>
  )
}

export default Section9