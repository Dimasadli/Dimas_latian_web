import axios from 'axios';
import React, { Component } from 'react';

class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: ''
        }
    }
    componentDidMount() {
        const postID = this.props.match.params.postID;
        axios.get(`http://localhost:3004/posts/${postID}`).then(res => {
            console.log(res)
            this.setState({
                post: res.data
            });
        })
    }
    render() {
        return (
            <div>
                <p>Detail Post</p>
                <hr />
                <div className="post">
                    <div className="img-thumb">
                        <img src="https://placeimg.com/200/150/tech" alt="" />
                    </div>
                    <div className="content">
                        <p className="title" >{this.state.post.title}</p>
                        <p className="desc">{this.state.post.body}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailPost;
