import React from 'react';
import logo from '../../assets/img/logo.png';
import './Toolbar.css';

const Toolbar = () => {
  return <header className="header">
      <nav>
        <ul className="header__menu">
          <li><a href="/" rel="nofollow">about</a></li>
          <li><a href="/" rel="nofollow">offer</a></li>
          <li>
            <a href="/" rel="nofollow">
              <img
                src={logo} className="header__logo"
                alt="logo"
              >
              </img>
            </a>
          </li>
          <li><a href="/" rel="nofollow">gallery</a></li>
          <li><a href="/" rel="nofollow">contact</a></li>
        </ul>
      </nav>
  </header>
}

export default Toolbar;