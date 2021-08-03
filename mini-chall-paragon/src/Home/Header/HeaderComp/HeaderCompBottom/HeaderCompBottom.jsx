import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class HeaderCompBottom extends Component {
    render() {
        return (
            <div className="d-flex justify-content-between header-bottom">
                <div className="header-bottom-logo">
                    <img src="https://www.kahfeveryday.com/wp-content/uploads/2020/07/logo_kahf-1.png" alt="" />
                </div>
                <div className="header-bottom-link">
                    <Link className='link' to='/'>Home</Link>
                    <Link className='link' to='/product'>Shop</Link>
                    <Link className='link' >Brand</Link>
                    <Link className='link' >Kahf Program</Link>
                    <Link className='link' >Discovery</Link>
                    <hr />
                </div>
                <div>
                    <input className='form-control search' type="text" name="" id="" placeholder='Type to search' />
                </div>
            </div>
        );
    }
}

export default HeaderCompBottom;
