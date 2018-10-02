import React, { Component } from 'react';

class Login extends Component{
    

        state = {
            name : "",
            pass : "",
            submit : ""
        };

        setValues = e => {
            this.setState({[e.target.name]:e.target.value});
            console.log("HEllo");
        }

        submit = e => this.setState({submit: `You Clicked Submit`});
    
    render(){
        const {name,pass} = this.state;
        return (
            <div>
                <div>
                    <label>Login Page</label>
                </div>
                <div>
                    <label>
                        Username
                    </label>
                    <input
                        placeholder = 'Username'
                        value = {name}
                        name = 'name'
                        className = 'login-input'
                        onChange = {this.setValues}
                    />
                </div>
                <div>
                    <label>
                        Password
                    </label>
                    <input
                        placeholder = 'Password'
                        value = {pass}
                        name = 'pass'
                        className = 'login-input'
                        onChange = {this.setValues}
                    />
                </div>
                <div>
                    <input
                        type = 'button'
                        value = 'submit'
                        onClick = {this.submit}
                    />
                </div>
            </div>
        );
    }
}

export default Login;