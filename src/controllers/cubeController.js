const router = require("express").Router()

const cubeManager = require("../managers/cubeManager")

router.get('/create', (req, res) => {
    res.render("create")
})

router.post('/create', async (req, res) => {
    const { name, description, imageUrl, difficultyLevel } = req.body
    await cubeManager.create({
      name, 
      description, 
      imageUrl,
      difficultyLevel : Number(difficultyLevel)
    })
      
      res.redirect('/')
  })

module.exports = router