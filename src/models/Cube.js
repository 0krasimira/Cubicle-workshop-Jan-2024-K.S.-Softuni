const mongoose = require("mongoose")
const Schema = mongoose.Schema
const AccessoriesModel = require("../models/Accessory")

const cubeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true
    },
    difficultyLevel: {
        type: Number, 
        required: true
    },
    accessories: {
        type: mongoose.Types.ObjectId,
        ref: 'Accesory'
    }
})


/*• Id - number
• Name - string
• Description - string
• Image URL - string
• Difficulty Level - number
*/

const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube;