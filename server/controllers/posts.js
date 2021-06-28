const Posts = require('../models/posts');

module.exports.getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.getPosts();

        if (!posts.status) return res.status(200).json({ "status": false, "result": [] });
        res.status(200).json(posts.data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ "status": false, "result": "Bad request!" });
    }
}
module.exports.getPostById = async (req, res) => {
    const { id } = req.params;
    if (!parseInt(id)) return res.status(400).json({ "status": false, "result": "Bad request!" });
    try {
        const posts = await Posts.getPostById(id);

        if (!posts.status) return res.status(200).json({ "status": false, "result": [] });
        res.status(200).json(posts.data);
    } catch (error) {
        console.log(error);
        res.status(400).json({ "status": false, "result": "Bad request!" });
    }
}
