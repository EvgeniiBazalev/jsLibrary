'use strict';

//!Сумма двух чисел с округлением для сложения дробей

// let a = +(+prompt('Please, enter first number', '5')).toFixed(3);

// let b = +(+prompt('Please, enter second number', '7')).toFixed(3);

// alert(+(a+b).toFixed(3));


//!Запрашиваем ввод числа пока пользователь не введет число или нажмет отмену или оставит пустоту


//Это решение в лоб
// let readNumber = function () {

//     let number = prompt('please, enter real Number', '');

//     // alert(number);

//     if ( (number == null)||(number == '') ) {
//         alert('You canceled or enter the empty');
//     } else {
//         if (isNaN(+number)) {
//             readNumber();
//         } else {
//             if (typeof +number == 'number') {
//                 alert('You enter a nubmer');
//             } else {
//                 alert('You enter another');
//             }
//         }
//     }


// };

// readNumber();

//Это красивое решение

// function readNumber2() {
//     let num;
//     do {
//     num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
//     if (num === null || num === '') return null;
//     return +num;
//     }
//     alert(`Число: ${readNumber2()}`);//здесь происходит вызов функции внутри Alert

//!Функция генератор случайных чисел от и до (не включительно)

// function random(min, max) {

//     let randomNumber = Math.random();
//     return (max - min) * randomNumber + min;
// }

// console.log(random(3, 5));

//!Функция-генератор случайных целых чисел от и до (включительно)

function randomInteger(min, max) {
    let randomNum = Math.random();
    randomNum = ((max + 0.5) - (min - 0.5)) * randomNum + (min - 0.5);
    return Math.round(randomNum);
}

console.log( randomInteger(3, 7) );

let i = 0;
let result;
let a = 0;
let b = 0;
let c = 0;
let d = 0;

function Check() {
    while (i < 1000000) {
        i++;

        result = randomInteger(1, 4);
        switch (result) {
            case 1: a++;
                break;
            case 2: b++;
                break;
            case 3: c++;
                break;
            case 4: d++;
                break;
        }

    }
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
}

Check();




