const router = require('express').Router()

router
    .get('/home', (req, res) => {
        res.render('home', {titulo: 'Home', path : '/home'})
    })

module.exports = router