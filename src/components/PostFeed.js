import React, { Component } from 'react';
import './PostFeed.css';
const contentful = require('contentful');

var client = contentful.createClient({
  space: 'br6aauxhl8qu',
  accessToken: '5e30bf4b36119ac52c2320c82e8a750a57821ae9f414a149c90e54a061e4feb0'
});

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    }
  }

  componentDidMount() {
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
    let projects = this.state.projects.map((project, index) => {
      return (
        <div className="post" key={index}>
          <figure>
            <img alt={project.fields.title} src={project.fields.featuredImage.fields.file.url} />
          </figure>
          <div className="postInfo">
            <h1>{project.fields.title}</h1>
            <span>{project.fields.link}</span>
            <p>{project.fields.description}</p>
          </div>
        </div>
      )
    });

  return (
      <div className="postFeed">
        {projects}
      </div>
    )
  }
}

export default PostFeed;
