const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get('/', async (req, res) => {
    const users = await db.User.findAll({
        include: [db.Profile, db.Post]
    });
    res.json(users);
});

router.get('/:id', async (req, res) => {
    const user = await db.User.findAll({
        where: { id: req.params.id },
        include: [db.Profile, db.Post]
    });
    res.json(user);
});

router.post('/', async (req, res) => {
    const newUser = await db.User.create(req.body);
    res.json(newUser);
});

module.exports = router;