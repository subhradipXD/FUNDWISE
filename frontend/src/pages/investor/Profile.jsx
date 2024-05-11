import { BiUser } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { FaPeopleRobbery } from "react-icons/fa6";
import "./profile.css";
import Footer from "../../inc/Footer";
import LoggedInMenu from "../../inc/LoggedInMenu";
import user from "../../assets/navImg/user.png";

import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { MdHandshake } from "react-icons/md";

import { useRef, useEffect, useState } from "react";
import ClipboardJS from "clipboard";
import axios from "axios";

function UserProfile() {
  const baseURL = "http://localhost:2000";
  const [posts, setPosts] = useState([]);

  const usernameRef = useRef(null);

  const handleCopyUsername = () => {
    if (usernameRef.current) {
      const username = usernameRef.current.getAttribute("data-username");
      navigator.clipboard
        .writeText(username)
        .then(() => {
          alert("Username copied to clipboard!");
        })
        .catch((err) => {
          console.error("Failed to copy username: ", err);
        });
    }
  };

  useEffect(() => {
    getPosts();

    const clipboard = new ClipboardJS(".copy-username", {
      text: function (trigger) {
        return trigger.getAttribute("data-username");
      },
    });

    clipboard.on("success", function (e) {
      e.clearSelection();
      alert("Username copied to clipboard!");
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  const getPosts = async () => {
    try {
      const res = await axios.get(`${baseURL}/post/`);
      const sortedPosts = res.data.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      setPosts(sortedPosts.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <LoggedInMenu />
      <div className="container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={user}
                width={200}
                alt="User Image"
                className="img-fluid rounded-circle mb-3 shadow mb-md-0 bg-body-tertiary rounded"
              />
            </div>
            <div className="col-md-8 shadow p-4 p-md-5 bg-body-tertiary rounded">
              <h2>User Name</h2>
              <div className="d-flex align-items-center mb-3">
                <BiUser className="me-2" /> {/* React Icon for user */}
                <span ref={usernameRef} data-username="username">
                  username
                </span>
                <button
                  className="btn btn-sm btn-primary ms-auto copy-username"
                  onClick={handleCopyUsername}
                >
                  Copy Username
                </button>
              </div>
              <p>
                <BiPhone /> {/* React Icon for phone */}
                Phone Number: <span>123-456-7890</span>
              </p>
              <p>
                <BiInfoCircle /> {/* React Icon for info */}
                About: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed quis justo sed urna volutpat tincidunt.
              </p>
              <p>
                <FaPeopleRobbery /> {/* React Icon for followers */}
                Followers: 1000
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="button"
                  className="btn btn-primary me-md-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit Profile
                </button>
                <button className="btn btn-primary">Follow</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-6">
            <h3>Your Timeline Posts</h3>
            <ul className="list-unstyled">
              {posts.map((post) => (
                <li
                  key={post._id}
                  className="mb-3 shadow p-3 bg-body-tertiary rounded"
                >
                  <div className="card-body">
                    <h5 className="card-title">{post.title}</h5>
                    <p className="card-text text-muted mt-2">
                      {post.description}
                    </p>
                    {post.image && (
                      <div className="img-container mt-3">
                        <img
                          src={`${baseURL}/post-images/${post.image}`}
                          className="img-fluid"
                          alt="Post Image"
                        />
                      </div>
                    )}

                    <div className="d-flex justify-content-between mt-3">
                      <button className="btn btn-outline-danger">
                        <CiHeart /> Like
                      </button>
                      <button className="btn btn-outline-primary">
                        <FaRegCommentDots /> Comment
                      </button>
                      <button className="btn btn-outline-success">
                        <MdHandshake /> Interested
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-md-6">
            <h3>Your Business Posts</h3>
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        className="modal fade custom-modal"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog custom-modal-dialog">
          <div className="modal-content custom-modal-content">
            <div className="modal-header custom-modal-header">
              <h1
                className="modal-title fs-5 custom-modal-title"
                id="exampleModalLabel"
              >
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close custom-btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body custom-modal-body">
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label custom-label">
                  Profile Pic
                </label>
                <input
                  className="form-control custom-input"
                  type="file"
                  id="formFile"
                />
              </div>
              <div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label custom-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control custom-input"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                {/* <!-- Add similar custom styling for other input fields --> */}
              </div>
            </div>
            <div className="modal-footer custom-modal-footer">
              <button
                type="button"
                className="btn btn-secondary custom-btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary custom-btn-primary"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default UserProfile;
