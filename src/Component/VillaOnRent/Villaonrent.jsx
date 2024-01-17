import React from 'react'
import villonrent_bg from '../../assets/image/villaa view.jpeg'
import '../VillaOnRent/Villaonrent.css'
import { Link } from 'react-router-dom';
import space1 from '../../assets/image/villa/space1.png'
import space2 from '../../assets/image/villa/space2.png'
import space3 from '../../assets/image/villa/space3.png'
import space4 from '../../assets/image/villa/space4.png'
import space5 from '../../assets/image/villa/space5.png'
import space6 from '../../assets/image/villa/space6.png'
import Bedrooms1 from '../../assets/image/villa/bed1.png'
import Bedrooms2 from '../../assets/image/villa/bed2.png'
import Bedrooms3 from '../../assets/image/villa/bed3.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import gen1 from '../../assets/image/generalroom/g1.JPG'
import gen2 from '../../assets/image/generalroom/g2.JPG'
import gen3 from '../../assets/image/generalroom/g3.JPG'
import gen4 from '../../assets/image/generalroom/g4.JPG'
import gen5 from '../../assets/image/generalroom/g5.JPG'
import gen6 from '../../assets/image/generalroom/g6.png'
import gen8 from '../../assets/image/generalroom/g8.JPG'
import gen9 from '../../assets/image/generalroom/g9.JPG'
import vip1 from '../../assets/image/viproom/vip1.JPG'
import vip2 from '../../assets/image/viproom/vip2.JPG'
import vip3 from '../../assets/image/viproom/vip3.JPG'
import vip4 from '../../assets/image/viproom/vip4.JPG'
import vip5 from '../../assets/image/viproom/vip5.JPG'
import vip6 from '../../assets/image/viproom/vip6.JPG'
import vip7 from '../../assets/image/viproom/vip7.JPG'
import vip8 from '../../assets/image/viproom/vip8.JPG'
import vip9 from '../../assets/image/viproom/vip9.JPG'
import vip10 from '../../assets/image/viproom/vip10.JPG'
import vip11 from '../../assets/image/viproom/vip11.JPG'
import yagna1 from '../../assets/image/yagnakund/y1.JPG'
import yagna2 from '../../assets/image/yagnakund/y2.JPG'
import yagna3 from '../../assets/image/yagnakund/y3.JPG'
import yagna4 from '../../assets/image/yagnakund/y4.JPG'
import yagna5 from '../../assets/image/yagnakund/y5.JPG'
import yagna6 from '../../assets/image/yagnakund/y6.JPG'
import yagna7 from '../../assets/image/yagnakund/y7.JPG'
import yagna8 from '../../assets/image/yagnakund/y8.JPG'
import yagna9 from '../../assets/image/yagnakund/y9.JPG'
import g1 from '../../assets/image/gajebo/g1.png'
import g2 from '../../assets/image/gajebo/g2.png'
import g3 from '../../assets/image/gajebo/g3.png'
import g4 from '../../assets/image/gajebo/g6.png'

function Villaonrent() {
    const Geberalroom = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        animateOut: 'fadeOut',
        autoplayTimeout: 3000,
        vertical: true,
        animateIn: 'fadeIn',
        nav: false,
        dots: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };
    const Viproom = {
        items: 1,
        loop: true,
        margin: 10,
        autoplayTimeout: 3000,

        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        dots: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };
    const yagnakun = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        dots: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };
    const gajebo = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: false,
        dots: false,
        autoHeight: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 1,
            },
            1000: {
                items: 1,
            },
        },
    };
    const spaces = [
        { id: 1, imageSrc: space1, text: 'Drawing Room' },
        { id: 2, imageSrc: space2, text: 'Living Room' },
        { id: 3, imageSrc: space3, text: 'Dining Area' },
        { id: 4, imageSrc: space4, text: 'Own Wardrobe in All Bedrooms' },
        { id: 5, imageSrc: space5, text: 'Personal Lawn' },
        { id: 6, imageSrc: space6, text: 'Own Parking' },
    ];

    return (
        <>
            {/* COMMON BLOCK START */}
            <div class="common-slider">
                <div class="image-block">
                    <img src={villonrent_bg} alt="slider_image" />
                    <div class="common-slider-content">
                        <div className="title">Villa On Rent</div>
                        <div className="link"><Link to="/">Home</Link> - Villa On Rent</div>
                    </div>
                </div>
            </div>
            {/* COMMON BLOCK END */}

            {/* PLATINIUM BLOCK START */}
            <div className="platinium-1-outer">
                <div className="container">
                    <div className="platinium-inner">
                        <div className="platanium-1 row align-items-center">
                            <div className="col-lg-6 item" data-aos="fade-right" data-aos-duration="3000">
                                <div className="title">Destination Luxury Respite.</div>
                                <p>A perfect blend of contemporary design and functionality, our platinum villas come with
                                    breathtaking beauty and excellence. Themed as per the Bali escapades, a calming view can be
                                    experienced from every room, along with contemporary amenities including opulent beds and
                                    LED television. The full-sized windows offer an abundance of natural light for you to
                                    rejuvenate and connect with nature. </p>
                                <p>The 2-storey 3 BHK villa comes with a swimming pool and is nested amidst lush greenery and
                                    scenic beauty. Experience an invigorating and intimate relaxed getaway with your loved ones
                                    with our exclusive facilities and amenities.</p>
                                <p>Being one of the best villa on rent in Surat, we offer you the perfect escape from the
                                    hustle-bustle of city life. Enjoy in the jacuzzi, watch movies, and enjoy the perfect time
                                    with your family! We have curated the perfect slice of serenity, beauty, peace, and
                                    entertainment to make your stay a memorable one! </p>
                            </div>
                            <div className="col-lg-6 item" data-aos="fade-left" data-aos-duration="3000">
                                <div className="title">Explore the Villa</div>
                                <div className="service-1 mb-2">
                                    <div className="sub-title">Bedrooms</div>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 item">
                                            <div className="item-inner">
                                                <img src={Bedrooms1} alt="Bedrooms" />
                                                <div className="text">Bedroom 1</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 item">
                                            <div className="item-inner">
                                                <img src={Bedrooms2} alt="Bedrooms" />
                                                <div className="text">Bedroom 1</div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-xs-12 item">
                                            <div className="item-inner">
                                                <img src={Bedrooms3} alt="Bedrooms" />
                                                <div className="text">Common Spaces</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-1">
                                    <div className="sub-title mb-2">Other spaces</div>
                                    <div className="row">
                                        {spaces.map((space) => (
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 item" key={space.id}>
                                                <div className="item-inner">
                                                    <img src={space.imageSrc} alt="" />
                                                    <div className="text">{space.text}</div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PLATINIUM BLOCK END */}


            <div className="rent-block">
                {/*GENERAL ROOM START */}
                <div className="general-outrer">
                        <div className="general-inner">
                            <div className="row general-item align-items-center">
                                <div className="col-lg-6 item" data-aos="fade-right" data-aos-duration="3000">
                                    <OwlCarousel className="owl-theme" {...Geberalroom}>
                                        <div className="image-block">
                                            <img src={gen1} alt="generalroom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={gen2} alt="generalroom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={gen3} alt="generalroom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={gen4} alt="generalroom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={gen5} alt="generalroom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={gen6} alt="generalroom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={gen8} alt="generalroom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={gen9} alt="generalroom" />
                                        </div>
                                    </OwlCarousel>

                                </div>
                                <div className="col-lg-6 item" data-aos="fade-left" data-aos-duration="3000">
                                    <div className="general-content">
                                        <p>Indulge in the luxurious yet homely atmosphere of Kamdhenu Gaujatan Farm's General Rooms,
                                            offering a total of 30 elegantly designed spaces. Each room is a haven of comfort, featuring
                                            air conditioning to create a pleasant ambiance, ensuring a relaxing stay regardless of the weather
                                            . The carefully selected furnishings include cozy beds that guarantee a restful night's sleep,
                                            while the provision of lockers adds a touch of convenience for securing valuables.
                                        </p>
                                        <p>At Kamdhenu Gaujatan Farm, we go beyond the ordinary to deliver an exceptional experience.
                                            Our General Rooms are thoughtfully equipped with facilities that cater to your every need
                                            , embodying our commitment to guest satisfaction. Immerse yourself in the serene surroundings
                                            of the farm, where modern amenities seamlessly blend with nature's tranquility.</p>

                                        <p>  Whether you are here for a weekend retreat or a business escapade, our General Rooms provide
                                            a perfect blend of comfort and functionality. Embrace the warmth of our hospitality as you
                                            unwind in an environment designed to exceed your expectations. Kamdhenu Gaujatan Farm invites
                                            you to experience a harmonious blend of modernity and rural charm, ensuring an unforgettable
                                            stay for all our valued guests.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                {/* GEERAL ROOM END */}

                {/*  VIP ROOM  START    */}
                <div className="general-outrer">
                        <div className="general-inner">
                            <div className="row general-item align-items-center">
                                <div className="col-lg-6 item" data-aos="fade-right" data-aos-duration="3000">
                                    <div className="general-content">

                                        <p>Indulge in the epitome of comfort with opulent furnishings, and revel in the spaciousness that defines our VIP Rooms. Each room is a sanctuary of sophistication, boasting modern amenities to meet the highest standards of luxury travel. From premium bedding to personalized concierge service, we prioritize every detail to exceed your expectations.</p>
                                        <p>Elevate your stay at Kamdhenu Gaujatan Farm with our exclusive VIP Rooms, where luxury meets unparalleled service. Our four meticulously designed VIP accommodations offer a lavish retreat with a comprehensive range of facilities and services to ensure an extraordinary experience.
                                            Indulge in the epitome of comfort with opulent furnishings, and revel in the spaciousness that defines our VIP Rooms. Each room is a sanctuary of sophistication, boasting modern amenities to meet the highest standards of luxury travel. From premium bedding to personalized concierge service, we prioritize every detail to exceed your expectations.
                                            The VIP Rooms at Kamdhenu Gaujatan Farm are equipped with cutting-edge technology, providing seamless connectivity for both business and leisure travelers. Experience a culinary journey with our in-room dining services, offering a curated menu of gourmet delights. The expansive windows in each room provide panoramic views of the picturesque surroundings, allowing you to immerse yourself in the natural beauty of the farm.</p>
                                        <p>Our commitment to excellence extends beyond the rooms, as our dedicated staff ensures prompt and personalized service throughout your stay. Enjoy exclusive access to additional amenities, such as a private lounge and priority reservations for on-site activities.</p>
                                        <p>At Kamdhenu Gaujatan Farm, we redefine luxury by seamlessly blending modern elegance with traditional charm, creating an unforgettable haven for our discerning guests. Whether you're here for business or leisure, our VIP Rooms promise a stay that transcends expectations, delivering an unparalleled level of comfort and sophistication.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 item" data-aos="fade-left" data-aos-duration="3000">
                                    <OwlCarousel className="owl-theme" {...Viproom}>
                                        <div className="image-block">
                                            <img src={vip1} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip2} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip3} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip4} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip5} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip6} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip7} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip8} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip9} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip10} alt="viproom" />
                                        </div>
                                        <div className="image-block">
                                            <img src={vip11} alt="viproom" />
                                        </div>
                                    </OwlCarousel>

                                </div>

                            </div>
                        </div>
                </div>
                {/*  VIP ROOM  END    */}

                {/* YAGNAKUND START */}
                <div className="general-outrer">
                        <div className="general-inner">
                            <div className="row general-item align-items-center">
                                <div className="col-lg-6 item" data-aos="fade-right" data-aos-duration="3000">
                                    <OwlCarousel className="owl-theme" {...yagnakun}>
                                        <div className="image-block">
                                            <img src={yagna1} alt="yagnakund" />
                                        </div>
                                        <div className="image-block">
                                            <img src={yagna2} alt="yagnakund" />
                                        </div>
                                        <div className="image-block">
                                            <img src={yagna3} alt="yagnakund" />
                                        </div>
                                        <div className="image-block">
                                            <img src={yagna4} alt="yagnakund" />
                                        </div>
                                        <div className="image-block">
                                            <img src={yagna5} alt="yagnakund" />
                                        </div>
                                        <div className="image-block">
                                            <img src={yagna6} alt="yagnakund" />
                                        </div>
                                        <div className="image-block">
                                            <img src={yagna7} alt="yagnakund" />
                                        </div>
                                        <div className="image-block">
                                            <img src={yagna8} alt="yagnakund" />
                                        </div>
                                        <div className="image-block">
                                            <img src={yagna9} alt="yagnakund" />
                                        </div>

                                    </OwlCarousel>

                                </div>
                                <div className="col-lg-6 item" data-aos="fade-left" data-aos-duration="3000">
                                    <div className="general-content">
                                        <p>Embark on a divine journey at Kamdhenu Gaujatan Farm, where we offer the perfect setting for your religious ceremonies and spiritual gatherings. Our farm presents a unique opportunity to rent a dedicated space for Yagan Vidhi and other Dharmik Vidhi, providing a serene and sacred atmosphere for your religious functions.</p>
                                        <p>Nestled amidst nature, our farm is designed to be a tranquil haven, allowing devotees to immerse themselves in the spirituality of the occasion. The farm house for rent is specially curated to cater to religious events, with spacious interiors and outdoor areas to accommodate the sacred rituals and gatherings.</p>
                                        <p>Experience the harmonious blend of traditional and modern amenities, ensuring a seamless and reverent execution of your religious functions. From lush green surroundings to well-maintained spaces, our farm house provides an ideal backdrop for connecting with the divine</p>
                                        <p>Our dedicated staff is committed to ensuring that your religious events unfold smoothly, offering assistance and support throughout your stay. Kamdhenu Gaujatan Farm extends a warm invitation to those seeking a sacred space for Yagan Vidhi and other Dharmik Vidhi, where spirituality meets tranquility in perfect harmony. Rent our farm house to create cherished memories and celebrate your religious occasions with reverence and grace.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
                {/* YAGNAKUND END */}


                <div className="general-outrer">
                        <div className="general-inner">
                            <div className="row general-item align-items-center">
                                <div className="col-lg-6 item" data-aos="fade-right" data-aos-duration="3000">
                                    <div className="general-content">

                                        <p>The "gajebo" at Kamdhenu Gautjan Farm is a charming retreat within the rustic beauty of the venue. Nestled amidst the sprawling greenery, the gajebo serves as an intimate haven for gatherings and moments of reflection. Adorned with traditional decor and rustic charm, it provides a picturesque backdrop for events like weddings, family functions, or serene get-togethers.</p>
                                        <p>Surrounded by vibrant flora, the gajebo offers a touch of nature's elegance, creating a serene atmosphere for guests to immerse themselves in. Whether it's a small ceremony or a cozy celebration, the gajebo at Kamdhenu Gautjan Farm encapsulates the essence of tranquility and rustic allure. This carefully crafted space within the farm complements the overall ambiance, ensuring that every event held beneath its shelter becomes a memorable and enchanting experience for all.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 item" data-aos="fade-left" data-aos-duration="3000">
                                    <OwlCarousel className="owl-theme" {...gajebo}>
                                        <div className="image-block">
                                            <img src={g1} alt="gajebo" />
                                        </div>
                                        <div className="image-block">
                                            <img src={g2} alt="gajebo" />
                                        </div>
                                        <div className="image-block">
                                            <img src={g3} alt="gajebo" />
                                        </div>
                                        <div className="image-block">
                                            <img src={g4} alt="gajebo" />
                                        </div>
                                    </OwlCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>


        </>
    )
}

export default Villaonrent;