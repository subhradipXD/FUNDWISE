import Footer from "../../inc/Footer";
import LoggedInMenu from "../../inc/LoggedInMenu";
import user from "../../assets/navImg/user.png";

import React, { useRef } from "react";
import ClipboardJS from "clipboard";

function UserProfile() {
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

  React.useEffect(() => {
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

  const posts = [
    { id: 1, content: "This is post 1" },
    { id: 2, content: "This is post 2" },
    { id: 3, content: "This is post 3" },
  ];

  return (
    <>
      <LoggedInMenu />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4">
            <img
              src={user}
              width={200}
              alt="User Image"
              className="img-fluid rounded-circle mb-3 shadow mb-5 bg-body-tertiary rounded"
            />
          </div>
          <div className="col-md-8 shadow p-5 bg-body-tertiary rounded">
            <h2>User Name</h2>
            <p>
              @
              <span ref={usernameRef} data-username="username">
                username
              </span>{" "}
              <button
                className="btn btn-sm btn-primary copy-username"
                onClick={handleCopyUsername}
              >
                Copy Username
              </button>
            </p>
            <p>
              Phone Number: <span>123-456-7890</span>
            </p>
            <p>
              About: Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Sed quis justo sed urna volutpat tincidunt.
            </p>
            <p>Followers: 1000</p>
            <div className="row">
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit Profile
                </button>
              </div>
              <div className="col-md-6">
                <button className="btn btn-primary">Follow</button>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <h3>Your Posts</h3>
            {posts.map((post) => (
              <div
                key={post.id}
                className="card mb-3 shadow mb-3 bg-body-tertiary rounded"
              >
                <div className="card-body">
                  <p className="card-text">{post.content}</p>
                  <div
                    className="btn-group"
                    role="group"
                    aria-label="Post Actions"
                  >
                    <button type="button" className="btn btn-sm btn-danger">
                      Delete
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-primary mx-1"
                    >
                      Edit
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

      {/* modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Edit Profile
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="formFile" className="form-label">
                  Profile Pic
                </label>
                <input className="form-control" type="file" id="formFile" />
              </div>

              <div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Phone number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="exampleFormControlInput1"
                    className="form-label"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
