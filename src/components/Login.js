import React, { Component } from 'react';
import '../App.css';

class Login extends Component {

    render() {
        return (
            <div>
                <form id="logInForm" onSubmit={this.props.loadNewUser}>
                    <label>
                        Name:
              <input type="text" id="fullName" name={this.props.name} onChange={this.props.addNewUser} />
                    </label>
                    <label>
                        User name:
              <input type="text" id="userName" username={this.props.username} onChange={this.props.addNewUser} />
                    </label>
                    <label>
                        About yourself:
              <input type="text" id="userBio" bio={this.props.bio} onChange={this.props.addNewUser} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button onClick={this.props.autoLogin}>Auto Login</button>
            </div>
        );
    }
}

export default Login;