import React, { useState, useEffect } from "react";
import { Image } from "cloudinary-react";
import "./aboutus.styles.scss";
import Navigationbar from "../NavigationBar";

const Aboutus = () => {
  // Array of public IDs
  const imageIds = [
    // "kenny_ae0amz",
    "ty_rnlxfo",
    // "b1_g7vkmi",
    // Add more public IDs here
  ];

  // Function to get a random image ID
  const getRandomImageId = () => {
    const randomIndex = Math.floor(Math.random() * imageIds.length);
    return imageIds[randomIndex];
  };

  // State to hold the current image ID
  const [currentImageId, setCurrentImageId] = useState(getRandomImageId());

  // useEffect to update the image ID every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageId(getRandomImageId());
    }, 1000); // Update every second

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <Navigationbar />
      <section className="hero-section">
        <p>
        PHOTOGRAPHER, VIDEOGRAPHER, AND PLANNER FOR INTIMATE ELOPEMENTS ACROSS LAGOS, ABUJA, IBADAN, AND PORT HARCOURT.

        </p>
      </section>
      <section className="story">
        <div className="story-content">
          <div className="story-image">
            <Image
              cloudName="dqgwltr8t"
              publicId={currentImageId}
              alt="Photographer"
            />
          </div>
          <div className="story-text">
            <h1>Hey there, I'm Kenny!</h1>
            <h2>photographer | videographer</h2>
            <p>
              I am your dedicated elopement photographer, videographer, and
              content creator! I carefully plan and capture intentional
              elopements and intimate weddings across Lagos, Abuja, Ibadan, Port
              Harcourt, and Enugu. What defines an elopement? It's not just
              about having fewer guests; rather, I focus on "just the two of us"
              moments and weddings with 25 guests or fewer. To me, a small
              wedding is about the atmosphere a couple creates for their special
              day—from the venue they choose to the activities they plan and all
              the little details that make the day uniquely theirs. My goal as
              your elopement professional is to help bring that vision to life.
            </p>
            <p>
              With extensive knowledge of venues and locations ideal for small
              weddings and elopements across Nigeria, and a network of trusted
              vendors to meet the unique needs of my clients, I am the ideal
              partner in planning your perfect day. Whether you envision saying
              your vows on a serene beach in Lagos, in a lush garden in Abuja,
              or against the dramatic backdrop of a waterfall in Enugu, I can
              help you find the perfect spot that reflects your love story. I
              understand the cultural nuances and diverse traditions that make
              Nigerian weddings unique, and I incorporate these elements to
              create an unforgettable experience. In addition to photography and
              videography, I offer content creation services to help you share
              your special day with loved ones, whether they're near or far.
              From crafting beautifully edited highlight reels to curating
              stunning photo albums that tell the full story of your day, I
              ensure that every moment is preserved and celebrated.
            </p>
            <p>
              I also offer consultation services for couples who need guidance
              on planning their elopement or small wedding. Whether you're
              looking for the perfect attire, décor ideas, or advice on how to
              make your ceremony truly personal, I'm here to assist you every
              step of the way. My mission is to make your wedding day as
              stress-free and memorable as possible, allowing you to focus on
              what truly matters: celebrating your love. Let's create a day
              that's uniquely yours, filled with joy, laughter, and memories
              that will last a lifetime.
            </p>
          </div>
        </div>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-content">
          <blockquote>
            <p>
              "Kenny was amazing! He captured our day perfectly and was such a
              pleasure to work with."
            </p>
            <cite>- Blessing & John</cite>
          </blockquote>
          <blockquote>
            <p>
              "His attention to detail and ability to make us feel comfortable
              in front of the camera was incredible."
            </p>
            <cite>- Divine & Mark</cite>
          </blockquote>
          <div className="testimonial-screenshots">
            <Image
              cloudName="dqgwltr8t"
              publicId="Florentine_Opulence_for_a_Gold_and_Champagne_Wedding_ojn0qt"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="Somali_couple_ycgcud"
              alt="Photographer"
            />
          </div>
        </div>
      </section>
      <section className="services">
        <h2>Services</h2>
        <div className="services-content">
          <div className="service">
            <h3>Weddings</h3>
            <p>
              Full-day coverage of your wedding, from getting ready to the last
              dance.
            </p>
          </div>
          <div className="service">
            <h3>Elopements</h3>
            <p>
              Intimate ceremonies with just the two of you, captured
              beautifully.
            </p>
          </div>
          <div className="service">
            <h3>Portraits</h3>
            <p>
              Personalized portrait sessions for individuals, couples, or
              families.
            </p>
          </div>
        </div>
      </section>
      <section className="image-slider">
        <div className="slider-wrapper">
          <div className="slider">
            <Image
              cloudName="dqgwltr8t"
              publicId="ty_rnlxfo"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="pic1_fk99lm"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="Radiance_personified-_where_beauty_meets_grace_and_every_glance_tells_a_story_of_elegance._TimelessBeauty_GracefulGlow_teewhy_source_samklef_t_toluwanimi_tosin.junaid_elixirtv__wale_visuals_olasunkanm_hgfkp4"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="African_Art_z7nspr"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="baby_ken_hp2ufj"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="2_vfvw5u"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="Somali_couple_ycgcud"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="woman_fxzdqg"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="ww_hodk8t"
              alt="Photographer"
            />
            <Image
              cloudName="dqgwltr8t"
              publicId="samples/ecommerce/analog-classic"
              alt="Photographer"
            />
          </div>
        </div>
      </section>
      {/* <section className='contact'>
                <h2>Contact Me</h2>
                <p>If you have any questions or would like to book a session, please reach out!</p>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <textarea placeholder="Your Message" required></textarea>
                    <button type="submit">Send</button>
                </form>
            </section> */}
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to capture the beauty and emotion of your special
          moments, creating timeless memories that you will cherish forever.
        </p>
      </section>
      <section className="team">
        <h2>Meet the Team</h2>
        <div className="team-content">
          <div className="team-member">
            <Image
              cloudName="dqgwltr8t"
              publicId="ty_rnlxfo"
              alt="Photographer"
            />
            <h3>Edidi taiye</h3>
            <p>Assistant Photographer</p>
          </div>
          <div className="team-member">
            <Image
              cloudName="dqgwltr8t"
              publicId="WhatsApp_Image_2024-08-09_at_15.57.52_478f2486_j4dux7"
              alt="Photographer"
            />
            <h3>Edidi kenny</h3>
            <p>Photo Editor</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
