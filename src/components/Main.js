import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PostFeed from '../components/PostFeed.js';
import About from '../components/About.js';

class App extends Component {

  render() {
    return (
      <main>
        <Switch>
        <Route exact path="/" render={props => <PostFeed projects={this.props.projects} />} />
        <Route exact path="/about" render={props => <About bio={this.props.bio} />} />
        </Switch>
      </main>
    );
  }
}

export default App;
