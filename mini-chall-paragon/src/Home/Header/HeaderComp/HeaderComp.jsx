import React, { Component } from 'react';
import './HeaderComp.css'
import HeaderCompTop from './HeaderCompTop/HeaderCompTop';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";



class HeaderComp extends Component {
    render() {
        return (
            <div className='header-wrapper'>
                <HeaderCompTop />
                <div className="d-flex justify-content-between header-bottom">
                    <div className="header-bottom-logo">
                        <img src="https://www.kahfeveryday.com/wp-content/uploads/2020/07/logo_kahf-1.png" alt="" />
                    </div>
                    <div className="header-bottom-link">
                    </div>
                    <div>
                        <input className='form-control' type="text" name="" id="" placeholder='Type to search' />
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderComp;
