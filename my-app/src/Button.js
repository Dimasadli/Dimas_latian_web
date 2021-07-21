import React, { Component } from 'react';

class Button extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <button className={["stylingBawaan", this.props.className].join(' ')} style={{height: "200px"}}>
                {this.props.children}
            </button>
        );
    }
}

export default Button;