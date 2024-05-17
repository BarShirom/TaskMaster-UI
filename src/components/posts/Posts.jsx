import { useState } from "react";
import "./posts.css";

const Posts = ({ createPost, posts, id }) => {
  const [isPostsVisible, setIsPostsVisible] = useState(false);
  const [postData, setPostData] = useState({
    title: "",
    body: "",
  });

  return (
    <div className="postsContainer">
      <div className="postsUserIdAndAddBtn">
        <div className="postsUserId">Posts - User {id}</div>

        <div className="addPBtn">
          <button onClick={() => setIsPostsVisible(true)}>Add</button>
        </div>
      </div>

      {isPostsVisible ? (
        <div className="newPostContainer">
          <div className="newPostInputs">
            <div className="postTitleInput">
              <label htmlFor="">Title:</label>
              <input
                type="text"
                onChange={(e) =>
                  setPostData({ ...postData, title: e.target.value })
                }
              />
            </div>

            <div className="postBodyInput">
              <label htmlFor="">Body:</label>
              <input
                type="text"
                onChange={(e) =>
                  setPostData({ ...postData, body: e.target.value })
                }
              />
            </div>
          </div>
          <div className="newPostBtnContainer">
            <div className="addNewPostBtn">
              <button
                onClick={() => {
                  createPost(id, postData.title, postData.body);
                  setIsPostsVisible(false);
                }}
              >
                Add
              </button>
            </div>
            <div className="cancelNewPostBtn">
              <button onClick={() => setIsPostsVisible(false)}>Cancel</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="postsList">
          {posts?.map((post) => (
            <div className="postItem" key={post.id}>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Posts;
