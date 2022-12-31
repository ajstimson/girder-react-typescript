class Vehicle {
    constructor(public color: string) {}
    public drive(): void {
        console.log("chugga chugga")
    }
    public honk(): void {
        console.log("beep")
    }
}

class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color)
    }
    public drive(): void {
        console.log("vroom")
    }
    private brake(): void {
        console.log("screech!")
    }
    protected crash(): void {
        console.log("crash!")
    }
    startDrivingProcess(): void {
        this.drive()
        this.honk()
        this.brake()
        this.crash()
    }
}

const vehicle = new Vehicle("Orange")
console.log(vehicle.color)
vehicle.drive()
vehicle.honk()

const car = new Car(4, "Yellow")
car.startDrivingProcess()
