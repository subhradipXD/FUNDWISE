const express = require('express');
const { feed, showposts } = require('../controllers/postController.js');
const router = express.Router();
router.post('/feed',feed)
router.get('/',showposts)
module.exports = router