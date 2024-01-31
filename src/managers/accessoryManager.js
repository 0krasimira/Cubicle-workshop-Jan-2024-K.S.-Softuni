const Accesory = require("../models/Accessory")

exports.createAccessory = (accessoryData) => Accesory.create(accessoryData)

exports.getOneAccessory = (accessoryId) => Accesory.findByIdAndUpdate(accessoryId)
 
exports.getAll = () => Accesory.find()
