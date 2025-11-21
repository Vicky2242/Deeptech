const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/', async(req, res) => {
    const user = new User(req.body);
    await user.save();
    res.send(user);
})

router.get('/', async(req, res) => {
    const users = await User.find();
    res.send(users);
});

router.put('/:id', async(req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, {new:true});
    res.send(user);
});

router.delete('/:id', async(req, res)=> {
    await User.findByIdAndDelete(req.params.id);
    res.send({message: 'User deleted'});
});

module.exports = router;