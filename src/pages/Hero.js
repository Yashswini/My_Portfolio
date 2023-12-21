import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';
import myphoto from '../assets/myimage.png';

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">HELLO,  I AM YASHSWINI</h2>
        
        <p className="paragraph">I'm passionate about Software Development.Bring ideas to the existance As a fresher Full Stack ,Software developer Love to take up challenging
role to leverage my expertise in programming & development, contributing to company's growth while showcasing a strong
commitment to excellence and innovation.</p>
        <div className="hero-btns">
          <button className="hire-me">
            <a href="https://drive.google.com/file/d/1FZZuQyhbH0bv1OtHJsZZsvB6vQrsOnhE/view?usp=sharing" target="_blank" rel="noreferrer">
              GET MY CV
            </a>
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={myphoto} alt="Yashswini" className="hero-image" />
    </div>
    <div className="social-icons">
        <a href="Yashswini" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github" />
        </a>
        <a href="https://www.linkedin.com/in/ykhyade/" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        {/* <a href="https://wellfound.com/u/yashswini-biswas" target="_blank" rel="noreferrer">
          <i className="fab fa-angellist" />
        </a> */}
        <a href="https://twitter.com/YKhyade" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-twitter" />
        </a>
         {/* <a href="https://www.youtube.com/@prantalks" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-youtube" />
        </a> */}
      </div>
  </div>
);

export default Hero;
