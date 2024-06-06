const Comment = require("../models/commentModel");
const Post = require("../models/createPostModel");

exports.createComment = async (req, res) => {
  try {
    const { post, user, body } = req.body;

    // create comment object :-
    const comment = new Comment({
      post,
      user,
      body,
    });

    // saving the comment in database :-
    const savedComments = await comment.save();

    // finding post by id and addind this comment to the comment array of post :-
    const updatedPost = await Post.findByIdAndUpdate(
      post,
      {
        $push: { comments: savedComments._id },
      },
      { new: true }
    )
      .populate("comments")
      .exec();
    res.json({
      post: updatedPost,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Error while creating a comment",
    });
  }
};
