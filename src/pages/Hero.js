import React from 'react';
import './Hero.css';
import { Link } from 'react-scroll';
import Imu from '../assets/imu.png';

const cvClickHandler = () => {
  window.open('/assets/resume.pdf', '_blank');
};

const Hero = () => (
  <div className="hero" id="home">
    <div className="hero-overlay">
      <div className="description">
        <h2 className="title">Hello, I'm Ranjan</h2>
        <h3 className="tagline">
          Harnessing Full Stack Magic, One Line at a Time!
        </h3>
        <p className="paragraph">
          As a dedicated full stack MERN developer, my drive lies in sculpting
          extraordinary digital journeys. With a keyboard as my creative
          instrument and lines of code as the medium, I materialize ideas into
          immersive virtual realities. Together, we can collaborate and
          transform your digital visions into tangible, seamless experiences.
          Reach out to me, and let's embark on this exhilarating expedition hand
          in hand!
        </p>
        <div className="hero-btns">
          <button className="hire-me" onClick={cvClickHandler}>
            GET MY CV
          </button>
          <button className="lets-talk">
            <Link spy smooth offset={50} duration={500} to="contact">
              LET'S TALK
            </Link>
          </button>
        </div>
      </div>
      <img src={Imu} alt="prantosh" className="hero-image" />
    </div>
    <div className="social-icons">
      <a href="https://github.com/Ranjanlc" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-github" />
      </a>
      <a
        href="https://www.linkedin.com/in/ranjan-lamichhane-2699aa272/"
        target="_blank"
        rel="noreferrer"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>

      <a href="https://twitter.com/Ranjanlc29" target="_blank" rel="noreferrer">
        <i className="fa-brands fa-twitter" />
      </a>
    </div>
  </div>
);

export default Hero;
