import React, { Component } from 'react';

class CardProduct extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.order >= 10) {
            return false
        }
        return true
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue)
    }

    tambahOrder = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order)
        })
    }
    kurangOrder = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order)
            })
        }
    }
    render() {
        return (
            <div className='card'>
                <div className="img-thumb-prod">
                    <img src="https://images.solecollector.com/complex/images/c_crop,h_1102,w_1048,x_32,y_98/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/smaxmnt5bolgs3akpbvu/nike-kobe-6-protro-eybl" alt="" />
                </div>
                <p className="product-title">Kobe IV Protro</p>
                <p className="product-price">$35.000</p>
                <div className="counter">
                    <button onClick={this.kurangOrder} className="minus">-</button>
                    <input type="text" value={this.props.order} />
                    <button onClick={this.tambahOrder} className="plus">+</button>
                </div>
            </div>
        );
    }
}

export default CardProduct;
