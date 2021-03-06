import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
} from "@fortawesome/free-brands-svg-icons";
// import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import "./Home.css";

class Home extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          <h1 className="home-title">
            My Name is <span className="home-title-name">Sadman Sakib</span>
          </h1>
          <h3 className="home-subtitle">
            I am a fullstack web developer(Frontend + Backend)
          </h3>
          <ul className="home-social-icons">
            <li>
              <a href="http://www.facebook.com/sakib.5050" target="_blank">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/ssakib5050/" target="_blank">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>

            <li>
              <a href="https://github.com/ssakib5050" target="_blank">
                <FontAwesomeIcon icon={faGithubAlt} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
