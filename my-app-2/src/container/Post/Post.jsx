import React, { Component } from 'react';

class Post extends Component {
    render() {
        return (
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="" />
                </div>
                <div className="content">
                    <p className="title">{this.props.title}</p>
                    <p className="desc">{this.props.desc}</p>
                </div>
            </div>
        );
    }
}

export default Post;
