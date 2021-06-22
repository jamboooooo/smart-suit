const { Router } = require('express')
const User = require('../models/User')
const router = Router()

router.get('/user/:name/:pass', async(req, res) => {
    try {
        const user = await User.findOne({ name: req.params.name, password: req.params.pass })
        res.json(user)
    } catch (e) {
        console.log(e.message);
    }
})

router.post('/user', async(req, res) => {
    try {
        const user = await new User({
            name: req.body.name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        })
        user.save()
        res.json('success added user')
    } catch (e) {
        console.log(e.message);
    }
})

module.exports = router