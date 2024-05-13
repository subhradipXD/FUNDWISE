import LoggedInMenu from "../../inc/LoggedInMenu";

function Notification() {
  const posts = [
    { id: 1, content: "This is Notification 1" },
    { id: 2, content: "This is Notification 2" },
    { id: 3, content: "This is Notification 3" },
  ];
  return (
    <>
      <LoggedInMenu />
      <div className="container mt-2">
      <div className="row mt-4">
          <div className="col-md-12">
            <h3>Your Notifications</h3>
            {posts.map((post) => (
              <div
                key={post.id}
                className="card mb-3 shadow mb-3 bg-body-tertiary rounded"
              >
                <div className="card-body">
                  <p className="card-text">{post.content}</p>
                  <form>
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
                      Mark as read
                    </button>
                  </div>
                  </form>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Notification;
