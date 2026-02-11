import React, { useEffect } from 'react' // 1. useEffect ni import qilish esdan chiqqan
import "./Section4.css"
import product1 from "../../assets/product_1.png"
import c1 from "../../assets/c1.png"
import c2 from "../../assets/c2.png"
import c3 from "../../assets/c3.png"
import c4 from "../../assets/c4.png"
import c5 from "../../assets/c5.png"
import c6 from "../../assets/c6.png"
import c7 from "../../assets/c7.png"
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  { name: 'Calabrese Broccoli', category: 'Vegetable', old_price: 20, price: 13, star: 5, img: product1 },
  { name: 'Fresh Banana Fruites', category: 'Fresh', old_price: 20, price: 14, star: 5, img: c1 },
  { name: 'White Nuts', category: 'Millets', old_price: 20, price: 15, star: 5, img: c2 },
  { name: 'Vegan Red Tomato', category: 'Vegetable', old_price: 20, price: 17, star: 5, img: c3 },
  { name: 'Mung Bean', category: 'Health', old_price: 20, price: 11, star: 5, img: c4 },
  { name: 'Brown Hazelnut', category: 'Nuts', old_price: 20, price: 12, star: 5, img: c5 },
  { name: 'Eggs', category: 'Fresh', old_price: 20, price: 17, star: 5, img: c6 },
  { name: 'Zelco Suji Elaichi Rusk', category: 'Fresh', old_price: 20, price: 15, star: 5, img: c7 },
];

const Section4 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className='section4' data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
      <p>Categories</p>
      <h1>Our Products</h1>
      <div className='product-wrapper'>
        {products.map((item, index) => (
          <div className='product-item' key={index} data-category={item.category}>
            <img src={item.img} alt={item.name} />
            <p className="product-name">{item.name}</p>
            <div className='description'>
              <div className="price-box">
                <del>${item.old_price}.00</del>
                <span>${item.price}.00</span> 
              </div>
              <span className='stars'>{'⭐'.repeat(item.star)}</span>
            </div>
          </div>
        ))}
      </div>
      <button className='but' data-aos="zoom-in">Load More</button>
    </div>
  )
}

export default Section4;