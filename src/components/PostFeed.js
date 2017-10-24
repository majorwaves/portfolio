import React, { Component } from 'react';
import './PostFeed.css';
var ReactMarkdown = require('react-markdown');

class PostFeed extends Component {

  render() {
    let projects = this.props.projects.map((project, index) => {
      const description = project.fields.description;
      return (
        <div className="post" key={index}>
          <figure>
            <img alt={project.fields.title} src={project.fields.featuredImage.fields.file.url} />
          </figure>
          <div className="postInfo">
            <h1>{project.fields.title}</h1>
            <span><a href={project.fields.link}>{project.fields.link}</a></span>
            <ReactMarkdown source={description} />
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
