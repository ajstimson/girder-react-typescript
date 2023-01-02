import { faker } from "@faker-js/faker"
import { Mappabable } from "./Map"

export class Company implements Mappabable {
    name: string
    catchPhrase: string
    location: {
        lat: number
        lng: number
    }
    constructor() {
        this.name = faker.company.name()
        this.catchPhrase = faker.company.catchPhrase()
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude()),
        }
    }
    markerContent(): string {
        return `<div>
        <h1>Company: ${this.name}</h1>
        <h3>Catchphrase: ${this.catchPhrase}</h3>
        </div>
        `
    }
}
