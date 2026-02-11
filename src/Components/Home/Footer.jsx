import React from 'react'
import "./Footer.css"
import logo from "../../assets/Logo .png"
import a1 from "../../assets/a1.png"
import a2 from "../../assets/a2.png"
import a3 from "../../assets/a3.png"
import a4 from "../../assets/a4.png"

const Footer = () => {
  return (
    <div className='Section10'>
    <div className='sect1'>
        <h1>Contact Us</h1>
        <p>Email</p>
        <b>needhelp@Organia.com</b>
        <p>Phone</p>
        <b>666 888 888 </b>
        <p>Adress</p>
        <b>88 road, borklyn street, USA</b>
    </div>
   <div className='sect2'>
    <div className="logo-header">
        <img src={logo} style={{ width: "36px", height: "53px" }} alt="logo" />
        <i>Organick</i>
    </div>

    <p className="footer-desc">
        Simply dummy text of the printing and typesetting industry. <br />
        Lorem Ipsum simply dummy text of the printing
    </p>

   
    <div className='img'>
        <img src={a1} alt="ig" />
        <img src={a2} alt="fb" />
        <img src={a3} alt="tw" />
        <img src={a4} alt="pt" />
    </div>
</div>
    <div className='sect3'>
        <h1>Utility Pages</h1>
        <h2>Style Guide</h2>
        <h3>404 Not Found</h3>
        <h4>Password Protected</h4>
        <h5>Licences</h5>
        <h6>Changelog</h6>
    </div>
    </div>
  )
}

export default Footer