const router = require('express').Router()

router
    .get('/about', (req, res) => {
        res.render('about', {titulo: 'About', path : '/about'})
    })

module.exports = router