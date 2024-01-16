const express = require("express")

const handlebars = require("express-handlebars")

const expressConfigurator = require("./config/expressConfiguator")
const handlebarsConfigurator = require("./config/handlebarsConfigurator")

const app = express()
const PORT = 5000

expressConfigurator(app)
handlebarsConfigurator(app)


// Routes

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(PORT, () => {console.log(`Server is running on port ${PORT}...`)})

