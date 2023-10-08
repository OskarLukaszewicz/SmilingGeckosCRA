import React, { Component } from "react";
import Post from "../components/Post";
import Paginator from "../components/Paginator";
import "../styles/BlogPost.css";
import axios from "axios";

class BlogPost extends Component {
  state = {
    page: 1,
    usernameValue: "",
    contentValue: "",
  };

  handleChangeUsername = (event) => {
    this.setState({ usernameValue: event.target.value });
  };

  handleChangeContent = (event) => {
    this.setState({ contentValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://smilinggeckos.com/api/comments", {
        content: this.state.contentValue,
        authorName: this.state.usernameValue,
        blogPost: `/api/blog_posts/${this.state.post.id}`,
      })
      .then((response) => {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
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
      .get("https://smilinggeckos.com/api/blog_posts/" + this.props.id)
      .then((response) => {
        this.setState({ post: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  render() {
    if (this.state.post) {
      this.form = (
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Nazwa użytkownika:</label> <br />
          <input
            type="text"
            name="authorName"
            id="username"
            value={this.state.usernameValue}
            onChange={this.handleChangeUsername}
          />
          <br />
          <label htmlFor="cont">Komentarz:</label> <br />
          <textarea
            name="content"
            id="cont"
            cols="40"
            rows="5"
            value={this.state.contentValue}
            onChange={this.handleChangeContent}
          ></textarea>
          <br />
          <input type="submit" value="Wyślij" />
        </form>
      );
    } else {
      this.form = "";
    }
    return (
      <>
        <Paginator
          page={this.state.page}
          elNum={this.state.post ? this.state.post.comments.length : null}
          onClick={this.handleClick}
        >
          <Post post={this.state.post} form={this.form} />
        </Paginator>
      </>
    );
  }
}

export default BlogPost;
