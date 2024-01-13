import React, { useEffect } from 'react';
import header_logo from '../assets/image/header/kamdhenu_logo.png'
import $ from 'jquery';
import { Link } from 'react-router-dom';

function Header() {
  useEffect(() => {
    function headerAdj() {
      if (window.innerWidth < 767) {
        const headerHeight = $(".header").outerHeight();
        $(".nav-wrap .nav-list").css({ "paddingTop": `${headerHeight}px` });
      } else {
        $(".nav-wrap .nav-list").css({ "paddingTop": "0" });
      }
    }

    function submenuToggle() {
      if (window.innerWidth < 767) {
        $(".nav-list li.with-submenu")
          .off()
          .click(function () {
            $(this).toggleClass("is-open");
            $(".submenu").slideToggle("slow");
          });
      }
    }

    function handleHamburgerClick() {
      $(".hamburger").toggleClass("is-active");
      $("body,html").toggleClass("sidebar-open");
      $(".nav-wrap").toggleClass("is-open");
    }

    function handleOverlayClick() {
      $(".hamburger").removeClass("is-active");
      $("body,html").removeClass("sidebar-open");
      $(".nav-wrap").removeClass("is-open");
    }

    headerAdj();
    submenuToggle();

    $(".hamburger").off().click(handleHamburgerClick);
    $(".overlay").off().click(handleOverlayClick);

    $(window).on("resize", () => {
      headerAdj();
      submenuToggle();
    });

    return () => {
      // Cleanup event listeners
      $(window).off("resize");
      $(".hamburger").off("click");
      $(".overlay").off("click");
    };
  }, []);
  return (
    <>
      {/* ======= */}
      <header className="header">
        <div className="container">
          <div className="row-wrap">
            <div className="logo-wrap m-auto">
              <span className="logo"><img src={header_logo} alt="header_logo" width={80} hight={80}/></span>
            </div>
            <div className="nav-wrap">
              <ul className="nav-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/" className='active'>About</Link></li>
                <li><Link to="/">Villas On rent</Link></li>
                <li><Link to="/">One day Picnic</Link></li>
                <li><Link to="/wedding">Wedding Function</Link></li>
                <li><Link to="/event">Event</Link></li>
                <li className="with-submenu">
                  <Link to="/">Gallery</Link>
                  <div className="submenu">
                    <ul className="submenu-inner">
                      <li><Link to="/photos">Photos</Link></li>
                      <li><Link to="/video">Video</Link></li>
                    </ul>
                  </div>
                </li>
                <li><Link to="/contactpage">Contact Us</Link></li>
              </ul>
            </div>
            <div className="hamburger">
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header