import React, { Component } from 'react';
import LoginPage from './LoginPage/LoginPage';
import SignUpPage from './SignUpPage/SignUpPage';
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            typePassword: 'password',
            togglePassword: true
        }
    }
    togglePassword = () => {
        if (this.state.togglePassword) {
            this.setState({
                typePassword: 'text',
                togglePassword: !this.state.togglePassword
            })
        }
        else {
            this.setState({
                typePassword: 'password',
                togglePassword: !this.state.togglePassword
            })
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='img-page'>
                    <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/kahf_login.jpg" alt="" />
                </div>
                {/* <LoginPage /> */}
                <SignUpPage
                    typePassword={this.state.typePassword}
                    togglePassword={this.togglePassword}
                />

            </div>
        );
    }
}
export default Main;
