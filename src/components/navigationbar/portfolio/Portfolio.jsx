import React from 'react';
import './portfolio.styles.scss';
import mainImage from '../../../assets/woman.jpg'; // Replace with the actual image path
import image1 from '../../../assets/woman.jpg'; // Replace with the actual image path
import image2 from '../../../assets/7.jpg'; // Replace with the actual image path

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h1>Portfolio</h1>
      </div>
      <div className="portfolio-content">
        <div className="main-image">
          <img src={mainImage} alt="Main" />
          <img src={mainImage} alt="Main" />
        </div>
        <div className="portfolio-text">
          <p>
            Through years of experience, I have honed my skills in composition, lighting, and post-production to produce stunning visuals that showcase the beauty of my subjects. Whether it's a portrait, landscape, or event, I approach each project with passion and dedication, striving to deliver images that exceed my clients' expectations.
          </p>
        </div>
        <div className="side-images">
          <img src={image1} alt="Side 1" />
          <img src={image2} alt="Side 2" />
        </div>
      </div>
      <div className="portfolio-footer">
        <a href="/portfolio">See All Portfolio ⟶</a>
      </div>
    </div>
  );
};

export default Portfolio;
