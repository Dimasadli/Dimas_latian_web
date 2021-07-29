import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from '../CardProduct/CardProduct';

class Product extends Component {
    state = {
        order: 0,
    }
    handleCounterChange = (newValue) => {
        if (newValue >= 0) {
            this.setState({
                order: newValue
            })
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.order >= 10) {
            return false
        }
        return true
    }
    render() {
        return (
            <Fragment>
                <div className="header">
                    <div className="logo">
                        <img src="" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://cdn.imgbin.com/19/22/3/imgbin-shopping-cart-icon-shopping-cart-aZxB9v23hRKuztjNENa8jA8HM.jpg  " alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct
                    onCounterChange={(value) => this.handleCounterChange(value)}
                    order={this.state.order}
                />
            </Fragment>
        );
    }
}

export default Product;
