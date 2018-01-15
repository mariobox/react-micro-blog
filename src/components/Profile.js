import React, { Component } from 'react';

class Profile extends Component {
    
    render() {
        return (
            <div className="profile-info">
                <div><img width="100%" src={this.props.profilePic} alt="" /></div>
                <h4>{this.props.fullName}</h4>
                <p><span>@</span>{this.props.userName}</p>
                <p>{this.props.userBio}</p>
            </div>
        );
    }
}

export default Profile;