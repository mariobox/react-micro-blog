import React, { Component } from 'react';
import { guestProfile } from '../users.js';
import { newGuest } from '../users.js'
import '../App.css';
import Profile from './Profile';
import ReactDOM from 'react-dom';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        document.getElementById("logInForm").style.display = 'none';
        newGuest['fullName'] = document.getElementById('firstName').value;
        newGuest['userName'] = document.getElementById('userName').value;
        newGuest['userBio'] = document.getElementById('userBio').value;
        
        ReactDOM.render(
            <Profile fullName={newGuest.fullName} userName={newGuest.userName} profilePic={newGuest.profilePic} userBio={newGuest.userBio} />
            , document.querySelector(".sidebar"));
    }

    autoLogin() {
        ReactDOM.render(
            <Profile fullName={guestProfile.fullName} userName={guestProfile.userName} profilePic={guestProfile.profilePic} userBio={guestProfile.userBio} />
            , document.querySelector(".sidebar"));
    } 

    render() {
        return (
            <div>
                <form id="logInForm" onSubmit={this.handleSubmit}>
                    <label>
                        Name:
              <input type="text" id="firstName" name={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        User name:
              <input type="text" id="userName" username={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        About yourself:
              <input type="text" id="userBio" bio={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.autoLogin}>Auto Login</button>
            </div>
        );
    }
}

export default Login;