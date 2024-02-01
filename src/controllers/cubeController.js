const router = require("express").Router()

const cubeManager = require("../managers/cubeManager")
const accessoryManager = require("../managers/accessoryManager")

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
    if(!cube){
        return res.redirect('/404')
    }
    res.render("details", {...cube})
    }catch(error) {
        console.log(error)
    }
  }) 


  router.get('/:cubeId/attach', async (req, res) => {
    const cube = await cubeManager.getOne(req.params.cubeId).lean()
    const accessories = await accessoryManager.getAll().lean()

    const hasAccessories = accessories.length > 0
    res.render('accessories/attachAccessory', {...cube, accessories, hasAccessories}) 
})

router.post('/:cubeId/attach', async (req, res) => {
   const {accessory} = req.body
   const cubeId = req.params.cubeId
   await cubeManager.attachAccessory(cubeId, accessory)
   res.redirect(`/cubes/${cubeId}/details`)
})

module.exports = router