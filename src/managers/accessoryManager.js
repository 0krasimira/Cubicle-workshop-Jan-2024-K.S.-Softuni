const Accesory = require("../models/Accessory")

exports.createAccessory = async (name, description, imageUrl) => {
    const accessory = new Accesory(name, description, imageUrl)
 
     await accessory.save()
     return accessory
 }

