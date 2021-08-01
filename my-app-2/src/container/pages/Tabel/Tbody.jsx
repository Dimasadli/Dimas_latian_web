import React, { Component } from 'react';

class Tbody extends Component {
    render() {
        return (
            <tbody>
                <tr>
                    <td>2: </td>
                    <td>{this.props.data.API}</td>
                    <td>{this.props.data.Description}</td>
                    <td>{this.props.data.Auth}</td>
                    <td>{this.props.data.HTTPS}</td>
                    <td>{this.props.data.Cors}</td>
                    <td>{this.props.data.Link}</td>
                    <td>{this.props.data.Category}</td>
                </tr>
            </tbody>
        );
    }
}

export default Tbody;
