import $ from 'jquery';

class Car {
    constructor(options) {
        this.model = options.model;
        this.marka = options.marka;
    }

    honk() {
        return console.log('honki honk');
    }
}

export default Car;