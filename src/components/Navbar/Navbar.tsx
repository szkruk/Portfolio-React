import React, { FC } from 'react';
import './Navbar.css';
import { fullpageApi } from '@fullpage/react-fullpage';

interface NavbarInterface {
  // fullPageApi: fullpageApi;
  anchors: string[];
}

const Navbar: FC<NavbarInterface> = ({ anchors }): JSX.Element => {
  return (
    <nav>
      <div className="home-logo">
        <img src="/images/logo.png" alt="logo" id="logo" />
        <h1>Portfolio</h1>
      </div>
      <ul className="navbar-tab-list" id="myMenu">
        <li className="navbar-tab">
          <a className="active" data-menuanchor={anchors[0]} href={`#${anchors[0]}`}>
            Home
          </a>
        </li>
        <li className="navbar-tab">
          <a data-menuanchor={anchors[1]} href={`#${anchors[1]}`}>
            Skills
          </a>
        </li>
        <li className="navbar-tab">
          <a data-menuanchor={anchors[2]} href={`#${anchors[2]}`}>
            Experience
          </a>
        </li>
        <li className="navbar-tab">
          <a data-menuanchor={anchors[3]} href={`#${anchors[3]}`}>
            Projects
          </a>
        </li>
      </ul>
      <div className="nightMode-resume">
        <i className="fa-sharp fa-solid fa-lightbulb"></i>
        <button className="resume-btn">Resume</button>
      </div>
    </nav>
  );
};

export default Navbar;
