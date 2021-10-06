const toys = [
  {
        id: 1, 
        name: "Beary", 
        maker: "TY", 
        price: 12.99
    },
   {
        id: 2, 
        name: "Barbie", 
        maker: "Mattel", 
        price: 15.99
    },
   {
        id: 3, 
        name: "Chucky", 
        maker: "Playmates Toys", 
        price: 25.99
    }
]

// for (const toy of toys) {
//     console.log(toy.maker)
// }

const americanGirlDoll = {
    id: 4, 
    name: "Samantha",
    maker: "American Girl",
    price: 200.00
}

const babyAliveDoll = {
    id: 5, 
    name: "Allie", 
    maker: "Mattel", 
    price: 14.99
}

toys.push(americanGirlDoll)
toys.push(babyAliveDoll)

// console.log(toys)

// for (const toy of toys) {
//     toy.price = toy.price + 0.5
//     console.log(`${toy.name} by ${toy.maker} is ${toy.price}.`)
// }

const addToyToToys = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[4]
    const maxId = currentLastToy.id
    const idForNewToy = maxId + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
}

const bopIt = {
    name: "Bop It Game",
    maker: "Hasbro",
    price: 9.99,
}

addToyToToys(bopIt)

for (const toy of toys) {
    console.log(`${toy.name} by ${toy.maker} is ${toy.price} dollars.`)
}