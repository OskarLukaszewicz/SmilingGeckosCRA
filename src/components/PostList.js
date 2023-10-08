import React from "react";
import { Link } from "wouter";
import { ClipLoader } from "react-spinners";
import TimeAgo from "timeago-react";

const PostList = ({ posts, firstElement, lastElement, pagin }) => {
  let postsList;
  if (posts) {
    postsList = posts.map((post, index) => {
      return index >= firstElement && index < lastElement ? (
        <div className="pWrapper" key={post.id}>
          <Link href={"/blog/" + post.id}>
            <h4 className="PostLink">{post.title}</h4>
          </Link>
          <p className="paragraphText">{post.content}</p>
          <span>
            <TimeAgo datetime={post.createdAt} />
          </span>
          <div className="blogImages">
            {post.images.length > 0
              ? post.images.map((pho, index) => {
                  return index < 4 ? (
                    <a
                      key={index}
                      data-lightbox={"blogPost" + index}
                      href={`https://smilinggeckos.com/static/media/${pho.url}`}
                    >
                      <img
                        className="blogImg"
                        src={`https://smilinggeckos.com/static/media/${pho.url}`}
                        alt={pho}
                      />
                    </a>
                  ) : null;
                })
              : null}
          </div>
        </div>
      ) : null;
    });
  } else {
    postsList = (
      <div className="pWrapper">
        {" "}
        <ClipLoader color="#00adb5" size={80} />{" "}
      </div>
    );
  }
  return (
    <>
      {" "}
      <div className="pagin">{pagin}</div>
      <div className="blog">{postsList}</div>{" "}
    </>
  );
};

export default PostList;
