import React, { Component } from 'react'
import { Article } from './Article';

export default class ArticlesClass extends Component {
  constructor() {
    super();
    this.state = {
      userId: 1 ,
      posts: []
    }
  }
  componentDidMount() {
    this.getPosts();
  }

  getPosts = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.state.userId}`);
      const data = await response.json();
      this.setState({ posts: data.slice(0, 5) });
    } catch (error) {
      console.error('Loading error:', error);
    }
  };


  render() {
    return (
      <>
        <h2>News Articles</h2>
        <button onClick={() => this.getPosts()}>Get Article</button >
        {
          this.state.posts.map(post => (
            <Article key={post.id} title={post.title} body={post.body} />
          ))
        }
      </>
    )
  }
}
