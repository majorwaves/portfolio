import React, { Component } from 'react';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from '../components/Footer.js';
import '../styles/App.css';
const contentful = require('contentful');

var client = contentful.createClient({
  space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: [],
      projects: []
    }
  }

  componentDidMount() {

    //Check time
    const hours = new Date().getHours();
    const isDayTime = hours > 6 && hours < 18;
    this.setState({
      daytime: isDayTime
    });

    // TODO: Make this one request
    client.getEntry('48yFnnMfyweEu0usOsIQaI')
      .then((entry) => {
        this.setState({
          info: entry.fields
        });
      });

    client.getEntries({
      content_type: 'project',
      order: 'sys.createdAt'
    })
    .then((entries) => {
        this.setState({
          projects: entries.items
        });
      });
  }

  render() {
    return (
      <div className={'app ' + (this.state.daytime ? 'day' : 'night')}>
        <Header
          description={this.state.info.description}
          location={this.state.info.location}
          twitter={this.state.info.twitter}
          instagram={this.state.info.instagram}/>

        <Main bio={this.state.info.bio} clientList={this.state.info.clientList} projects={this.state.projects} />
        <Footer />
      </div>
    );
  }
}

export default App;
