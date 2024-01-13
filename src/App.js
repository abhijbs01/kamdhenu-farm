import React, { lazy, Suspense } from 'react';
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


function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contactpage" element={<Contactpage />} />
            <Route path="/video" element={<Video />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/event" element={<Event />} />
            <Route path="/wedding" element={<Wedding />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
          <Footer />
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
