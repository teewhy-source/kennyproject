import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/homepage/Home';
import Aboutus from './components/navigationbar/aboutus/Aboutus';
import Price from './components/navigationbar/price/Price';
import Portfolio from './components/navigationbar/portfolio/Portfolio';
import Contactus from './components/navigationbar/contactus/Contactus';
import Gallery from './components/navigationbar/Gallery/Gallery';
import Layout from './components/Layout/Layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route element={<Layout />}>
          <Route path="aboutus" element={<Aboutus />} />
          <Route path="price" element={<Price />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<Contactus />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
