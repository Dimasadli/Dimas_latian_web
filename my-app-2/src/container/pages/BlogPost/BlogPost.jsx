import React, { Component } from 'react';
import './BlogPost.css';
import Post from '../BlogPost/Post/Post';
import axios from 'axios';

class BlogPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            formBlogPost: {
                userid: 1,
                id: 1,
                title: '',
                body: ''
            },
            isUpdate: false
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.getAPI = this.getAPI.bind(this)
        this.handleFormChange = this.handleFormChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
    }
    getAPI() {
        axios.get('http://localhost:3004/posts?_sort=id&_order=desc')
            .then((res) => {
                this.setState({
                    post: res.data
                });
            })
    }
    putDataToAPI() {
        axios.put(`http://localhost:3004/posts/${this.state.formBlogPost.id}`, this.state.formBlogPost).then((res) => {
            console.log(res)
            this.getAPI()
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    userid: 1,
                    id: 1,
                    title: '',
                    body: ''
                }
            })
        })
    }
    postDataToAPI = () => {
        axios.post('http://localhost:3004/posts', this.state.formBlogPost)
            .then((res) => {
                console.log(res)
                this.getAPI()
                this.setState({
                    formBlogPost: {
                        userid: 1,
                        id: 1,
                        title: '',
                        body: ''
                    }
                })
            }, (err) => {
                console.log('errornya: ', err)
            })
    }
    handleRemove(data) {
        axios.delete(`http://localhost:3004/posts/${data}`).then((res) => {
            this.getAPI()
        })
    }
    handleUpdate(data) {
        this.setState({
            formBlogPost: data,
            isUpdate: true
        })
    }
    componentDidMount() {
        this.getAPI()
    }
    handleFormChange(event) {
        let formBlogPostNew = { ...this.state.formBlogPost }
        let unikId = new Date().getTime();
        if (!this.state.isUpdate) {
            formBlogPostNew['id'] = unikId
        }
        formBlogPostNew[event.target.name] = event.target.value
        this.setState({
            formBlogPost: formBlogPostNew
        })
    }
    handleSubmit() {
        if (this.state.isUpdate) {
            this.putDataToAPI();
        }
        this.postDataToAPI();
    }
    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    render() {
        return (
            <div>
                <p>Halaman Blog Post</p>
                <hr />
                <div>
                    <p className='section-title'>Blog Post</p>
                    <div className="form-add-post">
                        <label htmlFor="title">Title</label>
                        <input type="text" name='title' value={this.state.formBlogPost.title} placeholder='add title' onChange={this.handleFormChange} />
                        <label htmlFor="body">Blog Content</label>
                        <textarea name="body" id="body" value={this.state.formBlogPost.body} cols="30" rows="10" placeholder='add blog content' onChange={this.handleFormChange}></textarea>
                        <div className='button-simpan'>
                            <button className='btn btn-success tombol' onClick={this.handleSubmit}>Simpan</button>
                        </div>
                    </div>
                    {
                        this.state.post.map(el => {
                            return (
                                <Post
                                    key={el.id}
                                    data={el}
                                    remove={this.handleRemove}
                                    update={this.handleUpdate}
                                    goDetail={this.handleDetail}
                                />)
                        })
                    }
                </div>
            </div>
        );
    }
}

export default BlogPost;
