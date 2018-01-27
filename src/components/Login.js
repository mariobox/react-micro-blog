import React, { Component } from 'react';
import '../App.css';

class Login extends Component {

    render() {
        return (
            <div>
                <form id="logInForm" onSubmit={this.props.loadNewUser}>
                    <label>
                        Name:
              <input type="text" name="fullName" fullname={this.props.fullname} onChange={this.props.addNewUser} />
                    </label>
                    <label>
                        User name:
              <input type="text" name="userName" username={this.props.username} onChange={this.props.addNewUser} />
                    </label>
                    <label>
                        About yourself:
              <input type="text" name="userBio" userbio={this.props.userbio} onChange={this.props.addNewUser} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.props.autoLogin}>Auto Login</button>
            </div>
        );
    }
}

export default Login;