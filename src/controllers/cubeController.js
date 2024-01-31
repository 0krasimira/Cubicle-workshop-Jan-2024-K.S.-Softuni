const router = require("express").Router()

const cubeManager = require("../managers/cubeManager")

router.get('/create', (req, res) => {
    res.render("create")
})


module.exports = router