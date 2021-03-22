import React, { Component } from 'react';

import Post from '../../../components/Post/Post';
import './Posts.css';
import people from '../../../people';

export default class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
        posts: people,
        selectedPostId: null,
    }
  }

  postSelectHandler = (id) => {
    this.setState({selectedPostId: id});
  }


  render () {
    const posts = this.state.posts.map(post => {
      return <Post 
          key={post.id} 
          name={post.name}
          email={post.email}
          country={post.country}
          department={post.department}
          title={post.title}
          linkedin={post.linkedin}
          clicked={() => this.postSelectHandler(post.id)}/>;
  })

    return (
      <div className="Posts-header">
        <h1>Browse through some of the talented individuals who have worked at Samsung Next.</h1>
        <section className="Posts">
          {posts}
        </section>  
      </div>
    )
  }
}