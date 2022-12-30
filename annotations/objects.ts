const profile = {
    firstName: "Alex",
    age: 20,
    coords: {
        lat: 0,
        lng: 15,
    },
    setAge: function (age: number): void {
        this.age = age
    },
}

const { age, firstName }: { age: number; firstName: string } = profile
const {
    coords: { lat, lng },
}: { coords: { lat: number; lng: number } } = profile
