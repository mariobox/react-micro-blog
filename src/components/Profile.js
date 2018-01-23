import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div id='testing' className="profile-info">
                <div><img width="100%" src={this.props.profilepic} alt="" /></div>
                <h4>{this.props.fullname}</h4>
                <p><span>@</span>{this.props.username}</p>
                <p>{this.props.userbio}</p>
                <button id="logout" onClick={this.props.handleLogout}>Log Out</button>
            </div>
        );
    }
}

export default Profile;