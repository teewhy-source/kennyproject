import { useRef } from "react";
import { FcCameraIdentification,FcCamera } from "react-icons/fc";
import { MdFlipCameraAndroid } from "react-icons/md";
import "../navigationbar/navigation.css";

const NavigationBar = () => {
  const navref = useRef();
  
  const shownavbar = () => {
    navref.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>ShotbyKenny <br /> <FcCamera /> <FcCamera /> <FcCamera /> <FcCamera /> <FcCamera />
      </h3>
      <nav ref={navref}>
        <a href="/home">Home</a>
        <a href="/gallery">Gallery</a>
        <a href="/portfolio">Testimonial</a>
        <a href="price">Price</a>
        <a href="contact">Contact Us</a>
        <a href="/aboutus">About Us</a>
        <button onClick={shownavbar} className="nav-btn nav-close-btn">
          <FcCameraIdentification />
        </button>
      </nav>
      <button onClick={shownavbar} className="nav-btn">
        <MdFlipCameraAndroid />
      </button>
    </header>
  );
};

export default NavigationBar;
