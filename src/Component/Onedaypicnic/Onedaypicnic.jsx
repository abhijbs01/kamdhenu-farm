import React from 'react'
import { Link } from 'react-router-dom'
import onedaypicnic from '../../../src/assets/image/nightlight.jpeg'
import '../Onedaypicnic/Onedaypicnic.css'
import pic1 from '../../assets/image/onedaypicnic/pic1.png'
import pic2 from '../../assets/image/onedaypicnic/pic2.png'
import pic3 from '../../assets/image/onedaypicnic/pic3.png'
import pic4 from '../../assets/image/onedaypicnic/pic4.png'
import pic5 from '../../assets/image/onedaypicnic/pic5.png'
import pic6 from '../../assets/image/onedaypicnic/pic6.png'
import pic7 from '../../assets/image/onedaypicnic/pic7.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import food1 from '../../assets/image/food/food1.png'
import food3 from '../../assets/image/food/food3.png'
import food4 from '../../assets/image/food/food4.png'
import food5 from '../../assets/image/food/food5.png'
import Children1 from '../../assets/image/Childreplay/chil1.JPG'
import Children2 from '../../assets/image/Childreplay/chil2.JPG'
import Children3 from '../../assets/image/Childreplay/chil3.JPG'
import Children4 from '../../assets/image/Childreplay/chil4.JPG'
import Children5 from '../../assets/image/Childreplay/chil5.JPG'
import Children6 from '../../assets/image/Childreplay/chil6.JPG'
import Children7 from '../../assets/image/Childreplay/chil7.JPG'
import Children8 from '../../assets/image/Childreplay/chil8.JPG'
import swimming1 from '../../assets/image/swimmingpull/s1.png'
import swimming2 from '../../assets/image/swimmingpull/s2.jpeg'
import swimming3 from '../../assets/image/swimmingpull/s3.jpeg'
import swimming4 from '../../assets/image/swimmingpull/s4.jpeg'
import swimming5 from '../../assets/image/swimmingpull/s5.jpeg'
import swimming6 from '../../assets/image/swimmingpull/s6.jpeg'
import swimming7 from '../../assets/image/swimmingpull/s7.jpeg'
import village1 from '../../assets/image/villagelocation/v1.JPG'
import village2 from '../../assets/image/villagelocation/v2.JPG'
import village3 from '../../assets/image/villagelocation/v3.JPG'
import village4 from '../../assets/image/villagelocation/v4.JPG'
import village5 from '../../assets/image/villagelocation/v5.JPG'
import village6 from '../../assets/image/villagelocation/v6.JPG'
import village7 from '../../assets/image/villagelocation/v7.JPG'
import village8 from '../../assets/image/villagelocation/v8.JPG'
import village9 from '../../assets/image/villagelocation/v9.JPG'
import village10 from '../../assets/image/villagelocation/v10.JPG'
import village11 from '../../assets/image/villagelocation/v11.JPG'
import theater1 from '../../assets/image/theater/theater1.jpeg'
import theater2 from '../../assets/image/theater/theater2.jpeg'

function Onedaypicnic() {
    const Foodoption = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };
    const Childrenplay = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };
    const Swimmingpool = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };
    const VillageLocation = {
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        nav: false,
        dots: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        vertical: true,
    };
    const picnicItems = [
        { id: 1, imageSrc: pic1, text: 'Food' },
        { id: 2, imageSrc: pic2, text: 'Sports' },
        { id: 3, imageSrc: pic3, text: 'Swimming Pool' },
        { id: 4, imageSrc: pic4, text: "Children's water park" },
        { id: 5, imageSrc: pic5, text: "Children's candy house" },
        { id: 6, imageSrc: pic6, text: 'Movie theater' },
        { id: 7, imageSrc: pic7, text: 'DiscoTheque' },
    ];


    return (
        <div>
            {/* COMMON BLOCK START */}
            <div class="common-slider">
                <div class="image-block">
                    <img src={onedaypicnic} alt="slider_image" />
                    <div class="common-slider-content">
                        <div className="title">One Day Picnic</div>
                        <div className="link"><Link to="/">Home</Link> - One Day Picnic</div>
                    </div>
                </div>
            </div>
            {/* COMMON BLOCK END */}
            <div className="picnic-our-outer">
                <div className="container">
                    <div className="picnic-our-inner">
                        <div className="picnic-our-item row">
                            <div className=" col-lg-6 item">
                                <div className="title">Welcome to our slice of paradise!</div>
                                <p>Kamdhenu Gau Jatan offers a peaceful and serene environment for a one day picnic plan with
                                    your loved
                                    ones! The tranquil and peaceful environment ensures that you get the relaxation and comfort
                                    that you have been looking for. Nestled amidst lush greenery with a view overlooking the
                                    Tapti river, this place is perfect for a maddening crowd away from the hustle and bustle of
                                    everyday life.
                                </p>
                                <p>Located just 60 mins away from Sun city, it is the perfect getaway destination to relax,
                                    unwind, rejuvenate, and soothe your spirits. Our wide range of facilities and services are
                                    curated as per your convenience and pleasure to ensure that you enjoy a comfortable stay
                                    with us.
                                </p>
                                <p>Step into a world of luxury, convenience, and comfort to enjoy a perfect one day picnic with
                                    your family!
                                </p>
                            </div>
                            <div className="col-lg-6 item">
                                <div className="picnic-section">
                                    <div className="row picnic-item">
                                        {picnicItems.map((item) => (
                                            <div key={item.id} className="col-lg-4 item">
                                                <div className="item-inner">
                                                    <img src={item.imageSrc} alt={item.text} />
                                                    <div className="text">{item.text}</div>
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
            <div className="delight-outer">
                <div className="container">
                    <div className="delight-inner">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-3 item">
                                <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Foods" type="button" role="tab" aria-controls="v-pills-Foods" aria-selected="true">Foods</button>
                                    <button className="nav-link" id="v-pills-Sports-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Sports" type="button" role="tab" aria-controls="v-pills-Sports" aria-selected="false">Children Play area</button>
                                    <button className="nav-link" id="v-pills-Swimming-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Swimming" type="button" role="tab" aria-controls="v-pills-Swimming" aria-selected="false">Swiming Pull</button>
                                    <button className="nav-link" id="v-pills-Children-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Children" type="button" role="tab" aria-controls="v-pills-Children" aria-selected="false">Village Location</button>
                                    <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-Movie" type="button" role="tab" aria-controls="v-pills-Movie" aria-selected="false">Movie Theater</button>
                                </div>
                            </div>
                            <div className="col-lg-9 item">
                                <div className="tab-content" id="v-pills-tabContent">
                                    <div className="tab-pane fade show active" id="v-pills-Foods" role="tabpanel" aria-labelledby="v-pills-Foods-tab">
                                        <div className="image-block">
                                            <OwlCarousel className="owl-theme" {...Foodoption}>
                                                <div className="image-block">
                                                    <img src={food1} alt="Food" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={food3} alt="Food" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={food4} alt="Food" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={food5} alt="Food" />
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-Sports" role="tabpanel" aria-labelledby="v-pills-Sports-tab">
                                        <div className="image-block">
                                            <OwlCarousel className="owl-theme" {...Childrenplay}>
                                                <div className="image-block">
                                                    <img src={Children1} alt="Children" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={Children2} alt="Children" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={Children3} alt="Children" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={Children4} alt="Children" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={Children5} alt="Children" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={Children6} alt="Children" />
                                                </div>
                                                <div className="image-lock">
                                                    <img src={Children7} alt="Children" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={Children8} alt="Children" />
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-Swimming" role="tabpanel" aria-labelledby="v-pills-Swimming-tab">
                                        <div className="image-block">
                                            <OwlCarousel className="owl-theme" {...Swimmingpool}>
                                                <div className="image-block">
                                                    <img src={swimming1} alt="swimming" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={swimming2} alt="swimming" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={swimming3} alt="swimming" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={swimming4} alt="swimming" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={swimming5} alt="swimming" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={swimming6} alt="swimming" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={swimming7} alt="swimming" />
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-Children" role="tabpanel" aria-labelledby="v-pills-Children-tab">
                                        <div className="image-block">
                                            <OwlCarousel className="owl-theme" {...VillageLocation}>
                                                <div className="image-block">
                                                    <img src={village1} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village2} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village3} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village4} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village5} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village6} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village7} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village8} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village9} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village10} alt="villagelocation" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={village11} alt="villagelocation" />
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="v-pills-Movie" role="tabpanel" aria-labelledby="v-pills-Movie-tab">
                                        <div className="image-block">
                                            <OwlCarousel className="owl-theme" {...VillageLocation}>
                                                <div className="image-block">
                                                    <img src={theater1} alt="theater" />
                                                </div>
                                                <div className="image-block">
                                                    <img src={theater2} alt="theater" />
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="oneday-outer">
                <div className="container">
                    <div className="oneday-inner">
                        <div className="section-title">
                            <h1>Rules And Regulations</h1>
                        </div>
                        <div className="title" />
                        <div className="onyday-content d-flex justify-content-center">
                            <ul>
                                <li><span>☣</span>
                                    <div> Day Picnic Hours 09:00 Am To 09:00 Pm Only</div>
                                </li>
                                <li><span>☣</span>
                                    <div>  Proof Of Age And Photo Id Required For All Children</div>
                                </li>
                                <li><span>☣</span>
                                    <div>   Children Bellow The Age Of 14 Years Are Not Allowed To Play Paintball</div>
                                </li>
                                <li><span>☣</span>
                                    <div>  Lunch Timing: 12:00pm To 02:00pm</div>
                                </li>
                                <li><span>☣</span>
                                    <div>Additional Sporting Activities Are Also Available On Chargeable Bases</div>
                                </li>
                                <li><span>☣</span>
                                    <div>All Special Requests Will Be Considered At Sole Discretion Of The
                                        Management</div>
                                </li>
                                <li><span>☣</span>
                                    <div>No Charge For Children Under The Age Of 3 Years</div>
                                </li>
                                <li><span>☣</span>
                                    <div> Swimming Costume Is Compulsory. Swimming Rules And Policies Apply</div>
                                </li>
                                <li><span>☣</span>
                                    <div>  All Meals Will Be Vegetarian As Per Chef's Choice &amp; Will Be Served At
                                        Shamiyana Restaurant</div>
                                </li>
                                <li><span>☣</span>
                                    <div>     Hot Tea Timing: 04:00pm To 05:00pm</div>
                                </li>
                                <li><span>☣</span>
                                    <div>  While Departing, Takeaway Goodies Will Be Given To Each Guest</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onedaypicnic