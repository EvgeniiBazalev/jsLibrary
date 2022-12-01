'use strict';

// //! Работа с элементами массива

// let style = ['jaz', 'bluz'];
// console.log(style);

// style.push('rock-n-roll');
// console.log(style);

// style[Math.round((style.length - 1) / 2)] = 'classic';
// console.log(style);

// console.log(style.shift());
// console.log(style);

// console.log(style.unshift('Рэп', 'Рэгги'));
// console.log(style);

// style.push('rock');
// console.log(style);

// style[Math.round((style.length - 1) / 2)] = 'country';
// console.log(style);


// //!Вывод массива функцией изнутри

// let arr = ["a", "b"];

// arr.push(function () {
//     console.log(this);
// })
// arr[2](); // "a","b",function


//!Ввод массива чисел и подсчет их суммы

// function sumInput() {
//     let arr = [];

//     let i = prompt('Введите любое число', '')
//     let j = 0;
//     let sum = 0;

//     while( (i != null) && (!isNaN(i)) ){
//         arr[j] = +i;
//         j++;
//         i = prompt('Введите любое число', '')
//     }
//     for (let k = 0; k < arr.length; k++) {
//         sum += arr[k];
//     }
//     alert(sum);
// }

// sumInput()

//Подмассив наибольшей суммы

// let arrTest = [1, -2, 3, 4, -9, 6]; //сумма 3


function sumElementOfArr(arr, min, max) {
    let sum = 0;
    for (let i = min; i < max; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function getMaxSubSum(arr) {
    let result;
    let summa = 0;


    for (let j = 0; j < arr.length; j++) {

        for (let k = j; k <= arr.length; k++) {

            result = sumElementOfArr(arr, j, k);
            // console.log(`При j = ${j}, k = ${k} summa равна ${result}`);

            if (summa < result) {
                summa = result;
                // console.log(`При summa = ${summa} result равен ${result}`);
            }

        }

    }

    return summa;

}

// console.log(`Итого: ${summa}`);

console.log(getMaxSubSum([100, -2, -1, -1, -9, -11, 100]));


