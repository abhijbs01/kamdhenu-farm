import React from 'react'
import '../Home/Home.css'
import villa1 from '../../assets/image/viproom/vip3.JPG'
import villa2 from '../../assets/image/generalroom/g6.png'
import villa3 from '../../assets/image/gajebo/g3.png'
import villaicon1 from '../../assets/image/sec2_1.png'
import villaicon2 from '../../assets/image/sec2_2.png'
import villaicon3 from '../../assets/image/sec2_3.png'
import pro1 from '../../assets/image/pro1.png'
import pro2 from '../../assets/image/pro2.png'
import pro3 from '../../assets/image/pro3.png'
import about1 from '../../assets/image/office/off1.JPG'
import event1 from '../../assets/image/wedding/phithi.jpeg'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Link } from 'react-router-dom'
// import main_image from '../../assets/image/footer_bg1.jpg'
import video from '../../assets/video/video.mp4'

function Home() {
  const events = {
    items: 1,
    loop: true,
    stagePadding: 50,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    nav: true,
    dots: false,
    autoHeight: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 3,
      },
    },
  };
  return (
    <div>
      {/* SLIDER START */}
      <div className="slider-outer">
        <video width={'100%'} height="600" controls={false} muted autoPlay playsInline>
          <source src={video} type="video/mp4" />
        </video>
      </div>


      {/* SLIDER END */}
      {/* SECTION-1 START */}
      <div className="section-1-outer">
        <div className="container">
          <div className="section-title">
            <h1>Indulge in luxury, explore our villas.</h1>
          </div>
          <div className="section-inner row">
            <div className="section1-item col-lg-4  col-md-6 col-sm-12 col-xs-12"
              data-aos="fade-in"
              data-aos-duration="3000">
              <img src={villa1} alt="villa" />
              <div className="view_more_btn">
                <Link to="/villaonrent">  View More</Link>
              </div>
            </div>
            <div className="section1-item col-lg-4  col-md-6 col-sm-12 col-xs-12" data-aos="fade-in"
              data-aos-duration="3000">
              <img src={villa2} alt="villa" />
              <div className="view_more_btn">
                <Link to="/villaonrent">  View More</Link>
              </div>
            </div>
            <div className="section1-item col-lg-4  col-md-6 col-sm-12 col-xs-12" data-aos="fade-in"
              data-aos-duration="3000">
              <img src={villa3} alt="villa" />
              <div className="view_more_btn">
                <Link to="/villaonrent">  View More</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION-1 END */}

      {/* SECTION-2 START */}
      <div className="section-2-outer">
        <div className="container">
          <div className="section-2-inner">
            <div className="section-2-content">
              <div className="title">
                Enjoy luxury at your leisure!
              </div>
              <p>Our properties at Rio Colina blend seamlessly with the natural habitat while offering a perfect
                amalgamation of luxury, leisure, convenience, and natural beauty.</p>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 section-2-item">
                  <div className="icon">
                    <img src={villaicon1} alt="section-2" />
                  </div>
                  <div className="text">
                    <div className="text-1">Premium Collection Of Villas</div>
                    <div className="text-2">Retreat to comfort at our luxurious rooms and cottages and enjoy the
                      perfect weekend getaway amidst sparkling water and manicured lawns. Experience peace
                      and
                      tranquility at the most awe-inspiring destination.
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 section-2-item"
                >
                  <div className="icon">
                    <img src={villaicon2} alt="section-2" />
                  </div>
                  <div className="text">
                    <div className="text-1">Premium Collection Of Villas</div>
                    <div className="text-2">Retreat to comfort at our luxurious rooms and cottages and enjoy the
                      perfect weekend getaway amidst sparkling water and manicured lawns. Experience peace
                      and
                      tranquility at the most awe-inspiring destination.
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-xs-12 section-2-item"
                >
                  <div className="icon">
                    <img src={villaicon3} alt="section-2" />
                  </div>
                  <div className="text">
                    <div className="text-1">Premium Collection Of Villas</div>
                    <div className="text-2">Retreat to comfort at our luxurious rooms and cottages and enjoy the
                      perfect weekend getaway amidst sparkling water and manicured lawns. Experience peace
                      and
                      tranquility at the most awe-inspiring destination.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* SECTION-2 END */}

      {/* PROCESSBAR-START */}
      <div className="process-background">
        <div className="process-outer">
          <div className="container">
            <div className="process-inner">
              <div className="section-title">
                <h2>How It Works</h2>
              </div>
              <div className="process-content row">
                <div className="item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <div className="item-inner">
                    <div className="icon">
                      <img src={pro1} alt="process-1" />
                      <div className="number">
                        1
                      </div>
                    </div>
                    <div className="title">Select A villa</div>
                    <div className="text">
                      Choose from a wide range of platinum, diamond villas, and exclusive cottages as per
                      your
                      need to bask in a pool of comfort, soothing, and pleasant experience.
                    </div>
                  </div>
                </div>
                <div className="item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <div className="item-inner">
                    <div className="icon">
                      <img src={pro2} alt="process-2" />
                      <div className="number">
                        2
                      </div>
                    </div>
                    <div className="title">Login and Payment</div>
                    <div className="text">
                      Get yourself registered and log in from the account. Make the payment online to book
                      the villa of your choice.
                    </div>
                  </div>
                </div>
                <div className="item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                  <div className="item-inner">
                    <div className="icon">
                      <img src={pro3} alt="process-3" />
                      <div className="number">
                        3
                      </div>
                    </div>
                    <div className="title">Enjoy and Stay</div>
                    <div className="text">
                      Experience your stay's peace, relaxation, and comfort with our 5-star amenities to
                      create an unforgettable memory.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* PROCESSBAR-EMD */}

      {/* ABOUT  STRAT */}
      <section className="about_us-outer">
        <div className="container">
          <div className="row align-items-center">
            <div className="about_us_img col-lg-6 col-md-6 col-sm-12 col-xs-12"
              data-aos="zoom-in"
              data-aos-duration="3000"
            >
              <div className="about_us_img_block">
                <div className="multiple_img_block">
                  <img src={about1} alt="about" />
                </div>
              </div>
            </div>
            <div className="about_us col-lg-6 col-md-6 col-sm-12 col-xs-12"
              data-aos="zomm-in"
              data-aos-duration="3000"
            >
              <div className="title">
                About Us
              </div>
              <div className="text">
                <p>Kamdhenu Gaujatn is a group of premium and sophisticated villas that promises to deliver
                  experiences that are spirited, dynamic, and unique - a fit made for a perfect getaway. Set
                  in the raised terrain of a hill, our property is spread across 48 acres of lush greenery.
                  Overlooking the Tapti river, this luxurious place exudes grandeur and elegance of the
                  highest stature. Hop on a sumptuous ride of 5-star amenities and experience a feeling like
                  never before! We leave no stone unturned to ensure your stay with us is a truly memorable
                  one in terms of service, dining, and entertainment.</p>
                <p>
                  Savor the authentic taste of luxury and class with villa booking at Rio Colina.
                </p>
              </div>
              <div className="btn">
                <Link to="/about">Read More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT END */}



      <div className="event-outer">
        <div className="event-inner row">
          <div className="left-item col-lg-3">
            <div className="title">
              Events
            </div>
            <p>Host memorable events of your life in our exquisite and spacious event spaces.</p>
            <div className="btn">
              <Link to="/event">  View All</Link>
            </div>
          </div>
          <div className="right-item col-lg-9 ">
            <div className="section-inner">
              <OwlCarousel className="owl-theme" {...events}>
                <div className="event-item">
                  <img src={event1} alt="event" />
                  <div className="view_more_btn">
                    Birth Party
                  </div>
                </div>
                <div className="event-item">
                  <img src={event1} alt="event" />
                  <div className="view_more_btn">
                    Baby Shower
                  </div>
                </div>
                <div className="event-item">
                  <img src={event1} alt="event" />
                  <div className="view_more_btn">
                    Engagement
                  </div>
                </div>
                <div className="event-item">
                  <img src={event1} alt="event" />
                  <div className="view_more_btn">
                    Corporate Events
                  </div>
                </div>
                <div className="event-item">
                  <img src={event1} alt="event" />
                  <div className="view_more_btn">
                    Prevedding
                  </div>
                </div>
              </OwlCarousel>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home