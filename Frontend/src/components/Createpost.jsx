import React from "react";
import "./Createpost.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Createpost = () => {
  const navigate = useNavigate();

  const handlesubmit = async (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);

    axios
      .post("http://localhost:3000/create-post", formdata)
      .then((res) => {
        console.log(res);
        navigate("/posts");
      })
      .catch((err) => {
        console.log(err);
        alert("Error in creating...");
      });
  };

  return (
    <div className="container">
      <form className="card" onSubmit={handlesubmit}>
        <h2 className="title">Create Your Post</h2>

        <input type="file" name="image" className="fileInput" />

        <input
          type="text"
          name="caption"
          placeholder="Enter caption..."
          className="input"
        />

        <button type="submit" className="button">
          Post
        </button>
      </form>
    </div>
  );
};
