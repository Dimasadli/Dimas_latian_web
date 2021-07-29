import React, { Component } from 'react';
import './BlogPost.css';
import Post from '../Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: []
        }
    }
    componentDidMount() {
        //cara fetch
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        //cara axios
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                this.setState({
                    post: res.data
                });
            })
    }
    render() {
        return (
            <div>
                <p className='section-title'>Blog Post</p>
                {
                    this.state.post.map(el => {
                        return (
                            <Post
                                key={el.id}
                                title={el.title}
                                desc={el.body}
                            />)
                    })
                }
            </div>
        );
    }
}

export default BlogPost;
