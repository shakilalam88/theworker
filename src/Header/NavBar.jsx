import React from 'react';
import Home from '../Pages/Home';
import AboutUs from '../Pages/AboutUs';
import Blog from '../Pages/Blog';
import Services from '../Pages/Services';
import ContactUs from '../Pages/ContactUs';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Search from '../Component/Search'
import CustomizedBadges from '../Component/CartBadge';
import ButtonGreen from '../Component/ButtonGreen';

const NavLink = () => {
    return (
        <>
            <header className="header">
                <img src="images/lo.png" alt="our main logo" className="logo" />
                <nav className="navbar">
                    <ul className="navbar-lists">
                        <li><Link to='/' className="navbar-link home-link">Home</Link></li>
                        <li><Link to='AboutUs' className="navbar-link about-link">AboutUs</Link></li>
                        <li><Link to='Blog' className="navbar-link service-link">Blog</Link></li>
                        <li><Link to='Services' className="navbar-link portfolio-link">Services</Link></li>
                        <li><Link to='ContactUs' className="navbar-link contact-link">ContactUs</Link></li>
                        <li><Search/></li>
                        <li><CustomizedBadges/></li>
                        <li><ButtonGreen text='Request Quots'/></li>
                    </ul>
                </nav>
                <div className="mobile-navbar-btn">
                    <ion-icon name="menu-outline" className="mobile-nav-icon"></ion-icon>
                    <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
                </div>
            </header>
        </>
    )
}
const NavBar = () => {
    return (

        <BrowserRouter>
            <NavLink />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='AboutUs' element={<AboutUs />} />
                <Route path="services" element={<Services />} />
                <Route path='Blog' element={<Blog />} />
                <Route path="ContactUs" element={<ContactUs />} />
            </Routes>
        </BrowserRouter>
    )
}

export default NavBar