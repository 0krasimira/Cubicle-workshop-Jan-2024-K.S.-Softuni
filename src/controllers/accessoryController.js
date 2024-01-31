const router = require("express").Router()

router.get('/create', (req, res) => {
    res.render('accessories/createAccessory')
})

module.exports = router