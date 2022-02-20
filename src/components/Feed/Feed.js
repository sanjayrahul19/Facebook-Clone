import React, { useState, useEffect } from "react";
import PostUploader from "../postUploader/PostUploader";
import StoryReel from "../storyReel/StoryReel";
import "./Feed.css";
import { db } from "../../Firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import Post from "../post/Post";
const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await query(
          collection(db, "posts"),
          orderBy("timestamp", "desc")
        );
        onSnapshot(data, (snapShot) => {
          setPosts(
            snapShot.docs.map((doc) => {
              return {
                id: doc.id,
                data: doc.data(),
              };
            })
          );
        });
      } catch (err) {
        console.log(err);
      }
      console.log(posts);
    };
    getData();
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <PostUploader />
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        );
      })}
    </div>
  );
};

export default Feed;
