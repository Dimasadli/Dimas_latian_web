import React, { Component } from 'react';
import { connect } from 'react-redux'

class CardProduct extends Component {
    // tambahOrder = () => {
    //     this.props.onCounterChange(this.props.order + 1)
    // }
    // kurangOrder = () => {
    //     this.props.onCounterChange(this.props.order - 1)
    // }

    render() {
        return (
            <div className='card'>
                <div className="img-thumb-prod">
                    <img src="https://images.solecollector.com/complex/images/c_crop,h_1102,w_1048,x_32,y_98/c_fill,dpr_2.0,f_auto,fl_lossy,q_auto,w_680/smaxmnt5bolgs3akpbvu/nike-kobe-6-protro-eybl" alt="" />
                </div>
                <p className="product-title">Kobe IV Protro</p>
                <p className="product-price">$35.000</p>
                <div className="counter">
                    <button onClick={this.props.kurangOrder} className="minus">-</button>
                    <input type="text" value={this.props.order} />
                    <button onClick={this.props.tambahOrder} className="plus">+</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        tambahOrder: () => dispatch({ type: 'PLUS_ORDER' }),
        kurangOrder: () => dispatch({ type: 'MINUS_ORDER' })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CardProduct);
