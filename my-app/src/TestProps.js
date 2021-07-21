import React, { Component } from 'react';

class TestProps extends Component {
    constructor(props) {
        super(props)

        this.state = {
            nama: true
        }
    }

    render() {
        return (
            <div className={this.props.var2}>
                {this.state.nama.toString()}
                <button
                    onClick={() => { this.setState({ nama: !this.state.nama }) }}
                >
                    Ubah state
                </button>
            </div>
        );
    }
}

export default TestProps;