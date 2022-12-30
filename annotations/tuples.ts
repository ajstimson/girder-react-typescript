//Tuple: an array-like structure where each element represents a property of a record
//has a fixed order of elements
//useful CSV parsing
//hard to read bc you have to memorize or research what each representation means

const drink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
}

//Type Alias!
type Drink = [string, boolean, number]

//TS type fixes the order of elements to declared type
const pepsi: Drink = ["brown", true, 40]
const tea: Drink = ["brown", false, 0]
