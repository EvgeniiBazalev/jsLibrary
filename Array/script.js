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

//!Короткий и длинный вариант по книжке для задачи выше.

function getMaxSubSum(arr) {
    let maxSum = 0; // если элементов не будет - возвращаем 0
    for (let i = 0; i < arr.length; i++) {
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart);
            console.log(`i равна ${i}, j равна ${j}, sumFixedStart равна ${sumFixedStart} maxSum равна ${maxSum}`);
        }
    }
    return maxSum;
}
console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100


function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;
    for (let item of arr) { // для каждого элемента массива
        partialSum += item; // добавляем значение элемента к partialSum
        maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
        if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
    return maxSum;
}

console.log(getMaxSubSum([5, 4, -10, 5, 5, 5])); // 100


//!Сортировка данных в массиве


function compareNumeric(a, b) {
    console.log( a + " <> " + b );
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;

    
    }
    let arr = [1, -2, 15, 2, 0, 8 ];
    arr.sort(compareNumeric);
    console.log(arr); // 1, 2, 15


    console.log([1, -2, 15, 2, 0, 8].sort(function(a, b) {
        console.log( a + " <> " + b );
        }));


//!Переведите текст вида border-left-width в borderLeftWidth

function camelize(str) {
    let arr1 = str.split('-');
    arr1[0] = arr1[0][0].toLowerCase(0) + arr1[0].substring(1);
    for(i = 1; i < arr1.length; i++) {
        arr1[i] = arr1[i][0].toUpperCase(0) + arr1[i].substring(1); 
    }
    return arr1.join('');
}

console.log(camelize('Hellow-my-dear-friend'));


//!Функция filterRange(arr, a, b) , которая принимает массив arr , ищет в нём элементы между a и b и отдаёт массив этих элементов.

// function filterRange(arr, a, b) {
//     let firstIndex = arr.indexOf(a, 0);
//     let secondIndex = arr.indexOf(b, 0);
//     if (~firstIndex && ~secondIndex) {
//         return arr.slice(firstIndex, secondIndex);

//     } else {
//         return 'Ошибка: первое или второе значение не найдено';
//     }


// }

// let arr2 = [1, 2, 3, 4, 5, 6, 7];

// console.log(filterRange(arr2, 1, 5));
// console.log(arr2);


function filterRange(arr, a, b) {
    
    let arrFilterRange = arr.filter( item => item >= a && item <= b );

    return arrFilterRange;

}

let arr3 = [1, 2, 3, 4, 5, 6, 7, 4.5];

console.log(filterRange(arr3, 3, 5));
console.log(arr3);


//!Напишите функцию filterRangeInPlace(arr, a, b) , которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b . То есть, проверка имеет вид a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
    arr.map( item => {
        if (item > b || item < a) {arr.splice([arr.indexOf[item]],1)}
    }  );
}

let arr4 = [1, 2, 3, 4, 5, 6, 7, 4.5];
console.log(filterRangeInPlace(arr4, 3, 5));
console.log(arr4);


