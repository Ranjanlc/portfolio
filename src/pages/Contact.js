import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        I LOVE <br />
        COFFEE
        <br /> CHAT ☕️
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>React</p>
        <p>Next.js</p>
        <p>Backend Development</p>
        <p>DSA</p>
        <p>Typescript</p>
        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Coffee</p>
        <p>Space</p>
        <p>Burger</p>
      </div>

      <hr />

      <h3>
        MINDING A PROJECT?
        <span>
          <a href="mailto:studylc29@gmail.com">Contact me</a>
        </span>
      </h3>

      <hr />

      <div className="social">
        <span>
          <a
            href="https://github.com/Ranjanlc"
            target="_blank"
            rel="noreferrer"
          >
            GITHUB
          </a>
        </span>
        <span>
          {' '}
          <a
            href="https://www.linkedin.com/in/ranjan-lamichhane-2699aa272"
            target="_blank"
            rel="noreferrer"
          >
            LINKEDIN
          </a>
        </span>
        <span>
          <a
            href="https://twitter.com/Ranjanlc29"
            target="_blank"
            rel="noreferrer"
          >
            TWITTER
          </a>
        </span>
      </div>
    </div>
  </div>
);

export default Contact;
