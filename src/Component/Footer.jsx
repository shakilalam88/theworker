import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <footer>
        <div className="footer">
            <div className="footer_col footer1">
                <div className="footer-logo">
                    <img src="./Images/logo.png" alt="" />
                </div>
                <p className="footer-address"><LocationOnIcon/>
                    Lorem ipsum dolor sit amet consectetur.
                </p>
                <p><MailIcon/><a href="mailto:webmaster@example.com">theworker@gmail.com</a></p>
                <p><PhoneIcon/><a href="tel:+6494461709">+9188888888</a></p> 
            </div>
            <div className="footer_col footer2">
                <h4>our services</h4>
                <ul>
                    <li><a href="">land transport</a></li>
                    <li><a href="">consumer goods</a></li>
                    <li><a href=""> big traller truck</a></li>
                    <li><a href="">main load truck</a></li>
                    <li><a href="">san cargo</a> </li>
                    <li><a href="">track consultancy</a></li>
                </ul>
            </div>
            <div className="footer_col footer3">
                <h4>useful links</h4>
                <ul>
                    <li><a href="">get in touch</a></li>
                    <li><a href="">real time tracking</a></li>
                    <li><a href="">delivery report</a></li>
                    <li><a href="">supply mangement</a></li>
                    <li><a href="">download boucher</a></li>
                    <li><a href="">transport service</a></li>
                </ul>
            </div>
            <div className="footer_col footer4">
                <h4>newsleter signup</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim ullam harum nesciunt. Aliquam, totam nostrum?</p>
                <form action="" method="get">
                    <input type="text" name="" id="" />
                    <button type="submit">send</button>                    
                </form>
                <div className="social">
                    <h4>follow us</h4>
                    <ul>
                        <li><a href=""><FacebookIcon/></a></li>
                        <li><a href=""><TwitterIcon/></a></li>
                        <li><a href=""><RssFeedIcon/></a></li>
                        <li><a href=""><InstagramIcon/></a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer_bottom">
            <div className="copyright"><p>copyrigh 2022 The Worker</p></div>
            <div className="menu">
                <ul>
                    <li><a href="">privacy</a></li>
                    <li><a href="">about us</a></li>
                    <li><a href="">contact</a></li>
                    <li><a href="">blog</a></li>
                </ul>
                <div className="upbox"></div>
            </div>
        </div>
    </footer>
  )
}

export default Footer