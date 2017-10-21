import React, { Component } from 'react';
import Header from '../components/Header.js';
import PostFeed from '../components/PostFeed.js';
import './App.css';
const contentful = require('contentful');

var client = contentful.createClient({
  space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
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
      console.log(`${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`)
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
