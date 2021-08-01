import React, { Component, Fragment } from 'react';
import HeaderComp from './Header/HeaderComp/HeaderComp';
import Product from './Product/Product';
import Main from './Header/Main/Main';
import Cart from './Cart/Cart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div>
                <HeaderComp />
                <Product />
                {/* <Cart /> */}
            </div>
        );
    }
}

export default Home;
