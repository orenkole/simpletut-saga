import React from 'react';
import './styles.scss';

import Logo from "../../assests/logo.png";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="wrap">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="simpleTut logo" />
          </Link>
        </div>
        <div className="callToActions">
          <ul>
            <li>
              <Link to="/registration">
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
