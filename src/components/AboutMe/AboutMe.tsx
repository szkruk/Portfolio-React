import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="AboutMe">
      <div className="left-home">
        <h2 className="my-name">Szymon Kruk</h2>
        <h3 className="occupation">Software Developer</h3>
        <p className="text-about-me">
          Welcome to my portfolio website! I'm a skilled and passionate Software Developer. Through
          this website, you'll find a diverse range of projects that highlight my proficiency in
          various programming languages, frameworks, and technologies.
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
        </div>
      </div>
      <div className="image-of-me">
        <img src="/images/logo.png" alt="Szymon Kruk" id="me" />
      </div>
    </section>
  );
};

export default AboutMe;
