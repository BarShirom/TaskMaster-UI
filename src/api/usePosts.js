import { useState, useEffect } from "react";
import axios from "axios";

const postsURL = "https://jsonplaceholder.typicode.com/posts";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get(postsURL);
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getPosts();
  }, []);

  const createPost = (userId, title, body) => {
    const newPost = {
      id: posts.length + 1,
      title,
      userId,
      body,
    };
    setPosts([newPost, ...posts]);
  };

  return {
    posts,
    createPost,
  };
};

export default usePosts;
