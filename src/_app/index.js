//http://www.2ality.com/2014/09/es6-modules-final.html

import { Car, randomFunc as foo } from './module1/module_1';
import module2 from './module2/module_2';
import React from 'react';
// Import non-js files like this, with the extension and an exclamation point:
import reactDemo from './module1/demo.jsx!'


var audi = new Car({
    marka: 'Audi',
    model: 'Q7'
});

reactDemo();

audi.drive(125);
//audi.honk();
audi.honk2();
foo();
module2();