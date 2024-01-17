const express = require("express")

const handlebars = require("express-handlebars")

const expressConfigurator = require("./config/expressConfiguator")
const handlebarsConfigurator = require("./config/handlebarsConfigurator")
const routes = require("./routes")

const app = express()
const PORT = 5000

expressConfigurator(app)
handlebarsConfigurator(app)


app.use(routes)


app.listen(PORT, () => {console.log(`Server is running on port ${PORT}...`)})

