import React, { useEffect, useState } from 'react'
import footer_logo from '../assets/image/Footer/kamdhenu_logo.png'
import { Link } from 'react-router-dom'

function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const handleScroll = () => {
        if (window.scrollY > 100) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };
    
      const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      };

      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            <footer>
                <div className="footer-top">
                    <div className="container">
                        <div className="row">
                            <div className="item col-lg-3">
                                <div className="footer-logo">
                                    <img src={footer_logo} alt="footer_logo" />
                                </div>
                                <p>
                                    Kamdhenu Gaujatan is a group of premium and sophisticated villas that promises to deliver
                                    experiences
                                    that are spirited, dynamic, and unique - a fit made for a perfect getaway.
                                </p>
                            </div>
                            <div className="item col-lg-3">
                                <div className="footer-link-title">Quick Links</div>
                                <ul>
                                    <li><Link to="/villaonrent">Villa on rent</Link></li>
                                    <li><Link to="/onedaypicnic">One Day Picnic</Link></li>
                                    <li><Link to="/event">Evnets</Link></li>
                                    <li><Link to="/wedding">Wedding Function</Link></li>
                                </ul>
                            </div>
                            <div className="item col-lg-3">
                                <div className="footer-link-title">Quick Links</div>
                                <ul>
                                    <li><Link to="/photos">Gallery</Link></li>
                                    <li><Link to="/contactpage">Contact Us</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                </ul>
                            </div>
                            <div className="item col-lg-3">
                                <div className="footer-link-title">Quick Links</div>
                                <a href className="footer-item">
                                    <div className="icon"><i className="fas fa-phone-alt" /></div>
                                    <div className="text">
                                        <Link to="tel:+91+90990 52692">Call +90990 52692</Link>
                                    </div>
                                </a>
                                <a href className="footer-item">
                                    <div className="icon"><i className="fas fa-envelope" /></div>
                                    <div className="text">
                                        <Link to="mailto:kamdhenugaujatan@gmail.com"> Mail:kamdhenugaujatan@gmail.com</Link>
                                    </div>
                                </a>
                                <a href className="footer-item">
                                    <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                                    <div className="text">
                                        Kamdhenu Gau Jatan, Opp Bionics English Academy, Canal Road, Ladvi, gam, Surat, Gujarat
                                        394325
                                    </div>
                                </a>
                                <div className="footer-social">
                                    <Link to="https://www.google.com/maps/place/Kamdhenu+Gau-Jatan/@21.2098224,72.7956893,12z/data=!4m6!3m5!1s0x3be045e038d25d57:0xef56eaa1ce593cae!8m2!3d21.205877!4d72.9578296!16s%2Fg%2F11td01jtbz?entry=ttu"><i className="fas fa-map-marker-alt" /></Link>
                                    <Link to="https://www.youtube.com/results?search_query=kamdhenu+gaujatan"><i className="fab fa-youtube" /></Link>
                                    <Link to="https://www.instagram.com/explore/locations/101939452766770/kamdhenu-gau-jatan/"><i className="fab fa-instagram-square" /></Link>
                                    <Link to="https://wa.me/1234567890?text=How can help you"><i className="fab fa-whatsapp-square" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="copy_right">
                                Copyright ©  Kamdhenu Gaujatan  All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </div>
                {isVisible && (
                    <button className="scrollToTopBtn" onClick={scrollToTop}>
                        Scroll to Top
                    </button>
                )}
            </footer>

        </div>
    )
}

export default Footer