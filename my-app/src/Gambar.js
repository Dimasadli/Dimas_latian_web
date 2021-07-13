import React, { Component } from 'react';
import contohGambar from './assets/Profile.svg'

class Gambar extends Component {
    constructor(props) {
        super(props);

    }



    render() {
        return (
            <input placeholder="Ini punya gambar" value={this.props.valueInputan} onChange={this.props.dariParent}></input>
        );
    }
}

export default Gambar;