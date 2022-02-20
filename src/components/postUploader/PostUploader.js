import { Avatar, LinearProgress } from "@material-ui/core";
import React, { useState } from "react";
import "./PostUploader.css";
import { useSelector } from "react-redux";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import { db, storage, timestamp } from "../../Firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
const PostUploader = () => {
  const [input, setInput] = useState("");
  const [image, setImage] = useState("");
  const [progress, setProgress] = useState(0);
  const user = useSelector((state) => state.userData.user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const storageRef = ref(storage, `images${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog =
          Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(prog);
      },
      (err) => {
        console.log(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            addDoc(collection(db, "posts"), {
              message: input,
              timestamp: timestamp,
              profilePic: user.photoURL,
              username: user.displayName,
              image: url,
            });
            setProgress(0);
            setInput("");
            setImage("");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    );
  };

  return (
    <div className="postUploader">
      <div className="postUploader__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            placeholder={`Write Something...${user.displayName}`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="postUploader__input"
          />
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          <button type="submit" onClick={handleSubmit}>
            hidden
          </button>
        </form>
      </div>
      {progress > 0 && (
        <LinearProgress variant="determinate" value={progress} />
      )}
      <div className="postUploader__bottom">
        <div className="postUploader__option">
          <Videocam style={{ color: "red" }} />
          <h3>Video Live</h3>
        </div>
        <div className="postUploader__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="postUploader__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default PostUploader;
