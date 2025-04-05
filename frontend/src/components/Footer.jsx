import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
import "./Footer.css"

export const Footer = () => {
  return (
    <div className="footer-clean">
        <footer>

            <div className="container">
                <div className="footer__logo col-md-3">
                    <NavLink to="/">
                        <img src={'/images/logo.png'} alt="Food Villa Logo" style={{ width: '150px', height: 'auto' }} />
                    </NavLink>
                </div>

                <div className="col-md-3">
                    <h3 className="heading">QUICK LINKS</h3>
                    <ul>
                        <li><NavLink to="/">HOME</NavLink></li>
                        <li><NavLink to="/about">ABOUT</NavLink></li>
                        <li><NavLink to="/contact">CONTACT US</NavLink></li>
                    </ul>
                </div>

                <div className="col-md-3">
                    <h3 className="heading">CONTACT INFORMATION</h3>
                    <ul>
                        <li>PHONE NUMBER: 0123456789</li>
                        <li>EMAIL: <a href="https://mail.google.com/" target="_blank">foodvilla@gmail.com</a></li>
                    </ul>
                    <br />
                    <h3 className="heading">ADDRESS</h3>
                    <ul>
                    <li>Food Villa head office DHA Phase 5, Karachi, Pakistan</li>
                    </ul>
                </div>

                <div className="col-md-3 item social">
                    <h3 className="heading">FOLLOW US ON SOCIAL MEDIA</h3>
                    <a href="https://www.facebook.com" target='_blank'><FaFacebook /></a>
                    <a href="https://www.twitter.com" target='_blank'><FaTwitter /></a>
                    <a href="https://www.instagram.com" target='_blank'><FaInstagram /></a>
                </div>
                <p className="copyright">©Copyright 2024 Food Villa. All Rights Reserved.</p>
            </div>
        </footer>
    </div>
  );
}