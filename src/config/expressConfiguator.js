const express = require("express")
const path = require("path")

function expressConfigurator(app) {
    // Express config
    app.use(express.static(path.resolve(__dirname, "../public")))
    app.use(express.urlencoded({ extended: false }))
}

module.exports = expressConfigurator