import React, { Component } from 'react';
import Login from './Login';
import Profile from './Profile';
import '../App.css';


class Greeting extends Component {
    render() {
         if (this.props.status) {
            return <Profile
                fullname={this.props.fullname}
                username={this.props.username}
                profilepic={this.props.profilepic}
                userbio={this.props.userbio}
                handleLogout={this.props.handleLogout} />;
        }
        else {
            return <Login
                fullname={this.props.fullname}
                username={this.props.username}
                userbio={this.props.userbio}
                autoLogin={this.props.autoLogin}
                loadNewUser={this.props.handleSubmit}
                addNewUser={this.props.addNewUser} />;
        }

    }
    }


export default Greeting;