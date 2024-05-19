import React from "react";
import { BiUser, BiPhone, BiInfoCircle } from "react-icons/bi";
import { GoVerified } from "react-icons/go";
import Footer from "../../inc/Footer";
import LoggedInMenu from "../../inc/LoggedInMenu";
import userImage from "../../assets/navImg/user.png";
import { CiMenuKebab, CiHeart } from "react-icons/ci";
import { MdAlternateEmail } from "react-icons/md";
import Swal from "sweetalert2";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState, useContext } from "react";
import ClipboardJS from "clipboard";
import axios from "axios";
import { UserContext } from "../../Context/ContextProvider";

function UserProfile() {
  const baseURL = "http://localhost:2000";
  const navigate = useNavigate();
  const { user, setUser, userPosts, setUserPosts } = useContext(UserContext);
  const [cookies, setCookies] = useCookies(["token"]);
  const [imageFile, setImageFile] = useState(undefined);
  if (!cookies.token) {
    navigate("/");
  }

  const usernameRef = useRef(null);

  const [imagePreview, setImagePreview] = useState("");
  const [originalUserData, setOriginalUserData] = useState(null);
  const [newEmail, setNewEmail] = useState("");
  const [newPhoneNumber, setPhoneNumber] = useState("");
  const [newName, setNewName] = useState("");
  const [newUserName, setUserName] = useState("");
  const [about, setAbout] = useState("");

  const [avatar, setAvatar] = useState(null);
  useEffect(() => {
    // Initialize state variables with original user data
    if (user) {
      setOriginalUserData(user);
      setNewEmail(user.email);
      setPhoneNumber(user.phone);
      setNewName(user.name);
      setUserName(user.username);
      setAbout(user.about);
    }
  }, [user]);

  // Function to handle file input change and update image preview
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    setImageFile(file);
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  console.log(user);
  const handleEditProfile = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("email", newEmail);
      formData.append("phone", newPhoneNumber);
      formData.append("name", newName);
      formData.append("about", about);
      console.log(formData);
      const res = await axios.post(
        `${baseURL}/users/edit/${user._id}`,
        formData,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("Profile updated successfully:", res.data);
      if (res.data.error === false) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        setUser(res.data.response);
      }
    } catch (error) {
      // Handle errors
      console.error("Failed to update profile:", error);
    }
  };

  const handleEditProfilePicture = async (e) => {
    try {
      // const formData = new FormData();
      // const newAvatar = Buffer.from(avatar).toString('base64');

      const file = imageFile;
      const reader = new FileReader();

      reader.onloadend = async () => {
        // setImagePreview(reader.result);
        // if (file !== null) {
        // formData.append("avatar", reader.result);
        setAvatar(reader.result);
        setUser({ ...user, avatar: reader.result });
        await axios.post(`${baseURL}/users/edit-avatar/${user._id}`, {
          img: reader.result,
        });
      };
      // };

      if (file) reader.readAsDataURL(file);

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cookies.token}`,
        },
      };

      // const res = await axios.post(`${baseURL}/users/edit-avatar/${user._id}`, {
      //   img: avatar,
      // });

      // console.log("Profile picture updated successfully:", res.data);
      // if (res.data.error === false) {
      //   Swal.fire({
      //     icon: "success",
      //     title: res.data.message,
      //     showConfirmButton: false,
      //     timer: 2000,
      //   });
      //   setUser(res.data.response);
      // }
    } catch (error) {
      // Handle errors
      console.error("Failed to update profile picture:", error);
    }
  };

  const deletePost = async (postID, userID) => {
    try {
      const res = await axios.delete(`${baseURL}/post/${postID}`, {
        headers: {
          Authorization: `Bearer ${cookies.token}`,
        },
      });

      if (res.data.error === false) {
        Swal.fire({
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 2000,
        });
        // Remove the deleted post from the userPosts state
        setUserPosts((prevPosts) =>
          prevPosts.filter((post) => post._id !== postID)
        );
      }
    } catch (error) {
      console.error("Failed to delete post:", error);
      Swal.fire({
        icon: "error",
        title: "Failed to delete post",
        text: error.response
          ? error.response.data.message
          : "Something went wrong",
      });
    }
  };
  if (!user) navigate("/login");

  return (
    <>
      <LoggedInMenu />
      <div className="container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                // style={{objectFit:'contain'}}
                src={user?.avatar || userImage}
                width={200}
                alt="User"
                className="img-fluid rounded-circle mb-3 shadow mb-md-0 bg-body-tertiary object-fit-contain border rounded"
              />
            </div>
            <div className="col-md-8 shadow p-4 p-md-5 bg-body-tertiary rounded">
              <h2>{user && user.name}</h2>
              <p style={{ fontSize: "1rem" }}>
                <GoVerified />
                {"  "}
                {user && user.role}
              </p>
              <div className="d-flex align-items-center mb-3">
                <BiUser className="me-2" /> {/* React Icon for user */}
                <span ref={usernameRef} data-username="username">
                  {user && user.username}
                </span>
              </div>

              <p>
                <MdAlternateEmail /> {/* React Icon for phone */}
                <span>{user && user.email}</span>
              </p>
              <p>
                <BiPhone /> {/* React Icon for phone */}
                <span>{user && user.phone}</span>
              </p>
              <p>
                <BiInfoCircle /> {/* React Icon for info */}
                About:{" "}
                {user && user.about
                  ? user.about
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis justo sed urna volutpat tincidunt."}
              </p>

              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button
                  type="button"
                  className="btn btn-primary me-md-2"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal2"
                >
                  Edit Profile
                </button>
                <button
                  className="btn btn-primary"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal3"
                >
                  {" "}
                  Edit Profile Picture
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="container">
          <div className="d-flex justify-content-center flex-column">
            <h3 className="d-flex justify-content-center">Your Posts</h3>
            <ul className="list-unstyled ">
              {userPosts
                .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                .map((post) => (
                  <li
                    key={post._id}
                    className="mb-3 shadow p-3 bg-body-tertiary rounded"
                  >
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h6 className="card-title">{post && post.title}</h6>
                        <div className="dropdown">
                          <button
                            className="btn btn-secondary dropdown-toggle"
                            type="button"
                            id="dropdownMenuButton"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                          >
                            <CiMenuKebab />
                          </button>
                          <ul
                            className="dropdown-menu"
                            aria-labelledby="dropdownMenuButton"
                          >
                            <li>
                              <button
                                className="dropdown-item"
                                style={{
                                  backgroundColor: "red",
                                  color: "white",
                                }}
                                onClick={() => {
                                  deletePost(post._id, user._id);
                                }}
                              >
                                Delete
                              </button>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#">
                                Edit
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <p
                        className="card-text mt-2"
                        style={{ fontSize: "0.8rem" }}
                      >
                        {post && post.description}
                      </p>
                      <span style={{ fontSize: "0.8rem", color: "#6c757d" }}>
                        <small>
                          {new Date(
                            `${post && post.createdAt}`
                          ).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            ordinalDate: true,
                          })}
                        </small>
                      </span>
                      {post && post.image && (
                        <div className="img-container mt-3">
                          <img
                            src={`${baseURL}/post-images/${post && post.image}`}
                            className="img-fluid"
                            alt="Post"
                          />
                        </div>
                      )}

                      <div className="d-flex justify-content-around mt-5">
                        <span className="btn" style={{ color: "red" }}>
                          <CiHeart style={{ fontSize: "20px", color: "red" }} />{" "}
                          Like{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>

      {/* modal */}
      <div
        className="modal fade custom-modal"
        id="exampleModal2"
        tabIndex="-1"
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
                    value={newEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label custom-label"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    className="form-control custom-input"
                    id="exampleFormControlInput1"
                    placeholder="Phone number"
                    value={newPhoneNumber}
                    onChange={(e) => {
                      setPhoneNumber(e.target.value);
                    }}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label custom-label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="exampleFormControlInput1"
                    placeholder="First Name"
                    value={newName}
                    onChange={(e) => {
                      setNewName(e.target.value);
                    }}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label custom-label"
                  >
                    About
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={3}
                    value={about}
                    // defaultValue={user &&  user.about}
                    onChange={(e) => {
                      setAbout(e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer custom-modal-footer">
              <button
                type="button"
                className="btn btn-danger custom-btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn-primary custom-btn-primary"
                onClick={handleEditProfile}
                data-bs-dismiss="modal"
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* profile pic modal */}

      <div
        className="modal fade custom-modal"
        id="exampleModal3"
        tabIndex="-1"
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
                <input
                  className="form-control custom-input"
                  type="file"
                  id="formFile"
                  onChange={(e) => {
                    handleImageChange(e);
                    setAvatar(e.target.files[0]);
                  }}
                />
              </div>
              {imagePreview ? (
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  <img
                    width={150}
                    className="img-fluid rounded-circle mb-3 shadow mb-md-0 bg-body-tertiary rounded custom-image-preview"
                    src={imagePreview}
                    alt="Preview"
                  />
                </div>
              ) : (
                <div className="mb-3 d-flex justify-content-center align-items-center">
                  <img
                    width={150}
                    className="img-fluid rounded-circle mb-3 shadow mb-md-0 bg-body-tertiary rounded custom-image-preview"
                    src={imagePreview || userImage}
                    alt="User"
                  />
                </div>
              )}
              <div className="modal-footer custom-modal-footer">
                <button
                  type="button"
                  className="btn btn-danger custom-btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary custom-btn-primary"
                  onClick={handleEditProfilePicture}
                  data-bs-dismiss="modal"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UserProfile;
