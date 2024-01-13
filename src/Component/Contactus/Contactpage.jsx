import React from 'react'
import contact_bg from '../../assets/image/gajebo/g1.JPG'
import '../Contactus/Contactpage.css'
import { Link } from 'react-router-dom';
function Contactpage() {
    return (
        <div>
            {/* Coomon Slider */}
            <div class="common-slider">
                <div class="image-block">

                    <img src={contact_bg} alt="slider_image" />
                    <div class="common-slider-content">
                        <div className="title">Contact</div>
                        <div className="link"><Link to="/">Home</Link> - Contact</div>
                    </div>
                </div>
            </div>
            {/* CONTACT US START */}
            <section className="contact_us">
                <div className="container">
                    <div className="row">
                        <div className=" col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <div className="contact_inner">
                                <div className="row">
                                    <div className="col-md-10">
                                        <div className="contact_form_inner">
                                            <div className="contact_field">
                                                <h3>Contact Kamdhenu Gaujatan Exotic Riverside Villas</h3>
                                                <p>We love to answer your questions and help you plan your stay
                                                </p>
                                                <input type="text" className="form-control form-group" placeholder="Name" />
                                                <input type="text" className="form-control form-group" placeholder="Email" />
                                                <textarea className="form-control form-group" placeholder="Message" defaultValue={""} />
                                                <button className="contact_form_submit">Send</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="right_conatct_social_icon d-flex align-items-end">
                                            <div className="socil_item_inner d-flex justify-content-center">
                                                <li><a href="#"><i className="fab fa-facebook-square" /></a></li>
                                                <li><a href="#"><i className="fab fa-instagram" /></a></li>
                                                <li><a href="#"><i className="fab fa-twitter" /></a></li>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact_info_sec">
                                    <h4>Contact Info</h4>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-headset" />
                                        <span>+91 97265 2697</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-envelope-open-text" />
                                        <span>kamdhenugaujatan@gmail.com</span>
                                    </div>
                                    <div className="d-flex info_single align-items-center">
                                        <i className="fas fa-map-marked-alt" />
                                        <span>Kamdhenu Gau Jatan, Opp Bionics English Academy, Canal Road, Ladvi, gam, Surat,
                                            Gujarat 394325</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*Map */}
            <section className="map_sec">
                <div className="container">
                    <div className="col-lg-12 ">
                        <div className="map_inner">
                            <div className="map_bind">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7439.309138026664!2d72.95783!3d21.205877!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be045e038d25d57%3A0xef56eaa1ce593cae!2sKamdhenu%20Gau-Jatan!5e0!3m2!1sen!2sin!4v1700405206637!5m2!1sen!2sin" width="100%" height={450} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* CONTACT US END */}
        </div>
    )
}

export default Contactpage