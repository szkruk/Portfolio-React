import { FC } from 'react';
import './Navbar.css';

const Navbar: FC = (): JSX.Element => {
  return (
    <nav>
      <div className="home-logo">
        <img src="/images/logo.png" alt="logo" id="logo" />
        <h1>Portfolio</h1>
      </div>
      <ul className="navbar-tab-list" id="myMenu">
        <li className="navbar-tab">
          <a href="#AboutMe">Home</a>
        </li>
        <li className="navbar-tab">
          <a href="#skills">Skills</a>
        </li>
        <li className="navbar-tab">
          <a href="#experience">Experience</a>
        </li>
        <li className="navbar-tab">
          <a href="#projects">Projects</a>
        </li>
      </ul>
      <div className="nightMode-resume">
        <button className="resume-btn">Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
