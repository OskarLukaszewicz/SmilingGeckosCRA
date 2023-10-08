import React from "react";
import { ClipLoader } from "react-spinners";
import TimeAgo from "timeago-react";

const PostList = ({ post, form, firstElement, lastElement, pagin }) => {
  let postList;
  let Comments;
  let title;

  if (post) {
    postList = (
      <div className="pWrapper">
        <h4>{post.title}</h4>
        <p className="paragraphText">{post.content}</p>
        <span>
          <TimeAgo datetime={post.createdAt} />
        </span>
        <div className={"blogImages"}>
          {post.images.length > 0
            ? post.images.map((pho, index) => {
                return (
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
                );
              })
            : ""}
        </div>
      </div>
    );
  } else {
    postList = (
      <div className="pWrapper">
        {" "}
        <ClipLoader color="#00adb5" cssOverride={{}} size={80} />{" "}
      </div>
    );
  }
  if (post) {
    Comments = post.comments.map((comment, index) => {
      return index >= firstElement && index < lastElement ? (
        <div key={comment.id} className="comment">
          <span>{comment.authorName ? comment.authorName : "🦎"} - </span>{" "}
          <TimeAgo datetime={comment.createdAt} />
          <p className="">{comment.content}</p>
        </div>
      ) : null;
    });
  } else {
    Comments = "";
  }

  post
    ? (title = <h5 style={{ fontSize: 30, marginBottom: 10 }}>Komentarze</h5>)
    : (title = null);

  return (
    <>
      <div className="blogPost">{postList}</div>
      <div className="commentsContainer">
        {title}
        <div className="comments">{Comments}</div>
        <div className="form">{form}</div>
        <div className="pagin">{pagin}</div>
      </div>
    </>
  );
};

export default PostList;
