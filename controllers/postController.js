const Post = require("../models/createPostModel");

exports.createPost = async (req, res) => {
  try {
    const { title, body } = req.body;
    const post = new Post({ title, body });
    const savedPost = await post.save();
    res.json({ post: savedPost });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Error while creating a post" });
  }
};
