let apples: number = 5

let speed: string = "fast"

let hasName: boolean = true

let nothing: null = null

//Built in objects
let now: Date = new Date()

let then: string[] = ["red", "green", "blue"]

let nums: number[] = [2, 2, 3]

let bools: boolean[] = [true, false, true]

class Car {}
let car: Car = new Car()

//Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20,
}

// Function
const logNumber: (i: number) => void = (i) => {
    console.log(i)
}

//? When to use annotations

//* 1) when a function returns the any type

const json = '{ "x": 10, "y": 20 }'
//! could return string, number, object, TS doesn't know so assigns any
const coordinates = JSON.parse(json)
console.log(coordinates)

const json2 = '{ "x": 10, "y": 20 }'
//! could return string, number, object, TS doesn't know so assigns any
const coordinatesTyped: { x: number; y: number } = JSON.parse(json2)
console.log(coordinatesTyped)

//* 2) when we declare a variable on one line and initialize it later
let words = ["on", "green", "red"]
let foundWord: boolean

for (let i = 0; i < words.length; i++) {
    const word = words[i]
    if (word === "green") {
        foundWord = true
    }
}

//* 3) When we have a variable whose type cannot be inferred
let array = [-1, 9, -12]
let numberAboveZero: boolean | number = false

for (let i = 0; i < array.length; i++) {
    if (array[i] > 0) {
        numberAboveZero = array[i]
    }
}
