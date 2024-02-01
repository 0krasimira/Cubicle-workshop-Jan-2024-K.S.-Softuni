const Accesory = require("../models/Accessory")
const Cube = require("../models/Cube")

exports.createAccessory = (accessoryData) => Accesory.create(accessoryData)

// exports.getOneAccessory = (accessoryId) => Accesory.findByIdAndUpdate(accessoryId)
 
exports.getAll = () => Accesory.find()


