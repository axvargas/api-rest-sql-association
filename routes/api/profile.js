const express = require('express');
const router = express.Router();
const db = require('../../models');

router.get('/:id', async (req, res) => {
    const profilesByUserId = await db.Profile.findAll({ 
        where: { UserId: req.params.id },
        include: [db.User] 
    });
    res.json(profilesByUserId);
})
//Al estar attacheado a user, este requiere de un UserId en el body
router.post('/', async (req, res) => {
    const newProfile = await db.Profile.create(req.body);
    res.json(newProfile);
})

module.exports = router;