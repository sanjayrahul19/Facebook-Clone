import React from "react";
import "./Widget.css";
const Widget = () => {
  return (
    <div>
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FThangs3D%2Fposts%2F500605581483442&show_text=true&width=500"
        width="500"
        height="744"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Widget;
