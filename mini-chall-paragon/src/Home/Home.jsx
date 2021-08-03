import React, { Component, Fragment } from 'react';
import HeaderComp from './Header/HeaderComp/HeaderComp';
import Product from './Product/Product';
import Main from './Main/Main';
import Cart from './Cart/Cart';
import axios from 'axios';
import LandingPage from './LandingPage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalOrder: []
        }
    }
    componentDidMount() {
        this.getCart()
    }
    getCart = () => {
        axios.get('https://paragon-training-api.herokuapp.com/cart').then(res => {
            this.setState({
                totalOrder: res.data
            })
        })
    }
    render() {
        return (
            <Router>
                <Fragment>
                    <div>
                        <HeaderComp
                            totalOrder={this.state.totalOrder} />
                    </div>
                    <Route path='/' exact component={LandingPage}></Route>
                    <Route path='/my-account' exact component={Main} />
                    <Route path='/product' component={Product} />
                    <Route path='/cart' component={Cart} />
                </Fragment>
            </Router>
        );
    }
}

export default Home;

    // <div>
    //     <HeaderComp
    //         totalOrder={this.state.totalOrder} />
    //     {/* <Product
    //         getCart={this.getCart} /> */}
    //     {/* <Main /> */}
    //     <Cart
    //         totalOrder={this.state.totalOrder} />
    // </div>