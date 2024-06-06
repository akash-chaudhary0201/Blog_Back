const express = require("express");
const router = express.Router();

// Import Controller
const { createComment } = require("../controllers/commentController");
const { createPost } = require("../controllers/postController");

router.post("/posts/create", createPost);
router.post("/comments/create", createComment);

// export
module.exports = router;
