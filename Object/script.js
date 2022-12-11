'use strict';

//!Получить значение свойства через полученное имя свойства

let user = {

    name: 'John',
    age: '35',
    isAdmin: true,
    wife: 'Liza',

};
// let key = prompt('Что вы хотите о нем узнать?', 'name');
// alert( user[key] ); // выведет 'John'

let test = 'name';
console.log(user[test]);


//Вывод всех пар ключ - объект
console.log(`Объект user содержит следующие свойства:`);
for (let key in user) {

    console.log(`Свойство ${key} содержит значение: ${user[key]}`);

}




//! Проверка объекта на пустоту
let obj = {

    // name: 'petia'

};

function isEmpty(obj) {
    for (let key in obj) {
        if (key in obj) {
            return true;
        }
    }
    return false;
}

console.log(isEmpty(obj));
obj.name = 'Petia';
console.log(isEmpty(obj));
delete obj.name;
console.log(isEmpty(obj));



//!Суммирование всех свойств объекта

let salaries = {
    John: 100,
    Anna: 200,
    Liska: 300
};


let summa = 0;

for (let key in salaries) {
    summa = summa + salaries[key];
}

console.log(summa);




//!Удвоение численных свойств объекта 

let salt = {
    John: 100,
    Anna: 200,
    Liska: 300,

    place: 'Stars'
};

console.log((typeof (salt.place == Number)));



function multiplyNumeric(anyObj) {
    for (let key in anyObj) {
        if (typeof (anyObj[key]) == Number) {
            anyObj[key] *= 2;
        }
    }
}

function printObj(anyObj) {

    console.log(`Объект содержит следующие свойства:`);
    for (let key in anyObj) {

        console.log(`Свойство ${key} содержит значение: ${anyObj[key]}`);

    }
}

multiplyNumeric(salt);
printObj(salt);


//!Проверка работы метода с "лишними скобками". Скобки не мешают
let userTwo = {
    name: "Джон",
    go: function () { console.log(this.name) },
    run: function () { console.log('this.name') }
};

(userTwo.go)();

//А вот так точка в userTwo.go срабатывает раньше и теряется this

// (userTwo.name == "Джон" ? userTwo.go : userTwo.run)() // ошибка!

//!калькулятор

let calculator = {

    read: function () {
        calculator.operandOne = +prompt('Введите первое число', 'Первое число');
        calculator.operandTwo = +prompt('Введите второе число', 'Второе число');
    },

    sum: function () {
        calculator.sumOperand = calculator.operandOne + calculator.operandTwo;
        alert(`Сумма равна ${calculator.sumOperand}`);
    },

    mul: function () {
        calculator.mulOperand = calculator.operandOne * calculator.operandTwo;
        alert(`Произведение равно ${calculator.mulOperand}`);
    }


}

// calculator.read();
// calculator.sum();
// calculator.mul();



//!Лестница

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep() {
        console.log(this.step);
        // return this;
    }
}

ladder.up().up().down().showStep();


//!Две разных функции - создают один объект 

let C = {};

function A() {
    return C;
}

function B() {
    return C;
}

let a = new A;
let b = new B;

console.log(a == b); // true

//! Калькулятор - функция конструктор

function Calculator() {
    this.read = function () {
        this.firstNum = +prompt('Введите первое число', 'Первое число');
        this.secondNum = +prompt('Введите второе число', 'Второе число');
    },

        this.sum = function () {
            return (this.firstNum + this.secondNum);

        }

    this.mul = function () {
        return (this.firstNum * this.secondNum);
    }
}

let calk = new Calculator();
// calk.read();
// alert(calk.sum());
// alert(calk.mul());


//! Функция конструктор аккумулятор

function Accumulator(startingValue) {
    this.value = startingValue;

    this.read = function () {
        this.value += +prompt('Please, enter a number', 'Default number');
    }

}

let accumulator = new Accumulator(55);
// accumulator.read();
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);


//!Деструктуризация
// Напишите деструктурирующее присваивание, которое:
// свойство name присвоит в переменную name .
// свойство years присвоит в переменную age .
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)

let users = {
    name1: "John",
    years: 30
};

let { name1, years: age, isAdmin = false } = users;

console.log(name1);
console.log(age);
console.log(isAdmin);

//!У нас есть объект salaries с зарплатами:
// Создайте функцию topSalary(salaries) , которая возвращает имя самого
// высокооплачиваемого сотрудника.
// Если объект salaries пустой, то нужно вернуть null .
// Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.
// P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/
// значение.

let salaries1 = {
    "John": 100,
    "Pete": 300,
    "Mary": 250,
    "Ujin": 300
};

function topSalary(salaries){
    let topUser = {user: 0, zp: 0};
    for (let [user, userZp] of Object.entries(salaries)){
        if (userZp > topUser.zp){
            topUser.user = user;
            topUser.zp = userZp;
        }
    }
    return(`${topUser.user} c zp = ${topUser.zp}`);
}

console.log(topSalary(salaries1));


//!Дата
// Создайте объект Date для даты: 20 февраля 2012 года, 3 часа 12 минут. Временная зона
// – местная.

let date1 = new Date(Date.parse('2012-01-20T09:12'));

let d = new Date(2012, 1, 20, 9, 12);
console.log(date1);
console.log(d);

//!Напишите функцию getWeekDay(date) , показывающую день недели в коротком
// формате: «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

let date2 = new Date();
date2.setDate(date2.getDate() + 0);
// console.log(date2.getDay());
function getWeekDay(date){
    let week = {
        0: 'ВС',
        1: 'ПН',
        2: 'ВТ',
        3: 'СР',
        4: 'ЧТ',
        5: 'ПТ',
        6: 'СБ',
    };
    // console.log(week[0]);


    return week[date.getDay()];

}

console.log(getWeekDay(date2));

//!В Европейских странах неделя начинается с понедельника (день номер 1), затем идёт
// вторник (номер 2) и так до воскресенья (номер 7). Напишите функцию
// getLocalDay(date) , которая возвращает «европейский» день недели для даты date .

let date3 = new Date();
date3.setDate(date3.getDate() + 3);


function getLocalDay(date) {

    let day = date.getDay();
    if (day == 0) {
        return 7;
    }

    return day;
}

console.log(getLocalDay(date3));

//!Какой день месяца был много дней назад?

// Создайте функцию getDateAgo(date, days) , возвращающую число, которое было
// days дней назад от даты date .
// К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1) вернёт
// девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.
// Функция должна надёжно работать при значении days=365 и больших значениях:

let date4 = new Date(2022, 0, 2);

function getDateAgo(date, days){

    let dateCopy = new Date(date);

    dateCopy.setDate(dateCopy.getDate() - days);
    return ( `${dateCopy.getDate()}-${dateCopy.getMonth()}-${dateCopy.getFullYear()}` );
}

console.log( getDateAgo(date4, 1) ); // 1, (1 Jan 2015)
console.log( getDateAgo(date4, 2) ); // 31, (31 Dec 2014)
console.log( getDateAgo(date4, 365) ); // 2, (2 Jan 2014)

//!Напишите функцию getLastDayOfMonth(year, month) , возвращающую последнее
// число месяца. Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month){
    let date = new Date(year, month + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));