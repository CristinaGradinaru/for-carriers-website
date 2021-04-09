import React, { Component } from "react";
import Post from "../component/Post";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      posts: [],
    };
  }
  async componentDidMount() {
    const res = await fetch("http://localhost:5000/posts/all");
    const posts = await res.json();
    this.setState({ posts: posts });
  }
  render() {
    return (
      <div>
        <div className="site-wrapper">
          <div className="site-wrapper-inner">
            <div className="cover-container">
              <div className="inner cover">
                <h1 className="cover-heading">Find Out the Latest News in Printing and Branding</h1>
                <p className="lead mt-4">
                    Best ways to market your transportation business is by...creating a visual identity and a brand name. Let us tell you how you can achieve that and give you the best solutions for your company.
                </p>
                <p className="lead">
                  <a className="btn btn-lg button-cover" href="/products">
                    Shop Here
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="justify-content-center">
          {this.state.posts.map((p) => (
            <Post getToken={this.props.getToken} key={p.id} post={p} />
          ))}
        </div>
      </div>
    );
  }
}
