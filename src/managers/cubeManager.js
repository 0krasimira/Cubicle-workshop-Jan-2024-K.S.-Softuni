const uniqid = require("uniqid")
const Cube = require("../models/Cube")


// const cubes = [
//     {
//         id: "58sdjbwtlrges7x9",
//         name: "Triangle", 
//         description: "triangular cube", 
//         imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdAnR3y0rPMsNeYqN90zvAW3ZNXQCsA0C6A&usqp=CAU",
//         difficultyLevel: 80
//     },

//     {
//         id: "58sdjvbtlrges432",
//         name: "Oval", 
//         description: "Oval cube", 
//         imageUrl: "https://www.jaapsch.net/puzzles/images/cubeoval.jpg",
//         difficultyLevel: 40
//     }
// ]


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

exports.create = async (cubeData) => {
   const cube = new Cube(cubeData)

    await cube.save()
    return cube
}

exports.getOne = (cubeId) => Cube.findById(cubeId).populate("accessories")
