import React, { Component } from 'react';
import logo from '../Microscope-icon.png';
import '../App.css';
import AddPost from './AddPost';
import Login from './Login';
import Post from './Post';
import { initialPosts } from '../posts.js';


class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: initialPosts,
    };

    this.addPostToPostList = this.addPostToPostList.bind(this);
  }

  addPostToPostList(post) {
    var ts = Date.now();
    var newPost = {};
    newPost['post' + ts] = post;
    var currentPosts = { ...this.state.posts };
    var newPosts = Object.assign(currentPosts, newPost);
    this.setState({ posts: newPosts });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Micro Blog</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="four columns">
              <div className="sidebar">
                <Login />
              </div>
            </div>
            <div className="eight columns"><div className="content">
              <AddPost addPost={this.addPostToPostList} />
              <div className='postList'>
                {
                  Object
                    .keys(this.state.posts)
                    .map(key => <Post key={key} meta={this.state.posts[key]} />)
                    .reverse()
                }
              </div>
            </div>
            </div>

          </div>
          <div className="row">
            <div className="twelve columns">
              <p className="footer">Avatar icon credits: <a href="http://www.freepik.com">Freepik</a> | Microscope icon credits: <a href="http://www.kameleon.pics/">Kamaleon</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
