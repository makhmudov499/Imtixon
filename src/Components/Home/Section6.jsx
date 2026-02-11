import React from 'react'
import "./Section6.css"
import h14 from "../../assets/h14.png"
import h15 from "../../assets/h15.png"
import h16 from "../../assets/h16.png"
import h17 from "../../assets/h17.png"

import AOS from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup'; 
const Section5 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);}

const Section6 = () => {


  const productc = [
    {
      name: 'Mung Bean',
      category: 'Vegetable',
      old_price: 20,
      price: 11,
      star: 5,
      img: h14
    },
    {
      name: 'Brown Hazelnut',
      category: 'Vegateble',
      old_price: 20,
      price: 12,
      star: 5,
      img: h15
    },
    {
      name: 'Onion',
      category: 'Vegatable',
      old_price: 20,
      price: 17,
      star: 5,
      img: h16
    },
    {
      name: 'Cabbage',
      category: 'Vegetable',
      old_price: 20,
      price: 17,
      star: 5,
      img: h17
    },
    
  ]
  
  return (
    <div className='section6'  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <i>Offer</i>
      <h1>We Offer Organic For You</h1>
      <button data-aos="zoom-in">View All Product</button>
      <div className='offer'>
      {
        productc.map((item, index)=>{
          return(
             <div className='productc-item' key={index} data-category={item.category}>
                <img src={item.img} alt={item.name}/>
                <p>{item.name}</p>
                <div className='descriptions'>
                  <p>
                    <del>${item.old_price}.00</del>
                    <p>${item.price}.00</p>
                  </p>
                  <span>{'⭐'.repeat(item.star)}</span>
                </div>
              </div>
          )
        })
      }
      </div>
    </div>
    
  )
}

export default Section6