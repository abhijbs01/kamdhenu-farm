import React from 'react'
import footer_logo from '../assets/image/Footer/kamdhenu_logo.png'

function Footer() {
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
                                    <li><a href>Platinum villa</a></li>
                                    <li><a href>Diamond Villa</a></li>
                                    <li><a href>Just One Day Picnic</a></li>
                                    <li><a href>Weddings/Functions</a></li>
                                    <li><a href>Corporate Events</a></li>
                                    <li><a href>Gallery</a></li>
                                </ul>
                            </div>
                            <div className="item col-lg-3">
                                <div className="footer-link-title">Quick Links</div>
                                <ul>
                                    <li><a href>Blog</a></li>
                                    <li><a href>Contact Us</a></li>
                                    <li><a href>About Us</a></li>
                                    <li><a href>T&amp;C</a></li>
                                    <li><a href>Privacy Policy</a></li>
                                    <li><a href>Refund and Return Policy</a></li>
                                </ul>
                            </div>
                            <div className="item col-lg-3">
                                <div className="footer-link-title">Quick Links</div>
                                <a href className="footer-item">
                                    <div className="icon"><i className="fas fa-phone-alt" /></div>
                                    <div className="text">Call +97262 52692</div>
                                </a>
                                <a href className="footer-item">
                                    <div className="icon"><i className="fas fa-envelope" /></div>
                                    <div className="text">Mail:kamdhenugaujatan@gmail.com</div>
                                </a>
                                <a href className="footer-item">
                                    <div className="icon"><i className="fas fa-map-marker-alt" /></div>
                                    <div className="text">
                                        Kamdhenu Gau Jatan, Opp Bionics English Academy, Canal Road, Ladvi, gam, Surat, Gujarat
                                        394325
                                    </div>
                                </a>
                                <div className="footer-social">
                                    <a href><i className="fas fa-map-marker-alt" /></a>
                                    <a href><i className="fab fa-youtube" /></a>
                                    <a href><i className="fab fa-instagram-square" /></a>
                                    <a href><i className="fab fa-whatsapp-square" /></a>
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
            </footer>
        </div>
    )
}

export default Footer