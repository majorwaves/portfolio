import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="site-title">Jermaine Davis</div>
        <div className="sub-header">
          <div className=".sub-header-column">
            Designer, Developer
          </div>
          <div className=".sub-header-column">
            Los Angeles, California
          </div>
          <div className=".sub-header-column">
            <a href="mailto:majorwaves@gmail.com">Contact</a>, About
          </div>
          <div className=".sub-header-column">
            <a href="https://twitter.com/majorwaves">Twitter</a>, <a href="https://instagram.com/siouxsiescrew">Instagram</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
