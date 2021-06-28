const con = require('../database/index');

module.exports = class Posts {
    constructor() { }

    static async getPosts() {
        const query = "SELECT id, title, body, posts_image, user_id as userId FROM posts WHERE is_active = 1 ORDER BY created_on DESC";
        const result = { status: false, data: null };
        try {
            const [response] = await con.execute(query);
            result.status = response.length ? true : false; result.data = response;
        } catch (error) {
            console.log(error);
            result.status = false; result.data = error;
        } finally {
            return result;
        }
    }

    static async getPostById(user_id) {
        const query = "SELECT id, title, body, posts_image, user_id as userId FROM posts WHERE is_active = 1 AND user_id = ? ORDER BY last_modified_on DESC";
        const result = { status: false, data: null };
        try {
            const [response] = await con.execute(query, [user_id]);
            result.status = response.length ? true : false; result.data = response;
        } catch (error) {
            console.log(error);
            result.status = false; result.data = error;
        } finally {
            return result;
        }
    }

    static async getComments(post_id) {
        const query = "SELECT c.c_id as _id, c.post_id as _pid, c.comment, c.commented_on, u.u_email as email  FROM comments c INNER JOIN posts p ON p.id = c.post_id INNER JOIN users u ON u.u_id = c.user_id AND c.is_active = 1 AND p.is_active = 1 AND c.approved_status_id = 1 WHERE c.post-id = ?ORDER BY c.last_modified_on DESC";
        const result = { status: false, data: null };
        try {
            const [response] = await con.execute(query, [post_id]);
            result.status = response.length ? true : false; result.data = response;
        } catch (error) {
            console.log(error);
            result.status = false; result.data = error;
        } finally {
            return result;
        }
    }
}