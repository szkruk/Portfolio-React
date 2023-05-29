import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="home">
      <div className="left-home">
        <h2 className="my-name">Szymon Kruk</h2>
        <h3 className="occupation">Software Developer</h3>
        <p className="text-about-me">
          Welcome to my portfolio website! <br />
          I'm a skilled and passionate Software Developer. Through this website, you'll find a
          diverse range of projects that highlight my proficiency in various programming languages,
          frameworks, and technologies.
        </p>
        <div className="contact-logos">
          <a target="_blank" href="https://github.com/szkruk" className="logos-with-links">
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/szymon-kruk-40473a252/"
            className="logos-with-links">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            target="_blank"
            href="https://www.facebook.com/szymon.kruk.984/"
            className="logos-with-links">
            <i className="fa-brands fa-facebook"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
