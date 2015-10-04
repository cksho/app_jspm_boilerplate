import $ from 'jquery';

class Car {
    constructor(options) {
        this.model = options.model;
        this.marka = options.marka;
    }

    drive(speed) {
        return console.log(`im driving with the speed of ${speed}`);
    }

    honk() {
        let a = 1;

        if (a === 1) {
            let b = 2;
        }

        for (let c = 0; c < 3; c++) {
         // …
        }

        console.log(a);
        console.log(b);
        console.log(c);
    }

    honk2() {
        var a = 1;

        if (a === 1) {
            var b = 2;
        }

        for (var c = 0; c < 3; c++) {
         // …
        }

        console.log(a);
        console.log(b);
        console.log(c);
    }
}


export default Car;