import React from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import slide1 from '../../assets/image/marrigre/me5.png'
import slide2 from '../../assets/image/marrigre/me6.png'
import event_1 from '../../assets/image/event/e1.png'
import event_2 from '../../assets/image/event/e2.png'
import event_3 from '../../assets/image/event/e3.png'
import event_4 from '../../assets/image/event/e4.png'
import event_5 from '../../assets/image/event/e5.png'
import event_6 from '../../assets/image/event/e6.png'
import event_7 from '../../assets/image/event/e7.png'
import '../Events/Event.css'


function Events() {

    const EventSlider = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }

    const eventServices = [
        { id: 1, imageSrc: event_1, title: 'Round table set-up' },
        { id: 2, imageSrc: event_2, title: 'Theatre for conference' },
        { id: 3, imageSrc: event_3, title: 'Breakfast' },
        { id: 4, imageSrc: event_4, title: 'Lunch' },
        { id: 5, imageSrc: event_5, title: 'Hi-Tea' },
        { id: 6, imageSrc: event_6, title: 'Dinner' },
        { id: 7, imageSrc: event_7, title: 'Indoor games' },
    ];


    return (
        <div>
            {/* EVENT SLIDER START */}

            <OwlCarousel className='event-slider owl-theme' loop margin={10} nav {...EventSlider}>
                <div className="slider-block">
                    <img src={slide1} alt="slider1" />
                </div>
                <div className="slider-block">
                    <img src={slide2} alt="slider2" />
                </div>
            </OwlCarousel>
            {/* EVENT SLIDER END */}
            {/* EVEN 1 START */}
            <div className="event-1-outer">
                <div className="container">
                    <div className="row item">
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 xol-xs-12 left-item">
                            <div className="main-title">Exclusive events and priceless memories.</div>
                            <p>Our team of professional event planners, coordinators, and designers possess the required skills
                                and expertise to handle large-scale conferences and small board meetings. We work closely with
                                our clients in order to understand their objectives and goals. We thus have a reputation to
                                deliver high-quality and seamless events that will go beyond your expectations and requirements.
                            </p>
                            <p>
                                We, at Rio Colina, understand that the true success of any event lies in its details. Thus, we
                                pay close attention to every aspect of an event, from the decor, the layout, the audiovisual
                                setup as well as the food and beverages. Our need for being immaculate and perfect ensures that
                                every event is done with perfection.
                            </p>
                            <div className="service-title">
                                What We Are At Best To Organize
                            </div>
                            <div className="service-item row">
                                {eventServices.map(item => (
                                    <div key={item.id} className="item col-xl-4 col-lg-4 col-md-6 col-sm-12 col-sm-12">
                                        <div className="item-inner">
                                            <div className="img">
                                                <img src={item.imageSrc} alt="event" />
                                            </div>
                                            <div className="title">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 xol-xs-12 right-item">
                            <bod>
                                <form action="takeaction.php" method="post">
                                    <h1>Enquiry Now</h1>
                                    <fieldset>
                                        <label htmlFor="name">Name:</label>
                                        <input type="text" id="name" name="user_name" required />
                                        <label htmlFor="contactnumber">Contact No:</label>
                                        <input type="text" id="contactno" name="user_number" required />
                                        <label htmlFor="mail">Email:</label>
                                        <input type="email" id="mail" name="user_email" required />
                                        <label htmlFor="bio">Detailed Information On What You Want To Perform:</label>
                                        <textarea id="bio" name="user_bio" defaultValue={""} required />
                                        <button type="submit">Submit</button>
                                    </fieldset>
                                </form>
                            </bod>
                        </div>
                    </div>
                </div>
            </div>
            {/* EVENT 1 END */}
            {/* EVENT-2  STRAT */}
            <div className="about-out-outer">
                <div className="container">
                    <div className="about-out-content">
                        <div className="title">Get all the help you need from RIO to organize events</div>
                        <a className="btn">Plan your Event</a>
                    </div>
                </div>
            </div>
            {/*EVENT-2 END */}
            {/*EVENT 3 START  */}
            <section className="py-5">
                <div className="container">
                    <div className="section-title">
                        <h1>Our Corporate Event Services</h1>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-xs-12">
                            {/* Tabs nav */}
                            <div className="all_event nav flex-column nav-pills nav-pills-custom" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                <a className="nav-link mb-3 p-3 shadow active" id="v-pills-home-tab" data-bs-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">
                                    <i className="fa fa-user-circle-o mr-2" />
                                    <span className="font-weight-bold small text-uppercase">Ganesh Chaturthi</span></a>
                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-profile-tab" data-bs-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">
                                    <i className="fa fa-calendar-minus-o mr-2" />
                                    <span className="font-weight-bold small text-uppercase">Navratri</span></a>
                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-messages-tab" data-bs-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">
                                    <span className="font-weight-bold small text-uppercase">31 Frist Celebration</span></a>
                                <a className="nav-link mb-3 p-3 shadow" id="v-pills-settings-tab" data-bs-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">
                                    <span className="font-weight-bold small text-uppercase">Marrige Function</span>
                                </a>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-xs-12">
                            {/* Tabs content */}
                            <div className=" tab-content" id="v-pills-tabContent">
                                <div className="events tab-pane fade shadow rounded bg-white show active p-2" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                    <div className="event-block">
                                        <img src="https://riocolina.com/img/planning_the_event.5572dd19.jpg" alt="" />
                                    </div>
                                    <p>We will help you custom design your food menu and cocktails in order to make your event
                                        an unforgettable one!</p>
                                </div>
                                <div className="events tab-pane fade shadow rounded bg-white p-2" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                    <div className="event-block">
                                        <img src="https://riocolina.com/img/planning_the_event.5572dd19.jpg" alt="" />
                                    </div>
                                    <p>We are happy to provide you with our box office services if you need them for your event
                                        to make it a successful one. </p>
                                </div>
                                <div className="events tab-pane fade shadow rounded bg-white p-2" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                    <div className="event-block">
                                        <img src="https://riocolina.com/img/av_production.be916ed8.jpg" alt="" />
                                    </div>
                                    <p>Our stages are well-equipped for presentations and performances of the highest quality.
                                        Our AV Support Staff can assist you with creating the desired effect for your presenters
                                        and performers.</p>
                                </div>
                                <div className="events tab-pane fade shadow rounded bg-white p-2" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                    <div className="event-block">
                                        <img src="https://riocolina.com/img/planning_the_event.5572dd19.jpg" alt="" />
                                    </div>
                                    <p>You can count on our One-Stop-Shop event planning team to help you with all aspects of
                                        your creative vision, from the planning stages to opening night</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* EVENT 3 END */}
        </div >
    )
}

export default Events;