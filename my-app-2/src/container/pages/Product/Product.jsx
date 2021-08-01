import React, { Component, Fragment } from 'react';
import './Product.css';
import CardProduct from './CardProduct/CardProduct';
import { connect } from 'react-redux'

class Product extends Component {
    // state = {
    //     order: 0,
    // }
    // handleCounterChange = (newValue) => {
    //     if (newValue >= 0) {
    //         this.setState({
    //             order: newValue
    //         })
    //     }
    // }
    // shouldComponentUpdate(nextProps, nextState) {
    //     if (nextState.order >= 10) {
    //         return false
    //     }
    //     return true
    // }
    render() {
        return (
            <Fragment>
                <p>Halaman Product</p>
                <div className="header">
                    <div className="logo">
                        <img src='' alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-svg-png-icon-download-28.png" alt="" />
                        <div className="count">{this.props.order}</div>
                    </div>
                </div>
                <CardProduct
                // onCounterChange={this.handleCounterChange}
                // order={this.state.order}
                />
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

export default connect(mapStateToProps)(Product);
