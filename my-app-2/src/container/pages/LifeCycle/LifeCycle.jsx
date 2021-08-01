import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

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
            <Fragment>
                <div>
                    <button onClick={this.setelahdiClick} className='btn btn-lg btn-dark'>Silahkan di click: {this.state.count}</button>
                    <hr />
                    <p>Total Order: {this.props.order}</p>
                </div>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        order: state.totalOrder
    }
}
export default connect(mapStateToProps)(LifeCycle);
