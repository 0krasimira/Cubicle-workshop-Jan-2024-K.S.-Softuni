const mongoose = require("mongoose")
const Schema = mongoose.Schema
const Cube = require("../models/Cube")

const AccessorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
              return /^https?:/.test(v);
            },
    }},
    description : {
        type: String,
        required: true,
        max: 150
    },
    cubes: {
        type: mongoose.Types.ObjectId,
        ref: 'Cube'
    }
})

const AccessoriesModel = mongoose.model("Accessory", AccessorySchema)

module.exports = AccessoriesModel