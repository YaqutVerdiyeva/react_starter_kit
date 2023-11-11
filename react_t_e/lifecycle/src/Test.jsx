import React, { useState } from "react";
import { useEffect } from "react";

const Test = () => {
  const [postId, setPostId] = useState(1);
  const [post, setPost] = useState(false);

  //   useEffect(() => {
  //     console.log("component render oldu");
  //   });
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [postId]);
  useEffect(() => {
    console.log("component ilk yuklendiyinde calisir");
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
    let interval = setInterval(() => console.log("interval calisti"), 1000);
    return () => {
      console.log("component destroyed");
      clearInterval(interval);
    };
  }, []);
  return (
    <div>
      <h3>{postId}</h3>
      {post && JSON.stringify(post)}
      <button onClick={() => setPostId((postId) => postId + 1)}>
        Sonraki konu
      </button>
      <hr />
      test componenti
    </div>
  );
};

export default Test;
