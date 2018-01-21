import React, { Component } from 'react';

class AddPost extends Component {

    addNewPost(e) {
        e.preventDefault();
        var post = {
            blogPost: this.blogPost.value,
            date: Date(),
            author: this.props.author,
            image: this.props.image
        };
        this.props.addPost(post);
        this.blogPost.value = "";
        this.blogPost.placeholder = "What are you doing?";
    }

    render() {
        return (
            <form onSubmit={(e) => this.addNewPost(e)}>
                <p><textarea ref={(input) => this.blogPost = input} placeholder="What are you doing?">
                </textarea><br />
                    <button type="submit">Post</button>
                </p>

            </form>
        );
    }
}

export default AddPost;

