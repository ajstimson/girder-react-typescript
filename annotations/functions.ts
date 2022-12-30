const add = (a: number, b: number): number => {
    return a + b
}
//type inference for return type - BUT! if we do this we won't get an error if we fail to return something
const subtract = (a: number, b: number) => {
    return a - b
}

function divide(a: number, b: number): number {
    return a / b
}

const multiply = function (a: number, b: number): number {
    return a * b
}
// Void return type
const logger = (message: string): void => {
    console.log(message)
}

// we will never "finish" this function, so we give it type never
const error = (message: string): never => {
    throw new Error(message)
}

//* Destructuring
const forecast = {
    date: new Date(),
    weather: "sunny",
}
// Destructure
const logWeather = ({
    date,
    weather,
}: {
    date: Date
    weather: string
}): void => {
    console.log(date)
    console.log(weather)
}

logWeather(forecast)
