
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Shop from "./Components/Shop/Shop";
import ContactUs from "./Components/ContactUs/ContactUs"
import Not from './Components/NotFound/Not '
function App() {

  return (
    <>
     <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/shop" element={<Shop />} />
<Route path="/contact-us" element={<ContactUs />} /> 
  <Route path="*" element={<Not />} />
</Routes>

    </>
  )
}

export default App
