import React, { Component } from 'react';
import './Cart.css'
import CartDetail from './CartDetail/CartDetail';
import axios from 'axios';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalOrder: {}
        }
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
            <div className="container">
                <div className="cart-title">
                    <h1>Shopping Cart</h1>
                </div>
                {
                    this.state.totalOrder.map((el, id) => {
                        return (
                            <CartDetail
                                key={id}
                                data={el}
                            />
                        )
                    })
                }
                <div id='go-back-shopping'>
                    <p><span>&larr;</span> Go back to Shopping</p>
                </div>
            </div>
        );
    }
}

export default Cart;

// this.props.totalOrder