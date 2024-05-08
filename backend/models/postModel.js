const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"user"},
    title:String,
    description:String,
    image:String,
    postBy:String,
});
module.exports= mongoose.model("Post", postSchema);