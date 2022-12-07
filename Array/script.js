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
    console.log(a + " <> " + b);
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;


}
let arr = [1, -2, 15, 2, 0, 8];
arr.sort(compareNumeric);
console.log(arr); // 1, 2, 15


console.log([1, -2, 15, 2, 0, 8].sort(function (a, b) {
    console.log(a + " <> " + b);
}));


//!Переведите текст вида border-left-width в borderLeftWidth

function camelize(str) {
    let arr1 = str.split('-');
    arr1[0] = arr1[0][0].toLowerCase(0) + arr1[0].substring(1);
    for (i = 1; i < arr1.length; i++) {
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

    let arrFilterRange = arr.filter(item => item >= a && item <= b);

    return arrFilterRange;

}

let arr3 = [1, 2, 3, 4, 5, 6, 7, 4.5];

console.log(filterRange(arr3, 3, 5));
console.log(arr3);


//!Напишите функцию filterRangeInPlace(arr, a, b) , которая принимает массив arr и удаляет из него все значения кроме тех, которые находятся между a и b . То есть, проверка имеет вид a ≤ arr[i] ≤ b.

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        // удалить, если за пределами интервала
        if (val < a || val > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr4 = [5, 3, 8, 1];
filterRangeInPlace(arr4, 1, 4); // удалены числа вне диапазона 1..4
console.log(arr4); // [3, 1]


//!Сортировать массив в порядке по убыванию

let arr5 = [5, 7, -1, 12, 55, 19, 2];

let sortArr = arr5.sort((a, b) => b - a);

console.log(sortArr);

//!Скопировать и отсортировать массив

function copySorted(arr) {



    let newArr = arr.slice(0, arr.length);
    return newArr.sort((a, b) => a - b);
}

let arr6 = [5, 7, -1, 12, 55, 19, 2];

let sorted = copySorted(arr6);
console.log(sorted);
console.log(arr6);

// Создайте функцию конструктор Calculator , которая создаёт «расширяемые» объекты
// калькулятора.
// Задание состоит из двух частей.
// 1.
// Во-первых, реализуйте метод calculate(str) , который принимает строку типа "1 +
// 2" в формате «ЧИСЛО оператор ЧИСЛО» (разделено пробелами) и возвращает
// результат. Метод должен понимать плюс + и минус - .

function Calculator() {
    let arrMethod = [];
    arrMethod[0] = {
        name: '+',
        func: (a, b) => (a + b)
    }

    arrMethod[1] = {
        name: '-',
        func: (a, b) => (a - b)
    }

    this.calc = function (str) {
        let arr = str.split(" ");

        for (i = 0; i < arrMethod.length; i++) {

            if (arr[1] == arrMethod[i].name) {
                console.log(str);
                console.log(arrMethod[i].func(+arr[0], +arr[2]));
                break
            } // else {
            //     console.log(`сравниваем arr[1] ${arr[1]} и arrMethod[i].name ${arrMethod[i].name}`);
            // }
            console.log(`метод ${arr[1]} не найден`);
        }
    }

    this.addMethod = function (name, func) {
        arrMethod.push({
            name: name,
            func: func
        });
        console.log(`метод с названием ${name} добавлен, его функция ${func}`);
    }

    this.printMethod = function () {
        for (i = 0; i < arrMethod.length; i++) {
            console.log(`метод с номером ${i} имеет названием ${arrMethod[i].name}, его функция ${arrMethod[i].func}`);
        }
    }

}
let calculatorNew = new Calculator();


calculatorNew.addMethod('*', (a, b) => a * b);
calculatorNew.addMethod('/', (a, b) => a / b);
calculatorNew.addMethod('**', (a, b) => a ** b);
calculatorNew.addMethod('%', (a, b) => a % b);
calculatorNew.calc("1 + 2");
calculatorNew.calc("1 - 2");
calculatorNew.calc("4 * 2");
calculatorNew.calc("4 / 2");
calculatorNew.calc("2 ** 3");
calculatorNew.calc("3 % 2");
calculatorNew.printMethod();

//Решение по книжки

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };
    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }
        return this.methods[op](a, b);
    }
    this.addMethod = function (name, func) {
        this.methods[name] = func;
    };
}


// У вас есть массив объектов user , и у каждого из объектов есть name , surname и id .
// Напишите код, который создаст ещё один массив объектов с параметрами id и
// fullName , где fullName – состоит из name и surname .

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [vasya, petya, masha];
// let usersMapped = users.map((user) => user = ({ fullName: user.name + ' ' + user.surname, id: user.id }));/* ... ваш код ... */


// console.log(usersMapped[2].id) // 1
// console.log(usersMapped[1].fullName) // Вася Пупкин
// console.log(usersMapped[0].name) // Вася Пупкин



//! Напишите функцию sortByAge(users) , которая принимает массив объектов со
// свойством age и сортирует их по нему.

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr7 = [vasya, petya, masha];

// function sortByAge(arr) {
//     arr.sort((a, b) => (a.age - b.age))
// }

// sortByAge(arr7);
// // теперь: [vasya, masha, petya]
// console.log(arr7[0].name); // Вася
// console.log(arr7[1].name); // Маша
// console.log(arr7[2].name); // Петя




//!Напишите функцию shuffle(array) , которая перемешивает (переупорядочивает
// случайным образом) элементы массива.
// Многократные прогоны через shuffle могут привести к разным последовательностям
// элементов.

let arr8 = [1, 2, 3];

function shuffle(arr) {
    arr.sort((a, b) => (a - b - randomInteger(1, 3)));
    console.log(arr);
}

function randomInteger(min, max) {
    let randomNum = Math.random();
    randomNum = ((max + 0.5) - (min - 0.5)) * randomNum + (min - 0.5);
    return Math.round(randomNum);
}


shuffle(arr8);
// arr = [3, 2, 1]
shuffle(arr8);
// arr = [2, 1, 3]
shuffle(arr8);
// arr = [3, 1, 2]
// ...

//Решение по книжке
// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
//         // поменять элементы местами
//         // мы используем для этого синтаксис "деструктурирующее присваивание"
//         // подробнее о нём - в следующих главах
//         // то же самое можно записать как:
//         // let t = array[i]; array[i] = array[j]; array[j] = t
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }


// Напишите функцию getAverageAge(users) , которая принимает массив объектов со
// свойством age и возвращает средний возраст.
// Формула вычисления среднего арифметического значения: (age1 + age2 + ... +
// ageN) / N .

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };
let arr9 = [vasya, petya, masha];
console.log(getAverageAge(arr9)); // (25 + 30 + 29) / 3 = 28

function getAverageAge(arr) {
    return arr.reduce((sum, item) => sum + item.age, 0) / arr.length

}


//! Напишите функцию unique(arr) , которая возвращает массив, содержащий только
// уникальные элементы arr .

function unique(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr.includes(arr[i], i + 1)) {
            console.log(`sovpadenie naideno`);
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}


let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"];

// console.log(strings.includes("кришна", 1));

console.log(unique(strings)); // кришна, харе, :-O


//! Проба итерируемых объектов
let range = {
    from: 1,
    to: 5
};

let arr10 = Array.from(range);
console.log(arr10);

let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};
let arr11 = Array.from(arrayLike); // (*)
console.log(arr11);


//! Создайте функцию unique(arr) , которая вернёт массив уникальных, не повторяющихся
// значений массива arr .

function unique(arr) {
    let set = new Set(arr);
    let arr2 = [];
    for (let value of set) {
        arr2.push(value);
    }
    return arr2;
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];
console.log(unique(values)); // Hare,Krishna,:-O

let str1 = 'teachers';
let str2 = 'hectares';

str1 = str1.toLowerCase();
str2 = str2.toLowerCase();

let arr1 = str1.split('');
let arr2 = str2.split('');


arr1.sort();
arr2.sort();

str1 = arr1.join('');
str2 = arr2.join('');


console.log(str1 == str2);
console.log(str2);
console.log(str1);


// !Напишите функцию aclean(arr) , которая возвращает массив слов, очищенный от
// анаграмм.
// Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

let arr0 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {

    for (i = 0; i < arr.length; i++) {

        let tempStr1 = sortAndLow(arr[i]);

        for (j = i + 1; j < arr.length; j++) {

            let tempStr2 = sortAndLow(arr[j]);

            console.log(`сравниваем ${arr[i]} с ${arr[j]}`);
            console.log(`${tempStr1} и ${tempStr2}`);

            if (tempStr1 == tempStr2) {
                console.log(`${tempStr1} = ${tempStr2}`);

                console.log(`из массива убираем  ${arr[i]}`);
                arr.splice(i, 1);
                i = i - 1;
                break;// i--;
            };
        }
    }

    return arr0;
}

function sortAndLow(str) {
    let tempStr1 = str;
    tempStr1 = tempStr1.toLowerCase();
    let tempArr1 = tempStr1.split('');
    tempArr1.sort();
    tempStr1 = tempArr1.join('');
    return tempStr1;
}

console.log(aclean(arr0)); // "nap,teachers,ear" or "PAN,cheaters,era"

//Решение по книжке

let arr01 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let map = new Map();
    for (let word of arr) {
        // разбиваем слово на буквы, сортируем и объединяем снова в строку
        let sorted = word.toLowerCase().split("").sort().join(""); // (*)
        map.set(sorted, word);
    }
    return Array.from(map.values());
}
console.log(aclean(arr01));



