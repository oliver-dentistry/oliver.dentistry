const router = require('express').Router()

router
    .get('/contact', (req, res) => {
        res.render('contact', {titulo: 'Contact', path : '/contact'})
    })

module.exports = router