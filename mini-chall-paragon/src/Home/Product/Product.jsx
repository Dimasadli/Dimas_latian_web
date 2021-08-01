import React, { Component } from 'react';
import CardProduct from './CardProduct/CardProduct';
/// API
import API from '../../API/API';

/// Style
import './Product.css'
class Product extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }
    handleClick = () => {
        console.log(this)
    }
    componentDidMount() {
        const dB = new API()
        dB.getAPI().then(res => {
            this.setState({
                post: res.data
            })
        })
    }

    handleClick = () => {
        console.log(this.state)
    }
    render() {
        return (
            <div className="container product-wrapper">
                {
                    this.state.post.map((el, idx) => {
                        return (
                            <CardProduct
                                goCart={this.handleClick}
                                data={el}
                                id={idx}
                            />
                        )
                    })
                }
            </div>
        );
    }
}

export default Product;
