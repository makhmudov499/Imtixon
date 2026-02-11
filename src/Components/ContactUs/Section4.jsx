import React, { useEffect } from 'react';
import "./Section4.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Section4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const sendToTelegram = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const token = "8508034364:AAGmRO0uXJr3rPJWyrI7ikeug9QSX0cnSDk"; 
    const chatId = "7718244637"; 

    const message = `
🚀 **Yangi xabar keldi!**

👤 **Ism:** ${data.name}
📧 **Email:** ${data.email}
🏢 **Kompaniya:** ${data.organization}
📝 **Mavzu:** ${data.subject}
💬 **Xabar:** ${data.message}
    `;

    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text: message,
        parse_mode: "Markdown" 
      })
    })
    .then(response => {
      if (response.ok) {
        alert("Xabar botingizga yuborildi! ✅");
        e.target.reset(); 
      } else {
        alert("Xatolik yuz berdi. ❌");
      }
    })
    .catch(error => {
      console.error("Xatolik:", error);
      alert("Internetda xatolik! 🌐");
    });
  };

  return (
    <div className='section4-containers'>
      <form className='section4-formss' onSubmit={sendToTelegram} data-aos="fade-up">
        
        <div className='form-rowss'>
          <div className='input-group-itemss' data-aos="fade-right" data-aos-delay="100">
            <label>Full Name*</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              className='form-inputss' 
              required 
            />
          </div>

          <div className='input-group-itemss' data-aos="fade-left" data-aos-delay="200">
            <label>Your Email*</label>
            <input 
              type="email" 
              name="email" 
              placeholder="example@yourmail.com" 
              className='form-inputss' 
              required 
            />
          </div>
        </div>

        <div className='form-rowss'>
          <div className='input-group-itemss' data-aos="fade-right" data-aos-delay="300">
            <label>Company*</label>
            <input 
              type="text" 
              name="organization" 
              placeholder="Your company name" 
              className='form-inputss' 
            />
          </div>

          <div className='input-group-itemss' data-aos="fade-left" data-aos-delay="400">
            <label>Subject*</label>
            <input 
              type="text" 
              name="subject" 
              placeholder="How can we help" 
              className='form-inputss' 
            />
          </div>
        </div>

        <div className='input-group-itemss' data-aos="fade-up" data-aos-delay="500">
          <label>Message*</label>
          <textarea 
            name="message"
            placeholder="Hello there, I would like to talk about..." 
            className='form-textareass'
            required
          ></textarea>
        </div>

        <button type="submit" className='form-buttonss' data-aos="zoom-in" data-aos-delay="600">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Section4;