import React, { lazy, Suspense, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './Global/Footer.jsx';
import Header from './Global/Header.jsx';

const Home = lazy(() => import('../src/Component/Home/Home.jsx'));
const NoPage = lazy(() => import('../src/Global/NoPage.jsx'));
const Contactpage = lazy(() => import('../src/Component/Contactus/Contactpage.jsx'));
const Video = lazy(() => import('../src/Component/Gallery/Video.jsx'));
const Photos = lazy(() => import('../src/Component/Gallery/Photos.jsx'));
const Event = lazy(() => import('../src/Component/Events/Events.jsx'));
const Wedding = lazy(() => import('../src/Component/WeddindFunction/Wedding.jsx'));
const Onedaypicnic = lazy(() => import('../src/Component/Onedaypicnic/Onedaypicnic.jsx'));
const Villaonrent = lazy(() => import('../src/Component/VillaOnRent/Villaonrent.jsx'));
const About = lazy(() => import('../src/Component/About/About.jsx'));

function App() {

  function ScrollToTop() {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return null; 
}

  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <ScrollToTop/>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactpage" element={<Contactpage />} />
            <Route path="/video" element={<Video />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/event" element={<Event />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="/onedaypicnic" element={<Onedaypicnic />} />
            <Route path="/villaonrent" element={<Villaonrent />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
