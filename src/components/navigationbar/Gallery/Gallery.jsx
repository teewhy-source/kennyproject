import React, { useState, useEffect } from 'react';
import "./Gallery.css";
import { IoClose } from "react-icons/io5";
import AOS from "aos";
import "aos/dist/aos.css";

const Gallery = () => {
  const initialData = [
    { id: 8, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/frs1_pe9hw5" },
    { id: 4, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/IMG_20231109_145151_pvnazk" },
    { id: 6, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/IMG_0797_copy_kpllsi" },
    { id: 2, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/pic1_fk99lm" },
    { id: 7, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/IMG_0791_copy_nnnvpy" },
    { id: 3, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/logoblack_zjdnzc" },
    { id: 8, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/Somali_couple_ycgcud" },
    { id: 9, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/b1_oibojg" },
    { id: 11, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/1713293782798_sudx8j" },
    { id: 10, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/33_mfrxzu" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/WhatsApp_Image_2024-08-19_at_13.41.21_bc0e9c2c_inzz0b" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/jkj_ztf5mp" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/WhatsApp_Image_2024-08-19_at_13.28.41_e49905a6_ipgfrh" },
    { id: 12, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/2_vfvw5u" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/dgj_q3jrce" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/1ee_p5agnp" },
    { id: 13, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/1_ywwhu2" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/WhatsApp_Image_2024-08-19_at_13.37.05_b91e5369_s2tzow" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/WhatsApp_Image_2024-08-14_at_15.09.11_09beb2b3_bn6jmq" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/uu_hgywjb" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/WhatsApp_Image_2024-08-19_at_13.28.41_e49905a6_ipgfrh" },
    { id: 14, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/1ee_p5agnp" },
    { id: 15, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/Radiant_elegance_in_every_detail._Adorning_the_bride_with_grace_and_glamour_on_her_special_day._BridalBeauty_TimelessElegance_shot_bykenny_teewhy_source_samklef_t_toluwanimi_tosin.junaid_elixirtv__1_nshtcr" },
    { id: 16, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/Radiance_personified-_where_beauty_meets_grace_and_every_glance_tells_a_story_of_elegance._TimelessBeauty_GracefulGlow_teewhy_source_samklef_t_toluwanimi_tosin.junaid_elixirtv__wale_visuals_olasunkanm_hgfkp4" },
    { id: 18, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/kenny_us1h64" },
    { id: 1, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/ty_rnlxfo" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/v1612839481/ddd_vzctgh" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/dd_y3ebhq" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/WhatsApp_Image_2023-10-17_at_18.28.08_e1d7776f_dy5ujq" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/Best_ighmco" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/WhatsApp_Image_2024-08-19_at_13.28.41_a965cfa2_ek3mjl" },
    { id: 17, imgSrc: "https://res.cloudinary.com/dqgwltr8t/image/upload/WhatsApp_Image_2024-08-19_at_13.37.05_1f4e6e22_gxqlof" },
  ];

  // Shuffle function
  const shuffleArray = (array) => {
    let shuffledArray = array.slice();  // Copy the array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(shuffleArray(initialData));  // Shuffle data on component mount
    AOS.init({ duration: 1000 });
  }, []);

  const [isOpen, setIsOpen] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const handleClick = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setIsOpen(true);
    document.body.style.overflow = "hidden";  // Disable scroll when modal is open
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "auto";  // Enable scroll when modal is closed
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className={`modal ${isOpen ? "open" : "closed"}`}>
        <img src={tempImgSrc} alt="Selected" />
        <IoClose onClick={closeModal} className="close-icon" />
      </div>

      <div className="gallery">
        {data.map((item, index) => (
          <div className="pics" data-aos="fade-up" key={index} onClick={() => handleClick(item.imgSrc)}>
            <img loading="lazy" src={item.imgSrc} alt={`Gallery ${item.id}`} style={{ width: "100%" }} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Gallery;
