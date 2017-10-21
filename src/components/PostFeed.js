import React, { Component } from 'react';
import './PostFeed.css';
const contentful = require('contentful');

var client = contentful.createClient({
  space: `${process.env.REACT_APP_CONTENTFUL_SPACE_ID}`,
  accessToken: `${process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN}`
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
