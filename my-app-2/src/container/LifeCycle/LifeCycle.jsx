import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 1,
            inputan: ''
        }
        this.setelahdiClick = this.setelahdiClick.bind(this)
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.count >= 5) {
            return false
        }
        return true
    }

    setelahdiClick() {
        this.setState({ nama: this.state.count += 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.setelahdiClick}>Silahkan Click, {this.state.count}</button>
                <input ></input>
            </div>
        );
    }
}

export default LifeCycle;
