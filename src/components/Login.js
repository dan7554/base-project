import React, { Component } from 'react';
import { connect } from 'react-redux';
import {submitUserAsync, submitUser} from '../redux/ducks/User';
import '../styles/Login.scss';
import text from '../assets/text/Login';


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
        this.props.submitUser(this.state.user);
    }
    render(){
        console.log('render', this)
        return (
            <div className='login-form'>
                <span>
                    {text.username}
                    <input value={this.state.user} onChange={this.handleUserChange} />
                </span>
                <span>
                    {text.password}
                    <input value={this.state.password} onChange={this.handlePasswordChange} />
                </span>
                <button onClick={this.onSubmit}>Submit</button>
            </div>
        )
    }   
}

export default Login