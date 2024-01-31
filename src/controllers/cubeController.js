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



  router.get('/:cubeId/details', async (req, res) => {
   try{
    const cubeId = req.params.cubeId
    let cube = await cubeManager.getOne(cubeId).lean()
    res.render("details", {...cube})
    }catch(error) {
        console.log(error)
    }
  }) 



module.exports = router