import React, { Component } from 'react';
import '../styles/Login.scss';
import {submitUserAsync, submitUser} from '../redux/ducks/Login';

class Login extends Component  {

    constructor(props) {
        super(props);
        this.state = {user: '', password: ''};
    }

    handleUserChange = (event) => {
        this.setState({user: event.target.value});
    }
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    onSubmit = (event) => {
        console.log('Submit', this.state.user, this.state.password,this.props);
        this.props.store.dispatch(submitUserAsync(this.state))
    }
    render(){
        return (
            <div className='login-form'>
                <span>
                    User Name:
                    <input value={this.state.user} onChange={this.handleUserChange} />
                </span>
                <span>
                    Password:
                    <input value={this.state.password} onChange={this.handlePasswordChange} />
                </span>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }   
}

export default Login