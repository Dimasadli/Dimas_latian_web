import React, { Component } from 'react';
import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
class Home extends Component {
    render() {
        return (
            <div>
                <YoutubeComp time="6:50" />
                <YoutubeComp time="11:50" />
                <YoutubeComp time="23:20" />
                <YoutubeComp time="12:50" />
            </div>
        );
    }
}


export default Home;
