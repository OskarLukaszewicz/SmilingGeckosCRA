import React, { Component } from "react";
import PostList from "../components/PostList";
import "../styles/Blog.css";
import axios from "axios";
import Paginator from "../components/Paginator";

class Blog extends Component {
  state = {
    page: 1,
  };

  handleClick = (event) => {
    switch (event.target.name) {
      case "next":
        this.setState({
          page: this.state.page + 1,
        });
        break;
      case "previous":
        this.setState({
          page: this.state.page - 1,
        });
        break;
      default:
        console.log("whoops");
    }
  };

  componentDidMount() {
    axios
      .get("https://smilinggeckos.com/api/blog_posts?order[createdAt]")
      .then((response) => {
        this.setState({ posts: response.data["hydra:member"] });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    return (
      <Paginator
        page={this.state.page}
        elNum={this.state.posts ? this.state.posts.length : null}
        onClick={this.handleClick}
      >
        <PostList posts={this.state.posts} />
      </Paginator>
    );
  }
}

export default Blog;
