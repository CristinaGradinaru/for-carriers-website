import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export default class CreatePost extends Component {
    constructor() {
        super();

        this.state = {
            redirect: null
        }
    }


    async createapost(e){
        e.preventDefault();
        let token = await this.props.getToken();
        console.log(token)
        let res = await fetch('http://localhost:5000/posts/create', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token['token']
                
            },
            body: JSON.stringify({
                "title": e.target.title.value,
                "image": e.target.image.value,
                "content": e.target.content.value,
            })
        })
        let newPost = await res.json();
        console.log(newPost)
        this.setState({ redirect: `/post/${newPost.id}`})
        console.log(this.state.redirect)
    }
    
    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        return (
            <div className="col-sm-8 offset-sm-2 mt-5">
                <form onSubmit={(e) => this.createapost(e)}>
                <div className="note mb-5">
                                <p>Create a Post</p>
                </div>
                    <input type="text" className="form-control" name="title" placeholder="Title" />
                    <br/>
                    <input type="text" className="form-control" name="image" placeholder="Image URL" />
                    <br/>
                    <textarea type="text" className="form-control" name="content" placeholder="Content" />
                    <br/>
                    <button type="submit" className="btn btn-blue">Submit</button>
                </form>
            
        </div>

        )
    }
}
