const express = require("express")

const handlebars = require("express-handlebars")

const expressConfigurator = require("./config/expressConfiguator")
const handlebarsConfigurator = require("./config/handlebarsConfigurator")

const homeController = require("./controllers/homeController")
const cubeController = require("./controllers/cubeController")

const app = express()
const PORT = 5000

expressConfigurator(app)
handlebarsConfigurator(app)


// Routes
app.use(homeController)
app.use('/cubes', cubeController)
app.get('*', (req, res) => {
    res.redirect('404')
})


app.listen(PORT, () => {console.log(`Server is running on port ${PORT}...`)})

