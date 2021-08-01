//libraries
import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    BrowserRouter
} from "react-router-dom";

//pages 
import Product from '../pages/Product/Product';
import LifeCycle from '../pages/LifeCycle/LifeCycle';
import BlogPost from '../pages/BlogPost/BlogPost';
import Tabel from '../pages/Tabel/Tabel';
import YoutubeCompPage from '../pages/YoutubeCompPage/YoutubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

//style
import './Home.css';

class Home extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className='nav justify-content-end navigasi' >
                        <Link className='nav-link' to='/'>Blog Post</Link>
                        <Link className='nav-link' to='/product'>Product</Link>
                        <Link className='nav-link' to='/lifecycle'>LifeCycle</Link>
                        <Link className='nav-link' to='/youtube'>Youtube</Link>
                        <Link className='nav-link' to='/tabel'>Tabel</Link>
                    </div>
                    <Route path='/' exact component={BlogPost} />
                    <Route path='/detail-post/:postID' component={DetailPost} />
                    <Route path='/product' component={Product} />
                    <Route path='/lifecycle' component={LifeCycle} />
                    <Route path='/youtube' component={YoutubeCompPage} />
                    <Route path='/tabel' component={Tabel} />
                </Fragment>
            </Router>
        );
    }
}



export default Home;
