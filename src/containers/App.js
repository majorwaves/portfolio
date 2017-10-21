import React, { Component } from 'react';
import Header from './Header.js';
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
      entry: []
    }
  }

  componentDidMount() {
    client.getEntry('48yFnnMfyweEu0usOsIQaI')
      .then((entry) => {
        this.setState({
          entry: entry.fields
        });
      });
  }

  render() {
    return (
      <div className="App">
        <Header
          description={this.state.entry.description}
          location={this.state.entry.location}
          twitter={this.state.entry.twitter}
          instagram={this.state.entry.instagram}>
        </Header>
      </div>
    );
  }
}

export default App;
