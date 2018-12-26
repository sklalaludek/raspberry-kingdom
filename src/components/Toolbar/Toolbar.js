import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import './Toolbar.css';

class Toolbar extends Component {
  constructor(props) {
    super();
    this.state = {
      active: false
    }
  }
  toggleClass = (e) => {
    e.preventDefault();
    this.setState({ active: !this.state.active})
  }

  render() {
    return <header className="header">
      <nav className="header__menu">
        <a href="/"
          className="toggleNav"
          onClick={this.toggleClass}
        >
          ☰ Menu
        </a>
        <ul className={this.state.active ? 'open' : null}>
          <li><a href="/" rel="nofollow">about</a></li>
          <li><a href="/" rel="nofollow">offer</a></li>
          <li className="header__logo">
            <a href="/" rel="nofollow">
              <img
                src={logo}
                className="header__logo"
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
}

export default Toolbar;