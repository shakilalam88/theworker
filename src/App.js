import React from 'react';
import './Global.css';
import './Main.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Blog from './Pages/Blog';
import Services from './Pages/Services';
import ContactUs from './Pages/ContactUs';
import ServicePage from './Pages/ServicePage';
import NavBar from './Header/NavBar';
import Footer from './Component/Footer';
import ServiceAll from './Pages/ServiceAll';
import Cart from './Cart/Cart'

function App() {
  return (
    <>
      <BrowserRouter>
            <NavBar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='AboutUs' element={<AboutUs />} />
                <Route path='Blog' element={<Blog />} />
                <Route path="ContactUs" element={<ContactUs />} />
                <Route path='Cart' element={<Cart/>}/>
                <Route path="services" element={<ServiceAll />} />
                <Route path='services/:name' element={<ServicePage />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
  );
}

export default App;
