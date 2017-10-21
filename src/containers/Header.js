import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
      <header>
        <div className="site-title">Jermaine Davis</div>
        <div className="sub-header">
          <div className=".sub-header-column">
            {this.props.description}
          </div>
          <div className=".sub-header-column">
            {this.props.location}
          </div>
          <div className=".sub-header-column">
            <a href="mailto:majorwaves@gmail.com">Contact</a>, About
          </div>
          <div className=".sub-header-column">
            <a href={this.props.twitter}>Twitter</a>, <a href={this.props.instagram}>Instagram</a>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
