import React, { Component } from 'react';
import Header from '../components/Header.js';
import PostFeed from '../components/PostFeed.js';
import './App.css';
const contentful = require('contentful');

var client = contentful.createClient({
  space: 'br6aauxhl8qu',
  accessToken: '5e30bf4b36119ac52c2320c82e8a750a57821ae9f414a149c90e54a061e4feb0'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: []
    }
  }

  componentDidMount() {
    client.getEntry('48yFnnMfyweEu0usOsIQaI')
      .then((entry) => {
        this.setState({
          info: entry.fields
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header
          description={this.state.info.description}
          location={this.state.info.location}
          twitter={this.state.info.twitter}
          instagram={this.state.info.instagram}>
        </Header>
        <PostFeed></PostFeed>
      </div>
    );
  }
}

export default App;
