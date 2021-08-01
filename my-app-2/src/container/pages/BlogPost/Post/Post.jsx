import React, { Component, Fragment } from 'react';

class Post extends Component {
    removeHandle = () => {
        this.props.remove(this.props.data.id)
    }
    updateHandle = () => {
        this.props.update(this.props.data)
    }
    detailHandle = () => {
        this.props.goDetail(this.props.data.id)
    }
    render() {
        return (
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="" />
                </div>
                <div className="content">
                    <p className="title" onClick={this.detailHandle}>{this.props.data.title}</p>
                    <p className="desc">{this.props.data.body}</p>
                    <button className='btn btn-secondary' onClick={this.removeHandle}>Remove</button>
                    <button className='btn btn-dark' onClick={this.updateHandle}>Update</button>
                </div>
            </div>
        );
    }
}

export default Post;
