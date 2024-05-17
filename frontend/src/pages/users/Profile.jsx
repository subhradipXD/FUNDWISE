import { BiUser } from "react-icons/bi";
import { BiPhone } from "react-icons/bi";
import { BiInfoCircle } from "react-icons/bi";
import { FaPeopleRobbery } from "react-icons/fa6";
import { GoVerified } from "react-icons/go";
import Footer from "../../inc/Footer";
import LoggedInMenu from "../../inc/LoggedInMenu";
import userImage from "../../assets/navImg/user.png";

import { CiHeart } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { MdHandshake } from "react-icons/md";
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
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const { user,setUser, userPosts } = useContext(UserContext);
  const [cookies, setCookies] = useCookies(["token"]);

  if (!cookies.token) {
    navigate("/");
  }

  const usernameRef = useRef(null);

  useEffect(() => {
    // getPosts();

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

  // const getPosts = async () => {
  //   try {
  //     const res = await axios.get(`${baseURL}/post/`);
  //     const sortedPosts = res.data.sort(
  //       (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
  //     );
  //     setPosts(sortedPosts.reverse());
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

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
      formData.append("username", newUserName);
      formData.append("about", about);
      if (avatar !== null) {
        formData.append("avatar", avatar);
      }

      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${cookies.token}`,
        },
      };

      const res = await axios.post(
        `${baseURL}/users/edit/${user._id}`,
        formData,
        config
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

  return (
    <>
      <LoggedInMenu />
      <div className="container mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img
                src={userImage}
                width={200}
                alt="User"
                className="img-fluid rounded-circle mb-3 shadow mb-md-0 bg-body-tertiary rounded"
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
                Email ID: <span>{user && user.email}</span>
              </p>
              <p>
                <BiPhone /> {/* React Icon for phone */}
                Phone Number: <span>{user && user.phone}</span>
              </p>
              <p>
                <BiInfoCircle /> {/* React Icon for info */}
                About:{" "}
                {user && user.about
                  ? user.about
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed quis justo sed urna volutpat tincidunt."}
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
                  data-bs-target="#exampleModal2"
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
              {userPosts.
              sort(
                (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
              )
              .
              map((post) => (
                <li
                  key={post && post._id}
                  className="mb-3 shadow p-3 bg-body-tertiary rounded"
                >
                  <div className="card-body">
                    <h6 className="card-title">{post && post.title}</h6>
                    <p
                      className="card-text mt-2"
                      style={{ fontSize: "0.8rem" }}
                    >
                      {post && post.description}
                    </p>
                    <span style={{ fontSize: "0.8rem", color: "#6c757d" }}>
                      <small>
                        {new Date(`${post && post.createdAt}`).toLocaleDateString(
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
                    {post && post.image && (
                      <div className="img-container mt-3">
                        <img
                          src={`${baseURL}/post-images/${post && post.image}`}
                          className="img-fluid"
                          alt="Post"
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
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label custom-label">
                  Profile Pic
                </label>
                <input
                  className="form-control custom-input"
                  type="file"
                  id="formFile"
                  onChange={(e) => {
                    handleImageChange(e);
                    setAvatar(e.target.value);
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
                    src={userImage}
                    alt="User"
                  />
                </div>
              )}

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
                  />
                </div>

                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label custom-label"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control custom-input"
                    id="exampleFormControlInput1"
                    placeholder="Username"
                    value={newUserName}
                    onChange={(e) => {
                      setUserName(e.target.value);
                    }}
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
      <Footer />
    </>
  );
}

export default UserProfile;
