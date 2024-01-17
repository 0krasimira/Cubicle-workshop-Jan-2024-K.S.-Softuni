const uniqid = require("uniqid")


const cubes = [
    {
        id: "58sdjbwtlrges7x9",
        name: "Triangle", 
        description: "triangular cube", 
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkdAnR3y0rPMsNeYqN90zvAW3ZNXQCsA0C6A&usqp=CAU",
        difficultyLevel: 80
    },

    {
        id: "58sdjvbtlrges432",
        name: "Oval", 
        description: "Oval cube", 
        imageUrl: "https://www.jaapsch.net/puzzles/images/cubeoval.jpg",
        difficultyLevel: 40
    }
]


exports.getAll = (search, from, to) => {

    let result = cubes.slice()

    if(search){
        result = result.filter(cube => cube.name.toLowerCase().includes(search.toLowerCase()))
    }

    if(from){
        result = result.filter(cube => cube.difficultyLevel >= Number(from))
    }

    if(to){
        result = result.filter(cube => cube.difficultyLevel <= Number(to))
    }

    return result
}


exports.create = (cubeData) => {
   const newCube = {
        id: uniqid(),
        ...cubeData
    }

    cubes.push(newCube);



    return newCube
}

exports.getOne = (cubeId) => cubes.find(x => x.id === cubeId)
