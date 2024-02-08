
const Cube = require("../models/Cube")

exports.getAll = () => Cube.find()


// exports.search = (search, from, to) => {

//     let query = {}

//     if(search){
//         query.name = name.toLowerCase().includes(search.toLowerCase())
//     }

//     if(from){
//         query.difficultyLevel = from.filter(cube => cube.difficultyLevel >= Number(from))
//     }

//     if(to){
//         query.difficultyLevel = to.filter(cube => cube.difficultyLevel <= Number(to))
//     }

//     return Cube.find(query)
// }

exports.create = (cubeData) => Cube.create(cubeData)

exports.delete = (cubeId) => Cube.findByIdAndDelete(cubeId)

exports.update = (cubeId, cubeData) => Cube.findByIdAndUpdate(cubeId, cubeData)

exports.getOne = (cubeId) => Cube.findById(cubeId).populate("accessories")

exports.attachAccessory = (cubeId, accessory) => {
    return Cube.findByIdAndUpdate(cubeId, {$push: {accessories: accessory}})

    /*an alternative way to attach the accessory to the cube:
    const cube = await Cube.findById(cubeId)
    cube.accessories.push(accessory)
    return cube.save()*/
}
