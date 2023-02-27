'use strict';

// function randomaizer(a) {
//     let next = a;
//     return function gonext() {
//         next = next * 16807 % 2147483647;
//         console.log(next);
//     }
// }

// let random1 = randomaizer(Math.random());

function* pseudogenerator(seed) {
    while (i < 10); {
        i++;
        yield seed * 16807 % 2147483647;
    }
}

let gener = pseudogenerator(1);
gener();