import React, { Component } from 'react';
// import YoutubeComp from '../../component/YoutubeComp/YoutubeComp';
import Product from '../Product/Product';
// import LifeCycle from '../LifeCycle/LifeCycle';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {
    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
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
                <YoutubeComp /> */}
                <p>Counter</p>
                <hr />
                <Product />
                {/* <p>Life Cycle Component</p>
                <hr />
                <LifeCycle /> */}
                {/* <p>Blog Post</p>
                <hr />
                <BlogPost /> */}
            </div>
        );
    }
}



export default Home;
