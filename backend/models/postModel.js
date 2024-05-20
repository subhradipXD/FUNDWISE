const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: String,
  email: String,
  likes: { type: Number, required: false },
  interest: { type: Number, required: false },
  description: String,
  image: String,
  postBy: String,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

postSchema.path("likes").default(0);
postSchema.path("interest").default(0);

module.exports = mongoose.model("Post", postSchema);
