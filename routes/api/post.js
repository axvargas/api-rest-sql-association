const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get('/:id', async (req, res) => {
    const postsByUserId = await db.Post.findAll({ 
        where: { UserId: req.params.id },
        include: [db.User] 
    });
    res.json(postsByUserId);
})

//Al estar attacheado a user, este requiere de un UserId en el body
router.post('/', async (req, res) => {
    const newPost = await db.Post.create(req.body);
    res.json(newPost);
})

module.exports = router;
