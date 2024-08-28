import React from 'react';
import LazyLoad from 'react-lazyload';
import './HeroSection.scss';
import { IoLogoInstagram } from "react-icons/io";
import { CiFacebook } from "react-icons/ci";
import { MdWhatsapp } from "react-icons/md";
import TypingEffect from '../../TypingEffect/TypingEffect';
import LIne from "../../assets/line.png";
import NavigationBar from '../navigationbar/NavigationBar';

const Home = () => {
    return (
        <>
            <div className="home">
            <NavigationBar />
                <header className="hero">
                    <div className="hero-text">
                        <h1>
                            <TypingEffect texts={['SHOT _BY _KENNY', 'Creative Photography', 'Capture Moments']} />
                        </h1>
                        <p>Photographer</p>
                    </div>
                </header>
                <div className="social-icons">
                    <LazyLoad height={200} offset={100}>
                        <img src={LIne} alt="line" />
                    </LazyLoad>
                    <a href="https://www.instagram.com/shot_bykenny/"><IoLogoInstagram className="social-icon" /></a>
                    <a href="#"><CiFacebook className="social-icon" /></a>
                    <a href="#"><MdWhatsapp className="social-icon" /></a>
                    <LazyLoad height={200} offset={100}>
                        <img src={LIne} alt="line" />
                    </LazyLoad>
                </div>
            </div>
        </>
    );
};

export default Home;
