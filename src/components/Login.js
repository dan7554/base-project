import React, { Component } from 'react';
import { connect } from 'react-redux';
import {submitUserAsync, submitUser} from '../redux/ducks/User';
import '../styles/Login.scss';
import text from '../assets/text/Login';
import classBuilder from '../utility/classBuilder';

function mapStateToProps (state) {
    return { ...state.user };
  }
  
function  mapDispatchToProps (dispatch) {
    return { 
        submitUser: (value) => dispatch(submitUser(value)),
        submitUserAsync: (value) => dispatch(submitUserAsync(value))
    };
}

@connect(mapStateToProps, mapDispatchToProps)
class Login extends Component  {

    constructor(props) {
        super(props);
        this.state = {
            user: '', 
            password: '', 
            reenter: '',
            showMismatch: false
        };
    }

    handleUserChange = (event) => {
        this.setState({user: event.target.value});
    }
    handlePasswordChange = (event) => {
        this.setState({password: event.target.value});
    }
    handleReenterChange = (event) => {
        this.setState({reenter: event.target.value});
    }
    showPasswordMismatch = () => {
        this.setState({showMismatch: true});
    }
    onSubmit = (event) => {
        const {reenter, password, user} = this.state;
        if (reenter !== password) {
            this.showPasswordMismatch();
        } else {
            this.props.submitUser(user);
        }
    }
    render(){
        const { showMismatch, password, reenter, user } = this.state;
        const classNames = classBuilder(
            'login-form',
            {
                mismatch: showMismatch
            }
        );

        return (
            <div className={classNames}>
                <span>
                    {text.username}
                    <input value={user} onChange={this.handleUserChange} />
                </span>
                <span>
                    {text.password}
                    <input type='password' value={password} onChange={this.handlePasswordChange} />
                </span>
                <span>
                    {text.passwordReenter}
                    <input type='password' value={reenter} onChange={this.handleReenterChange} />
                </span>
                {showMismatch && <span className='validation-text'> 
                    {text.passwordMismatch}
                </span>}
                <button onClick={this.onSubmit}>
                    {text.submit}
                </button>
            </div>
        )
    }   
}

export default Login