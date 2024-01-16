const handlebars = require("express-handlebars")

function handlebarsConfigurator(app){
    // handlebars configuration

app.engine("hbs", handlebars.engine({
    extname: "hbs",
}))
app.set("view engine", "hbs")
app.set("views", "src/views")

}

module.exports = handlebarsConfigurator