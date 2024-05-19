import LoggedInMenu from "../../inc/LoggedInMenu";
import addPost from "../../assets/feed/addPost.png";
import { CiHeart } from "react-icons/ci";
import { MdHandshake } from "react-icons/md";
import { useState, useMemo, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./feed.css";
import { useCookies } from "react-cookie";
import axios from "axios";
import { UserContext } from "../../Context/ContextProvider";
import userImg from "../../assets/navImg/user.png";

function Feed() {
  const baseURL = "http://localhost:2000";

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [postImage, setPostImage] = useState(null);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["token"]);
  const { user, userPosts, setUserPosts } = useContext(UserContext);

  const [searchQuery, setSearchQuery] = useState("");
  if (!cookies.token) {
    navigate("/");
  }
  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("userId", user._id);
      formData.append("title", title);
      formData.append("email", user.email);
      formData.append("description", description);
      formData.append("postBy", user.name);
      if (postImage !== null) {
        formData.append("image", postImage);
      }

      const res = await axios.post(`${baseURL}/post/feed`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.error === false) {
        // If error is false, show the success message
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000, // Close after 2 seconds
        });
        setUserPosts((prevPosts) => [...prevPosts, res.data.post]);
      }

      getPosts(); // Refresh posts
      setTitle("");
      setDescription("");
      setPostImage(null);
    } catch (err) {
      console.log(err);
      // Handle error
    }
  };
  const notifyOwner = async (ownerEmail, title) => {
    if (localStorage.getItem("liked") == title) {
      alert("already interested");
      return;
    }
    const response = await axios.post(
      "http://localhost:5000/send_email_interest",
      {
        ownerEmail,
        title,
        interestUser: user,
      }
    );

    // await axios.post(""); //update like;
    localStorage.setItem("liked", title);
  };

  const getPosts = async () => {
    try {
      const res = await axios.get(`${baseURL}/post/`);
      const sortedPosts = res.data.sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
      const filteredPosts = sortedPosts.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setPosts(filteredPosts.reverse());
    } catch (err) {
      console.log(err);
    }
  };
  useMemo(() => {
    getPosts();
  }, [searchQuery]);
  return (
    <>
      <LoggedInMenu />
      <div className="mt-0 pt-0">
        <div className="container">
          <div className="row mx-0 mt-2">
            <div className="card shadow p-2 mb-3 bg-body-tertiary rounded">
              <div className="card-body">
                <div className="container">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    What's in your mind?
                  </label>
                  <input
                    type="button"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="What's in your mind?"
                    data-toggle="modal"
                    data-bs-target="#myModal3"
                    data-bs-toggle="modal"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-2">
            <div className="col-md-8">
              {posts.length === 0 ? (
                <div>No posts found for the search query "{searchQuery}"</div>
              ) : (
                <ul className="list-unstyled">
                  {posts.map((post, i) => (
                    <li
                      key={i}
                      className="mb-1 shadow p-3 bg-body-tertiary rounded"
                    >
                      <div className="card-body">
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={userImg}
                            alt=""
                            className="user-img rounded-circle"
                            style={{
                              width: "50px",
                              height: "50px",
                              border: "2px solid #ddd",
                              padding: "2px",
                            }}
                          />
                          <h5
                            className="ms-3 mb-0"
                            style={{ fontWeight: "bold" }}
                          >
                            {post?.postBy}
                          </h5>
                        </div>
                        <h6 className="card-title">{post.title}</h6>
                        <p
                          className="card-text mt-2"
                          style={{ fontSize: "0.8rem" }}
                        >
                          {post.description}
                        </p>
                        <span style={{ fontSize: "0.8rem", color: "#6c757d" }}>
                          <small>
                            {new Date(`${post.createdAt}`).toLocaleDateString(
                              "en-US",
                              {
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                                ordinalDate: true,
                              }
                            )}
                          </small>
                        </span>
                        {post.image && (
                          <div className="img-container mt-3">
                            <img
                              src={`${baseURL}/post-images/${post.image}`}
                              width={"500"}
                              alt=""
                            />
                          </div>
                        )}
                        <div className="d-flex justify-content-around mt-5">
                          <span className="btn" style={{ color: "red" }}>
                            <CiHeart
                              style={{ fontSize: "20px", color: "red" }}
                            />{" "}
                            Like{" "}
                          </span>
                          <span
                            onClick={() => {
                              notifyOwner(post.email, post.title);
                            }}
                            className="btn"
                            style={{ color: "green" }}
                          >
                            <MdHandshake
                              style={{ fontSize: "20px", color: "green" }}
                            />{" "}
                            Interested{" "}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div className="col-md-4">
              <form className="d-flex" role="search">
                <input
                  className="form-control me-1"
                  type="search"
                  placeholder="Search By #Tags . . ."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="modal modal-xl" tabIndex="-1" id="myModal3">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Add your post...</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body" style={{ backgroundColor: "#F2f7FD" }}>
              <div className="row">
                <div className="col-md-6">
                  <img src={addPost} alt="img" width={550} />
                </div>
                <div className="col-md-6">
                  <div className="shadow p-2 mb-3 bg-body-tertiary rounded">
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      >
                        Write here...
                      </label>
                      <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Write here..."
                        value={title}
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Add Description
                      </label>
                      <textarea
                        onChange={(e) => setDescription(e.target.value)}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        value={description}
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="formFileMultiple" className="form-label">
                        Choose your image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="formFileMultiple"
                        multiple
                        accept=".jpeg, .jpg, .png, .webp"
                        onChange={(e) => {
                          // setImagePreview(URL.createObjectURL(e.target.files[0]));
                          setPostImage(e.target.files[0]);
                        }}
                      />
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-sm btn-primary"
                        type="submit"
                        onClick={handleSubmit}
                        data-bs-dismiss="modal"
                      >
                        Add post
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feed;
