import React from 'react';
import './price.styles.scss';
import image from "../../../assets/fjnf.jpg"

const Price = () => {
  return (
    <div className="prices-container">
      <div className="image-section">
        <img src={image} alt="Photography" />
      </div>
      <div className="prices-section">
        <h1>My Prices</h1>
        <div className="price-item">
          <h2>Portrait</h2>
          <p className="price">#50,000</p>
          <p className="description">This includes individual, family, and group portraits, as well as headshots for business and corporate purposes.</p>
        </div>
        <div className="price-item">
          <h2>Individual</h2>
          <p className="price">#30,000</p>
          <p className="description">An individual photoshoot offers an opportunity for someone to have a professional photographer capture their unique personality and style through a series of posed and candid shots.</p>
        </div>
        <div className="price-item">
          <h2>Fashion</h2>
          <p className="price">#500,000</p>
          <p className="description">A fashion photoshoot is a creative process in which a team of professionals collaborates to produce images that showcase clothing, accessories, or a particular style.</p>
        </div>
        <div className="order-shooting">
          <a href="/gallery">Order Shooting ⟶</a>
        </div>
      </div>
    </div>
  );
};

export default Price;
