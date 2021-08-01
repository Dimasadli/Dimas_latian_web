import React, { Component } from 'react';
import CardProduct from '../../Product/CardProduct/CardProduct';
import './Main.css'

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='img-page'>
                    <img src="https://www.kahfeveryday.com/wp-content/uploads/2021/07/kahf_login.jpg" alt="" />
                </div>
                <div className='login-page'>
                    <div className='login-page-title'>
                        <h1>Welcome back and sign in your account</h1>
                    </div>
                    <form action="get" className='login-form'>
                        <label className='login-form-label' htmlFor="email">Email</label>
                        <input type="email" value={this.state.email} />
                        <label className='login-form-label' htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} />
                        <input type="checkbox" id='remember-me' />
                        <label htmlFor="remember-me">Remember me</label>
                        <button>Log in</button>
                        <p>Forgot your password?</p>
                    </form>
                    <div className='login-page-footer'>
                        <p>Don't have an account</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Main;
