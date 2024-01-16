import React from 'react'
import aboutus from '../../assets/image/about_1.png'
import { Link } from 'react-router-dom'
import '../About/About.css'
import t1 from '../../assets/image/temple/t1.JPG'
import t2 from '../../assets/image/temple/t2.JPG'
import t3 from '../../assets/image/temple/t3.JPG'
import t4 from '../../assets/image/temple/t4.JPG'
import '../../Component/VillaOnRent/Villaonrent.css'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import well from '../../assets/image/well/well.JPG'
import watershow from '../../assets/image/waterfall/w1.jpeg'
import parking from '../../assets/image/parking/park2.JPG';
import gajebo from '../../assets/image/gajebo/g3.JPG'
import farm1 from '../../assets/image/farmview/fv1.JPG'
import farm2 from '../../assets/image/farmview/fv1.JPG'
import farm3 from '../../assets/image/farmview/fv2.JPG'
import farm4 from '../../assets/image/farmview/fv3.JPG'
import farm5 from '../../assets/image/farmview/fv4.JPG'
import farm6 from '../../assets/image/farmview/fv5.JPG'
import farm7 from '../../assets/image/farmview/fv6.JPG'
import farm8 from '../../assets/image/farmview/fv7.JPG'
import farm9 from '../../assets/image/farmview/fv9.JPG'
import farm10 from '../../assets/image/farmview/fv10.JPG'
import farm11 from '../../assets/image/farmview/fv11.JPG'
import e1 from '../../assets/image/entryview/entry1.png'
import e2 from '../../assets/image/get/get7.jpeg'
import e3 from '../../assets/image/get/get1.png'
import e4 from '../../assets/image/get/get4.png'
import e5 from '../../assets/image/get/get6.png'
import e6 from '../../assets/image/nightlight.jpeg'
import v1 from '../../assets/image/villagelocation/v1.JPG'
import v2 from '../../assets/image/villagelocation/v2.JPG'
import v3 from '../../assets/image/villagelocation/v3.JPG'
import v4 from '../../assets/image/villagelocation/v4.JPG'
import v5 from '../../assets/image/villagelocation/v5.JPG'
import v6 from '../../assets/image/villagelocation/v6.JPG'
import v7 from '../../assets/image/villagelocation/v7.JPG'
import v8 from '../../assets/image/villagelocation/v8.JPG'
import v9 from '../../assets/image/villagelocation/v9.JPG'
import v10 from '../../assets/image/villagelocation/v10.JPG'
import v11 from '../../assets/image/villagelocation/v11.JPG'
import o1 from '../../assets/image/office/off1.JPG'
import o2 from '../../assets/image/office/off5.JPG'


function About() {
    const temple = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };

    const Farmview = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };

    const Entryview = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };

    const Villagelocation = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };
    const office = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };
    const testimonial = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };

    return (
        <>
            {/* COMMON BLOCK START */}
            <div class="common-slider">
                <div class="image-block">
                    <img src={aboutus} alt="slider_image" />
                    <div class="common-slider-content">
                        <div className="title">About Us</div>
                        <div className="link"><Link to="/">Home</Link> - About us</div>
                    </div>
                </div>
            </div>
            {/* COMMON BLOCK END */}

            {/* ABOUT WELCOME START */}
            <div className="about-welcome-outer">
                <div className="container">
                    <div className="about-welcome-inner">
                        <div className="aboutus-welcome-item row">
                            <div className="col-lg-5 item">
                                <OwlCarousel className="owl-theme" {...temple}>
                                    <div className="img-block">
                                        <img src={t1} alt="temple" />
                                    </div>
                                    <div className="img-block">
                                        <img src={t2} alt="templ" />
                                    </div>
                                    <div className="img-block">
                                        <img src={t3} alt="temple" />
                                    </div>
                                    <div className="img-block">
                                        <img src={t4} alt="temple" />
                                    </div>
                                </OwlCarousel>
                            </div>
                            <div className="col-lg-7 item">
                                <div className="title">Welcome to Kamdhenu Gaujatan</div>
                                <p>
                                    Kamdhenu Gaujatan is a group of premium and sophisticated villas that promises to deliver
                                    experiences that are spirited, dynamic, and unique - a fit made for a perfect getaway. Set
                                    in the raised terrain of a hill, our property is spread across 48 acres of lush greenery.
                                    Overlooking the Tapti river, this luxurious place exudes grandeur and elegance of the
                                    highest stature. Hop on a sumptuous ride of 5-star amenities and experience a feeling like
                                    never before! We leave no stone unturned to ensure your stay with us is a truly memorable
                                    one in terms of service, dining, and entertainment. The soothing surroundings at our villa
                                    will revive the senses dulled by the rigors of city life.
                                </p>
                                <p> Savor the authentic taste of luxury and class with villa booking at Kamdhenu Gaujatan.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ABOUT WELCOME END */}

            {/* OUR VALUE START */}
            <div className="our-value-outer">
                <div className="container">
                    <div className="our-value-inner">
                        <div className="section-title">
                            <h1>Our Farms Views</h1>
                        </div>
                        <div className="row our-value-item">
                            <section className="card-area">
                                <section className="card-section">
                                    <div className="card">
                                        <div className="flip-card">
                                            <div className="flip-card__container">
                                                <div className="card-front">
                                                    <div className="card-front__tp card-front__tp--city">
                                                        <h2 className="card-front__heading">
                                                            Well
                                                        </h2>
                                                    </div>
                                                    <div className="card-front__bt">
                                                        <p className="card-front__text-view card-front__text-view--city">
                                                            View me
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card-back">
                                                    <img src={well} alt="well" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inside-page">
                                            <div className="inside-page__container">
                                                <p className="inside-page__text">
                                                    Kamdhenu Gaujatan Farm thrives in our village, exemplifying sustainable agriculture. Caring for cows and promoting rural prosperity, the farm is a beacon of self-sufficiency
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="card-section">
                                    <div className="card">
                                        <div className="flip-card">
                                            <div className="flip-card__container">
                                                <div className="card-front">
                                                    <div className="card-front__tp card-front__tp--city">
                                                        <h2 className="card-front__heading">
                                                            Water show
                                                        </h2>
                                                    </div>
                                                    <div className="card-front__bt">
                                                        <p className="card-front__text-view card-front__text-view--city">
                                                            View me
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card-back">
                                                    <img src={watershow} alt="watershow" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inside-page">
                                            <div className="inside-page__container">
                                                <p className="inside-page__text">
                                                    Kamdhenu Gaujatan Farm welcomes all with a captivating water show at its entry gate, creating a refreshing and inviting ambiance in our village.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="card-section">
                                    <div className="card">
                                        <div className="flip-card">
                                            <div className="flip-card__container">
                                                <div className="card-front">
                                                    <div className="card-front__tp card-front__tp--city">
                                                        <h2 className="card-front__heading">
                                                            Parking
                                                        </h2>
                                                    </div>
                                                    <div className="card-front__bt">
                                                        <p className="card-front__text-view card-front__text-view--city">
                                                            View me
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card-back">
                                                    <img src={parking} alt="parking" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inside-page">
                                            <div className="inside-page__container">
                                                <p className="inside-page__text">
                                                    Kamdhenu Gaujatan Farm features dedicated parking for 200 bikes, prioritizing eco-friendly transportation and ensuring convenient access for visitors in the village community.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                                <section className="card-section">
                                    <div className="card">
                                        <div className="flip-card">
                                            <div className="flip-card__container">
                                                <div className="card-front">
                                                    <div className="card-front__tp card-front__tp--city">
                                                        <h2 className="card-front__heading">
                                                            Gajebo
                                                        </h2>
                                                    </div>
                                                    <div className="card-front__bt">
                                                        <p className="card-front__text-view card-front__text-view--city">
                                                            View me
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card-back">
                                                    <img src={gajebo} alt="entryview" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="inside-page">
                                            <div className="inside-page__container">
                                                <p className="inside-page__text">
                                                    Kamdhenu Gaujatan Farm's gazebo, nestled in a serene location, offers a tranquil retreat for villagers, fostering community connections and relaxation.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            {/* OUR VALUE END */}

            <div className="about-block">
                <div className="general-outrer">
                    <div className="container">
                        <div className="general-inner">
                            <div className="row general-item align-items-center">
                                <div className="col-lg-6 item">
                                    <OwlCarousel className="owl-theme" {...Farmview}>
                                        <div className="image-block">
                                            <img src={farm1} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm2} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm3} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm4} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm5} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm6} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm7} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm8} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm9} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm10} alt="Farmview" />
                                        </div>
                                        <div className="image-block">
                                            <img src={farm11} alt="Farmview" />
                                        </div>
                                    </OwlCarousel>

                                </div>
                                <div className="col-lg-6 item">
                                    <div className="general-content">
                                        <p>Kamdhenu Gautjan Farm is a versatile venue that seamlessly blends the tranquility of nature with state-of-the-art facilities for various events. This picturesque setting caters to a myriad of functions, from serene corporate retreats to lively social gatherings. The farm offers an ideal backdrop for team-building exercises, workshops, and conferences, providing a serene environment conducive to productivity and innovation.</p>
                                        <p>With sprawling green landscapes and well-equipped event spaces, Kamdhenu Gautjan Farm accommodates diverse corporate needs. The venue's versatility extends to hosting vibrant social events, such as weddings, birthdays, and cultural celebrations, ensuring memorable experiences for attendees. The farm's commitment to excellence is reflected in its meticulous event planning, catering, and audiovisual support, ensuring the seamless execution of every occasion.</p>
                                        <p>Whether it's a corporate seminar or a joyous celebration, Kamdhenu Gautjan Farm harmonizes nature and functionality, creating an enchanting atmosphere that enhances the success of any event.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="general-outrer">
                    <div className="container">
                        <div className="general-inner">
                            <div className="row general-item align-items-center">
                                <div className="col-lg-6 item">
                                    <div className="general-content">
                                        <p>The entrance to Kamdhenu Gautjan Farm beckons with an enchanting blend of elegance and rustic charm. As you approach the gate, intricate wrought ironwork welcomes you into a world where nature and sophistication coalesce seamlessly. The grand entrance stands as a prelude to the idyllic beauty that awaits within.</p>
                                        <p>Two majestic pillars adorned with ornate motifs stand guard on either side of the gate, forming a regal arch that introduces visitors to the sprawling expanse beyond. The gate itself, a masterpiece of craftsmanship, features intricate carvings depicting pastoral scenes, celebrating the essence of rural life. As it swings open, it reveals a landscape adorned with lush greenery and manicured lawns, setting the stage for the enchanting experience that Kamdhenu Gautjan Farm promises.</p>
                                        <p>The entry gate of Kamdhenu Gautjan Farm is more than a mere threshold; it is a portal to an oasis where natural splendor meets refined elegance, inviting all who pass through to embrace the beauty of the surroundings.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 item">
                                    <OwlCarousel className="owl-theme" {...Entryview}>
                                        <div className="image-block">
                                            <img src={e1} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={e2} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={e3} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={e4} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={e5} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={e6} alt="entry" />
                                        </div>
                                    </OwlCarousel>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="general-outrer">
                    <div className="container">
                        <div className="general-inner">
                            <div className="row general-item align-items-center">
                                <div className="col-lg-6 item">
                                    <OwlCarousel className="owl-theme" {...Villagelocation}>
                                        <div className="image-block">
                                            <img src={v1} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v2} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v3} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v4} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v5} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v6} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v7} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v8} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v9} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v10} alt="entry" />
                                        </div>
                                        <div className="image-block">
                                            <img src={v11} alt="entry" />
                                        </div>
                                    </OwlCarousel>

                                </div>
                                <div className="col-lg-6 item">
                                    <div className="general-content">
                                        <p>Nestled in the heart of rustic charm, Kamdhenu Gautjan Farm captures the essence of a village atmosphere, making it an idyllic location for weddings, pre-wedding shoots, and various events. The village-inspired setting exudes a quaint and timeless appeal, transporting guests to a bygone era where simplicity meets elegance.</p>
                                        <p>Surrounded by sprawling fields and framed by age-old trees, the farm encapsulates the picturesque beauty of a village. Stone pathways wind through the property, leading to quaint corners perfect for intimate ceremonies or capturing cherished moments on camera. Authentic village architecture, with thatched roofs and rustic wooden structures, adds to the charm and creates a warm, welcoming ambiance.</p>
                                        <p>The natural landscape, including vibrant flora and the gentle melody of nearby streams, completes the immersive village experience. Kamdhenu Gautjan Farm not only provides a stunning backdrop for celebrations but also offers a retreat into the serenity of rural life, ensuring that every event becomes a memorable journey into the heart of a village-inspired haven.</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="general-outrer">
                    <div className="container">
                        <div className="general-inner">
                            <div className="row general-item align-items-center">
                                <div className="col-lg-6 item">
                                    <div className="general-content">
                                        <p>Kamdhenu Gautjan's corporate office is strategically situated in a modern urban setting, combining sophistication with contemporary design, making it an ideal location for professional photoshoots. The office facade boasts sleek architecture with large glass panels, allowing for abundant natural light to illuminate the space.</p>
                                        <p>The entrance is marked by a stylish corporate logo, creating a visually striking first impression. The surrounding urban landscape provides a dynamic backdrop, reflecting the energy of the business environment. Inside, well-designed workspaces feature a harmonious blend of functionality and aesthetics, offering versatile settings for capturing professional moments.</p>
                                        <p>The reception area is tastefully decorated, providing a welcoming atmosphere for clients and visitors. Executive offices showcase a balance of modern furnishings and corporate identity, offering a polished setting for individual or group photography sessions. Kamdhenu Gautjan's office location is not just a hub for business; it is a visual testament to the organization's commitment to excellence and innovation, making it an ideal spot for showcasing the corporate identity through photography.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6 item">
                                    <OwlCarousel className="owl-theme" {...office}>
                                        <div className="image-block">
                                            <img src={o1} alt="entry" />
                                        </div>

                                        <div className="image-block">
                                            <img src={o2} alt="entry" />
                                        </div>
                                    </OwlCarousel>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="about-out-outer">
                <div class="container">
                    <div class="about-out-content">
                        <div class="title">Thinking of buying your dream getaway kamdhenu Gaujatan?</div>
                        <Link to="/contact" class="btn">Let's Content</Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About
