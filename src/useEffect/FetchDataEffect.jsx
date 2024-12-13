import React from "react";
import { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);
  

  const url = 'https://jsonplaceholder.typicode.com/posts'

  useEffect(() => {
    console.log("first Time");
    async function FetchPosts() {
      const res = await fetch(url);
      const posts = await res.json();
      setPosts(posts);
      
     
    }
    FetchPosts();
  }, []);

  return (
    <div>
      <h1>First Post Title</h1>
      {posts.length>0? <h2>{posts[0].title}</h2>:"Loading..."}
      
    </div>
  );
};

export default FetchDataEffect;
