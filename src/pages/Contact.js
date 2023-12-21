import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className="contact" id="contact">
    <div className="footer-left">
      <h1>
        BRINGING 
        {' '}
        <br />
        VISION
        <br />
        {' '}
        TO LIFE 
      </h1>
    </div>
    <div className="footer-right">
      <h3>I'M ALWAYS INTERESTED ABOUT</h3>
      <div className="interests">
        <p>Frontend Development</p>
        <p>WordPress Development</p>
        <p>Startups</p>
        <p>New Opportunities</p>
        <p>Augmented Reality</p>
      </div>

      <hr />

      <h3>
        WANT TO CONNECT? 
        <span><a href="mailto : khyadeyashswini@gmail.com">cOnTaCt mE</a></span>
      </h3>

      <hr />

      <div className="social">
        <span><a href="https://github.com/Yashswini" target="_blank" rel="noreferrer">GITHUB</a></span>
        <span>
          {' '}
          <a href="https://www.linkedin.com/in/ykhyade/" target="_blank" rel="noreferrer">LINKEDIN</a>
        </span>
        {/* <span>
          {' '}
          <a href="https://wellfound.com/u/yashswini-biswas" target="_blank" rel="noreferrer">WELLFOUND</a>
        </span> */}
        <span><a href="https://twitter.com/YKhyade" target="_blank" rel="noreferrer">TWITTER</a></span>
      </div>
    </div>
  </div>
);

export default Contact;
