import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../Microscope-icon.png';
import '../App.css';
import AddPost from './AddPost';
import Login from './Login';
import Profile from './Profile';
import Post from './Post';
import { initialPosts } from '../posts.js';
import { defaultUser } from '../users.js';
import { initialUser } from '../users.js';


class App extends Component {

  constructor() {
    super();
    this.state = {
      posts: initialPosts,
      user: initialUser
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
    this.setState({ user: defaultUser });
    ReactDOM.render(
      <Profile fullName={defaultUser.fullName} userName={defaultUser.userName}
        profilePic={defaultUser.profilePic} userBio={defaultUser.userBio} handleLogout={this.handleLogout} />
      , document.querySelector(".sidebar"));
  }


  handleSubmit(event) {
    event.preventDefault();
    ReactDOM.render(
      <Profile fullName={this.state.user.fullName} userName={this.state.user.userName}
        profilePic={this.state.user.profilePic} userBio={this.state.user.userBio} handleLogout={this.handleLogout} />
      , document.querySelector(".sidebar"));
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
    this.setState({ user: initialUser })
    ReactDOM.render(<Login name='' username=''
      bio='' autoLogin={this.autoLogin}
      loadNewUser={this.handleSubmit} addNewUser={this.addNewUser} />, document.querySelector(".sidebar"))
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
                <Login name={this.state.user.fullName} username={this.state.user.userName}
                  bio={this.state.user.userBio} autoLogin={this.autoLogin}
                  loadNewUser={this.handleSubmit} addNewUser={this.addNewUser} />
              </div>
            </div>
            <div className="eight columns"><div className="content">
              <AddPost addPost={this.addPostToPostList} author={this.state.user.fullName} image={this.state.user.profilePic} />
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
