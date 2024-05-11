const postModel = require("../models/postModel");

const feed = async (req, res) => {
  try {
    const { userId, title, description, postBy } = req.body; //destructure
    const image = req.file !== undefined ? req.file.filename : "";
    console.log(image);
    const newPost = new postModel({
      userId,
      title,
      description,
      image,
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

module.exports = {
  feed,
  showposts,
};