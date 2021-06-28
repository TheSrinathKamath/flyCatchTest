const express = require('express');
const router = express.Router();
const posts = require('../controllers/posts');

router.get('/posts', posts.getAllPosts)
router.get('/posts/:id', posts.getPostById)

module.exports = router;