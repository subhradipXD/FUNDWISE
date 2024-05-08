import LoggedInMenu from "../../inc/LoggedInMenu";
import imageUrl from "../../assets/chat.png";
function Message() {
  

  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "400px",
  };

  const posts = [
    { id: 1, content: "This is Message 1" },
    { id: 2, content: "This is Message 2" },
    { id: 3, content: "This is Message 3" },
  ];
  return (
    <>
      <LoggedInMenu />
      <div className="container mt-2">
        <div className="row mt-4">
          <div className="col-md-8">
            <h3>Your Messages</h3>
            {posts.map((post) => (
              <div
                key={post.id}
                className="card mb-3 shadow bg-body-tertiary rounded"
              >
                <div className="card-body">
                  <div className="row">
                    <p className="card-text col-md-10">{post.content}</p>
                    <form className="col-md-2">
                      <div
                        className="btn-group"
                        role="group"
                        aria-label="Post Actions"
                      >
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
              </div>
            ))}
          </div>

          <div className="col-md-4">
            <h3>Chat Window</h3>
            <div className="card text-center">
              <div className="card-header">Name</div>
              <div className="card-body">
                <div style={divStyle}></div>
              </div>
              <div className="card-footer">
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Type your message..."
                    aria-describedby="basic-addon2"
                  />
                  <span id="basic-addon2">
                    <button className="btn btn-primary">Send</button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
