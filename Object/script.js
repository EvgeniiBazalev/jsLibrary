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
    this.read = function() {
        this.firstNum = +prompt('Введите первое число', 'Первое число');
        this.secondNum = +prompt('Введите второе число', 'Второе число');
    },

    this.sum = function() {
        return (this.firstNum + this.secondNum);
         
    }

    this.mul = function() {
        return (this.firstNum * this.secondNum);
    }
}

let calk = new Calculator();
// calk.read();
// alert(calk.sum());
// alert(calk.mul());


//! Функция конструктор аккумулятор

function Accumulator (startingValue) {
    this.value = startingValue;

    this.read = function() {
        this.value += +prompt('Please, enter a number','Default number'); 
    }

}

let accumulator = new Accumulator(55);
// accumulator.read();
// accumulator.read();
// accumulator.read();
// alert(accumulator.value);