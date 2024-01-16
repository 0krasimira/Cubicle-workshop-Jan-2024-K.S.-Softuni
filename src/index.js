const express = require("express")

const handlebars = require("express-handlebars")

const expressConfigurator = require("./config/expressConfiguator")
const handlebarsConfigurator = require("./config/handlebarsConfigurator")
const homeController = require("./controllers/homeController")

const app = express()
const PORT = 5000

expressConfigurator(app)
handlebarsConfigurator(app)


// Routes
app.use(homeController)

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}...`)})

