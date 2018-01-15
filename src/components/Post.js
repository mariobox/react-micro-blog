import React, { Component } from 'react';


class Post extends Component {

    render() {
        return (
            <div className="individualPost">
                <div className="container">
                    <div className="row">
                        <div className="two columns"><p><img src={this.props.meta.image} alt="" /></p></div>
                        <div className="ten columns">
                            <p className="author">{this.props.meta.author}</p>
                            <p>{this.props.meta.blogPost}</p>
                            <p className="date">{this.props.meta.date}</p>
                        </div>
                        <hr />
                    </div>
                </div>
            </div>
        );
    }
}

export default Post;