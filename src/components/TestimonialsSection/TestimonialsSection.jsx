import React from 'react';
import Testimonial from '../Testimonial/Testimonial';
import './TestimonialsSection.scss';

const TestimonialsSection = () => {
  const testimonials = [
    {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "As a client, I couldn't be more pleased with the photography services provided by Graphic_Smith. The attention to detail and the ability to capture genuine moments surpassed my expectations.",
        name: 'Client Name',
      },
      {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "The photography services provided by Graphic_Smith were outstanding. They captured every important moment beautifully.",
        name: 'Another Client',
      },
      {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "Graphic_Smith's professionalism and creativity are unmatched. Our photos turned out better than we could have imagined.",
        name: 'Yet Another Client',
      },
      {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "We are absolutely in love with our wedding photos! Graphic_Smith captured every emotion perfectly.",
        name: 'Happy Couple',
      },
      {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "Choosing Graphic_Smith as our photographer was the best decision we made. The quality of their work is exceptional.",
        name: 'Satisfied Client',
      },
      {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "The team at Graphic_Smith was so professional and made us feel at ease. The photos are stunning, and we will cherish them forever.",
        name: 'Newlyweds',
      },
      {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "From start to finish, Graphic_Smith provided an amazing experience. The photos captured our personalities perfectly.",
        name: 'Delighted Client',
      },
      {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "Graphic_Smith was incredibly easy to work with and delivered beyond our expectations. The photos are simply breathtaking.",
        name: 'Thrilled Couple',
      },
      {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "We couldn’t have asked for a better photographer! Graphic_Smith’s work is truly exceptional, and we’re so grateful for the memories captured.",
        name: 'Grateful Client',
      },
      {
        image: 'https://wallpapercave.com/wp/wp11533955.jpg',
        text: "Our experience with Graphic_Smith was fantastic. They were professional, friendly, and their work is outstanding.",
        name: 'Happy Client',
      },
    ];

  // Fisher-Yates (Knuth) shuffle to randomize array
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Shuffle the testimonials array
  const shuffledTestimonials = shuffleArray([...testimonials]);

  return (
    <section className="testimonials-section">
      {/* <h2>What Our Clients Say</h2> */}
      <div className="testimonials-container">
        {shuffledTestimonials.map((testimonial, index) => (
          <Testimonial
            key={index}
            image={testimonial.image}
            text={testimonial.text}
            name={testimonial.name}
          />
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
