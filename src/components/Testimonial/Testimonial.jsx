import React from 'react';
import './Testimonial.scss';

const Testimonial = ({ image, text, name }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-image">
        <img src={image} alt={name} />
      </div>
      <p className="testimonial-text">{text}</p>
      <h4 className="testimonial-name">{name}</h4>
    </div>
  );
};

export default Testimonial;
