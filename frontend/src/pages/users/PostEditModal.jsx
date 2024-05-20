import React, { useRef } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const PostEditModal = ({ setEditModal, post_ID, setUserPosts }) => {
  const formEditPostRef = useRef(new Map());
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(post_ID);
    try {
      const res = await axios.post("http://localhost:2000/post/update_post", {
        post_ID: post_ID,
        post_title: formEditPostRef.current.get("title").value,
        post_description: formEditPostRef.current.get("description").value,
      });

      Swal.fire({
        title: "Post Updated Successfully",
        icon: "success",
      });
      if (res) {
        setUserPosts((prev) => [...prev]);
      }
      setEditModal(false);
    } catch (e) {
      Swal.fire({
        title: "Some connection issue occurred",
        icon: "error",
      });
    }
  }

  return (
    <div
      className="d-flex justify-content-center align-items-center position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75"
      style={{ zIndex: 6 }}
    >
      <div
        className="bg-white p-4 rounded position-relative"
        style={{ width: 400 }}
      >
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-3"
          aria-label="Close"
          onClick={() => setEditModal(false)}
        ></button>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              ref={(el) => formEditPostRef.current.set("title", el)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="description"
              ref={(el) => formEditPostRef.current.set("description", el)}
            />
          </div>
          <div className="d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => setEditModal(false)}
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostEditModal;
