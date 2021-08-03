import React, { Component } from 'react';
import './SignUpPage.css'

class SignUpPage extends Component {
    state = {
        type: 'password'
    }
    render() {
        return (
            <div className='login-page'>
                <div className='login-page-header'>
                    <div className='login-page-title'>
                        <h1>Welcome to kahf and let's join</h1>
                    </div>
                    <form action="get" className='login-form'>
                        <label className='login-form-label' htmlFor="name">Name</label>
                        <input className='login-form-input' type="text" placeholder='Your Name' />
                        <label className='login-form-label' htmlFor="email">Email</label>
                        <input className='login-form-input' type="email" placeholder='Your Email Adress' />
                        <label className='login-form-label' htmlFor="password" >Password</label>
                        <input className='login-form-input' type={this.props.typePassword} placeholder='Your Password' />
                        <span><i className="fa fa-eye" onClick={this.props.togglePassword}></i></span>
                        <div className='login-form-checkbox'>
                            <input type="checkbox" id='remember-me' />
                            <label htmlFor="remember-me">Remember me</label>
                        </div>
                        <button className="btn btn-dark btn-login">Log in</button>
                    </form>
                    <p id="forgot-password">Forgot your password?</p>
                </div>
                <div className='login-page-footer'>
                    <p>Don't have an account</p>
                </div>
            </div>
        );
    }
}

export default SignUpPage;
