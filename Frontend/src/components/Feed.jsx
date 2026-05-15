import React, { useState ,useEffect, use} from "react";
import "./Feed.css";
import axios from "axios";

export const Feed = () => {

    
    
  const [post,setPost] = useState([

    {
      _id: 1,
      url: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      caption: "Sunset is the best heal...💛🌈",
    },
  ]);

 useEffect(() => {
   axios
     .get("http://localhost:3000/posts")
     .then((res) => {
       console.log(res.data);
       setPost(res.data.posts);
     })
     .catch((err) => {
       console.log(err);
     });
 }, []);

  return (
    <>
      <div className="navbar">My Feed</div>

      <div className="feedContainer">
        {post.map((item) => (
          <div className="card" key={item._id}>
            <img src={item.image} alt="post" className="postImage" />{" "}
            <p className="caption">{item.caption}</p>
          </div>
        ))}
      </div>
    </>
  );
};
