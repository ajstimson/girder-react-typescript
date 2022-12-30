// TS: carMakers: string[]
const carMakers = ["Ford", "Nissan", "Subaru"]

// TS: dates: Date[]
const dates = [new Date(), new Date()]

// TS: carsByMake: string[][]
const carsByMake = [["Taurus"], ["Maxima"], ["Impreza"]]

const car1 = carMakers[0]

//! Uncomment to see error: carMakers.push(4)
//annotating allows for correct auto-suggestions when applying string methods
carMakers.map((x: string): string => x.toLowerCase())

//Flexible types
const importantDates: (Date | string)[] = [new Date()]
importantDates.push("2022-12-12")
importantDates.push(new Date())
//! Error: importantDates.push(10)
