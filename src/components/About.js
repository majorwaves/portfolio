import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import './About.css';

class About extends Component {

  render() {

  return (
      <div className="about">
        <ReactMarkdown source={this.props.bio} />
        <ReactMarkdown source={this.props.bio} />
      </div>
    )
  }
}

export default About;
