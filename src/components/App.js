import React, { Component } from 'react';
import logo from '../Microscope-icon.png';
import '../App.css';
import AddPost from './AddPost';
import Greeting from './Greeting'
import Post from './Post';
import { initialPosts } from '../posts.js';
import { defaultUser } from '../users.js';
import { initialUser } from '../users.js';


class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: initialPosts,
      user: initialUser,
      isLoggedIn: false
    };

    this.addPostToPostList = this.addPostToPostList.bind(this);
    this.autoLogin = this.autoLogin.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    
  }


  addPostToPostList(post) {
    var ts = Date.now();
    var newPost = {};
    newPost['post' + ts] = post;
    var currentPosts = { ...this.state.posts };
    var newPosts = Object.assign(currentPosts, newPost);
    this.setState({ posts: newPosts });
  }

  autoLogin() {
    this.setState({
      user: defaultUser,
      isLoggedIn: true
    })
    
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isLoggedIn: true });    
  }

  addNewUser() {
    var newUser = {};
    newUser.fullName = document.getElementById('fullName').value;
    newUser.userName = document.getElementById('userName').value;
    newUser.userBio = document.getElementById('userBio').value;
    newUser.profilePic = './img/profile_image_dummy.svg';
    this.setState({ user: newUser });
  }

  handleLogout() {
    this.setState({
      user: initialUser,
      isLoggedIn: false
    })
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
                <Greeting 
                status={this.state.isLoggedIn}
                fullname={this.state.user.fullName}
                username={this.state.user.userName}
                profilepic={this.state.user.profilePic}
                userbio={this.state.user.userBio}
                handleLogout={this.handleLogout}
                autoLogin={this.autoLogin}
                handleSubmit={this.handleSubmit}
                addNewUser={this.addNewUser}     
                           
                 />
              </div>
            </div>
            <div className="eight columns">
              <div className="content">
                <AddPost
                  addPost={this.addPostToPostList}
                  author={this.state.user.fullName}
                  image={this.state.user.profilePic} />
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
              <p className="footer">
                Avatar icon credits:
              <a href="http://www.freepik.com">Freepik</a> |
              Microscope icon credits:
              <a href="http://www.kameleon.pics/">Kamaleon</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
