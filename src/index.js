const express = require("express")
const mongoose = require("mongoose")


const handlebars = require("express-handlebars")

const expressConfigurator = require("./config/expressConfiguator")
const handlebarsConfigurator = require("./config/handlebarsConfigurator")
const routes = require("./routes")

const app = express()
const PORT = 5000

expressConfigurator(app)
handlebarsConfigurator(app)


app.use(routes)

mongoose.connect('mongodb://127.0.0.1:27017/cubicle-Jan2024' ).then(
    console.log("DB connected successfully"),
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}...`))
).catch(err=>{
    console.log("CONNECTION IS BAD")
    console.log(err)
    });


