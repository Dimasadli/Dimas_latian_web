import React, { Component, Fragment } from 'react';
import YoutubeComp from '../../../component/YoutubeComp/YoutubeComp'

class YoutubeCompPage extends Component {
    render() {
        return (
            <Fragment>
                <p>Youtube Component</p>
                <hr />
                <YoutubeComp
                    time="6:50"
                    title='Kobe V'
                    desc="di upload 2 hari yang lalu" />
                <YoutubeComp
                    time="11:50"
                    title='Kobe VI'
                    desc="di upload 3 hari yang lalu" />
                <YoutubeComp
                    time="23:20"
                    title='Kobe VII'
                    desc="di upload 10 hari yang lalu" />
                <YoutubeComp />
            </Fragment>
        );
    }
}

export default YoutubeCompPage;
