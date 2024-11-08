{
    class Car {
        make: string;
        model: string;
        year: number;

        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }

        getCarAge() {
            const currentYear = new Date().getFullYear();
            // console.log(currentYear);
            const age = currentYear - this.year;
            return age;
        }

    }
    const myCar = new Car('Honda', "Civic", 2018);
    console.log(myCar.getCarAge());
}