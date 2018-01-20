import React, { Component } from 'react';
import Login from './Login';
import ReactDOM from 'react-dom';

class Profile extends Component {

    handleLogout() {
        ReactDOM.render(<Login />, document.querySelector(".sidebar"))
    }

    render() {
        return (
            <div id='testing' className="profile-info">
                <div><img width="100%" src={this.props.profilePic} alt="" /></div>
                <h4>{this.props.fullName}</h4>
                <p><span>@</span>{this.props.userName}</p>
                <p>{this.props.userBio}</p>
                <button id="logout" onClick={this.handleLogout}>Log Out</button>
            </div>
        );
    }
}

export default Profile;