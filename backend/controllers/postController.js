const postModel = require("../models/postModel");

const feed = async (req, res) => {
  try {
    const { userId, title, description, postBy } = req.body; 
    console.log(req.body.postBy);
    const file = req.file !== undefined ? req.file.filename : "";
    const newPost = new postModel({
      userId,
      title,
      description,
      image: file,
      postBy,
    });
    await newPost.save();
    res.json({
      message: "New Post Added successfully!",
      error: false,
      response: newPost,
    });
  } catch (e) {
    res.status(400).json({
      message: e,
      error: true,
    });
  }
};

const showposts = async (req, res) => {
  try {
    const Posts = await postModel.find({});

    res.status(200).json(Posts);
  } catch (e) {
    res.sendStatus(400).send(e);
  }
};


const deletePost = async (req, res) => {
  const { postID } = req.params;

  try {
    // Find the post by ID and delete it
    const post = await postModel.findByIdAndDelete(postID);

    if (!post) {
      return res.status(404).json({
        error: true,
        message: 'Post not found',
      });
    }

    return res.status(200).json({
      error: false,
      message: 'Post deleted successfully',
    });
  } catch (error) {
    console.error('Failed to delete post:', error);
    return res.status(500).json({
      error: true,
      message: 'An error occurred while deleting the post',
    });
  }
};

module.exports = {
  feed,
  showposts,
  deletePost
};
