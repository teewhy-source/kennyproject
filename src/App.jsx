import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/homepage/Home';
import Aboutus from './components/navigationbar/aboutus/Aboutus';
import Price from './components/navigationbar/price/Price';
import Portfolio from './components/navigationbar/portfolio/Portfolio';
import Contactus from './components/navigationbar/contactus/Contactus';
import Gallery from './components/navigationbar/Gallery/Gallery';
import NavigationBar from './components/navigationbar/NavigationBar';
const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/price" element={<Price />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contactus />} />
      </Routes>
    </Router>
  );
}

export default App;
