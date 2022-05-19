import React, { useState, useContext } from 'react';
import { Link } from "react-router-dom";
import Search from '../Component/Search'
import CustomizedBadges from '../Component/CartBadge';
import ButtonGreen from '../Component/ButtonGreen';
import MenuIcon from '@mui/icons-material/Menu';
import CartIcon from '../Component/CartIcon';
// import { CartCount } from '../Cart/Cart';
import { CartCount } from '../Context';

// export const CartCountItem = () => {
//     const CartCt = useContext(CartCount);
//     console.log(CartCt);
//     return (
//         <>
//             <p>{CartCt}</p>
//         </>
//     )
// }

const NavBar = () => {
    const [isActive, setisActive] = useState(false)
    const context = useContext(CartCount);
    console.log(context);
    return (
        <>
            <header className={isActive ? "header active" : "header"}>
                <img src="images/lo.png" alt="our main logo" className="logo" />
                <nav className="navbar">
                    <ul className="navbar-list">
                        <li><Link to='/' className="navbar-link home-link">Home</Link></li>
                        <li><Link to='AboutUs' className="navbar-link about-link">AboutUs</Link></li>
                        <li><Link to='Blog' className="navbar-link service-link">Blog</Link></li>
                        <li><Link to='services' className="navbar-link portfolio-link">Services</Link></li>
                        <li><Link to='ContactUs' className="navbar-link contact-link">ContactUs</Link></li>
                        <li><Search /></li>
                        <li><Link to='Cart'><CartIcon /></Link></li>
                        <li><ButtonGreen text='Request Quots' /></li>
                    </ul>
                </nav>
                <div className="mobile-navbar-btn" onClick={() => { setisActive(!isActive) }}>
                    <ion-icon name="menu-outline" className="mobile-nav-icon"><MenuIcon /></ion-icon>
                    <ion-icon name="close-outline" className="mobile-nav-icon"></ion-icon>
                </div>
            </header>
        </>
    )
}

export default NavBar