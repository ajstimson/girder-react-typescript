interface Vehicle {
    name: string
    year: number
    broken: boolean
    summary(): string
}

const oldCivic = {
    name: "Civic",
    year: 2000,
    broken: true,
    summary(): string {
        return `Name: ${this.name}`
    },
}

const printVehicle = (vehicle: Vehicle): void => {
    console.log(
        `Name: ${vehicle.name}, Year: ${vehicle.year}, Broken: ${vehicle.broken}`
    )
}

printVehicle(oldCivic)

interface Report {
    summary(): string
}

const softDrink = {
    color: "brown",
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `This ${this.color} drink has ${this.sugar}g of sugar`
    },
}

const printSummary = (item: Report): void => {
    console.log(item.summary())
}
printSummary(oldCivic)
printSummary(softDrink)
