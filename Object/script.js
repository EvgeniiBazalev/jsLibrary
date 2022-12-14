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

function topSalary(salaries) {
    let topUser = { user: 0, zp: 0 };
    for (let [user, userZp] of Object.entries(salaries)) {
        if (userZp > topUser.zp) {
            topUser.user = user;
            topUser.zp = userZp;
        }
    }
    return (`${topUser.user} c zp = ${topUser.zp}`);
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
function getWeekDay(date) {
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

function getDateAgo(date, days) {

    let dateCopy = new Date(date);

    dateCopy.setDate(dateCopy.getDate() - days);
    return (`${dateCopy.getDate()}-${dateCopy.getMonth()}-${dateCopy.getFullYear()}`);
}

console.log(getDateAgo(date4, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date4, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date4, 365)); // 2, (2 Jan 2014)

//!Напишите функцию getLastDayOfMonth(year, month) , возвращающую последнее
// число месяца. Иногда это 30, 31 или даже февральские 28/29.

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1);
    date.setDate(date.getDate() - 1);
    return date.getDate();
}

console.log(getLastDayOfMonth(2012, 1));

// Напишите функцию getSecondsToday() , возвращающую количество секунд с начала
// сегодняшнего дня.
// Например, если сейчас 10:00 , и не было перехода на зимнее/летнее время, то:
// Функция должна работать в любой день, т.е. в ней не должно быть конкретного значения
// сегодняшней даты.

function getSecondsToday() {

    let date = new Date();
    let quantitySeconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return quantitySeconds;

}

console.log(getSecondsToday());


// Создайте функцию getSecondsToTomorrow() , возвращающую количество секунд до
// завтрашней даты.
// Например, если сейчас 23:00 , то:
// P.S. Функция должна работать в любой день, т.е. в ней не должно быть конкретного
// значения сегодняшней даты.

function getSecondsToTomorrow() {

    let date = new Date();
    let quantitySeconds = 24 * 3600 - date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
    return quantitySeconds;

}

console.log(getSecondsToTomorrow());

// Напишите функцию formatDate(date) , форматирующую date по следующему
// принципу:
// Если спустя date прошло менее 1 секунды, вывести "прямо сейчас" .
// В противном случае, если с date прошло меньше 1 минуты, вывести "n сек.
// назад" .
// В противном случае, если меньше часа, вывести "m мин. назад" .
// В противном случае, полная дата в формате "DD.MM.YY HH:mm" . А именно:
// "день.месяц.год часы:минуты" , всё в виде двух цифр, т.е. 31.12.16 10:00 .


function formatDate(date) {
    let range = {
        min1: 0,
        max1: 1000,
        min2: 1000,
        max2: 60000,
        min3: 60000,
        max3: 3600 * 1000,
    }

    let nowDate = new Date();
    let formatDate = 'Не определено';

    if (range.min1 <= (nowDate - date) & (nowDate - date) < range.max1) {
        formatDate = 'Прямо сейчас';
    } else if (range.min2 <= (nowDate - date) & (nowDate - date) < range.max2) {
        formatDate = `${(nowDate - date) / 1000} секунд назад`;
    } else if (range.min3 <= (nowDate - date) & (nowDate - date) < range.max3) {
        formatDate = `${(nowDate - date) / (1000 * 60)} минут назад`;
    } else {
        formatDate = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    }

    console.log(nowDate);
    console.log(date);
    console.log(nowDate - date);

    return formatDate;
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"
// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));
console.log(formatDate(new Date(+(new Date) + 864000 * 1000)));


//!JSON
// Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

let user1 = {
    "name": "Василий Иванович",
    "age": 35
};

let jsonIn = JSON.stringify(user1);

// console.log(jsonIn);

let jsonOut = JSON.parse(jsonIn);
console.log(jsonOut);
console.log(user1);
console.log(jsonOut == user1);//false

// В простых случаях циклических ссылок мы можем исключить свойство, из-за которого они
// возникают, из сериализации по его имени.
// Но иногда мы не можем использовать имя, так как могут быть и другие, нужные, свойства с
// этим именем во вложенных объектах. Поэтому можно проверять свойство по значению.
// Напишите функцию replacer для JSON-преобразования, которая удалит свойства,
// ссылающиеся на meetup:

let room = {
    number: 23
};
let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

meetup.self = meetup;
room.occupiedBy = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {

    console.log(`key =(${key}) value =(${value})`);

    if (key != '' & value == meetup) {//если не прописать key != '' то при вызове объекта обертки будет возвращен undefined и будет прекращен дальнейший перебор
        console.log(`сработало условие на undefined`);
        return undefined;
    } else {
        console.log(`сработало условие на value`);
        return value;
    }

    /* ваш код */
}));
/* в результате должно быть:
{
"title":"Совещание",
"occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
"place":{"number":23}
}
*/


//!Напишите функцию sumTo(n) , которая вычисляет сумму чисел 1 + 2 + ... + n .
// sumTo(1) = 1
// sumTo(2) = 2 + 1 = 3
// sumTo(3) = 3 + 2 + 1 = 6
// sumTo(4) = 4 + 3 + 2 + 1 = 10
// ...
// sumTo(100) = 100 + 99 + ... + 2 + 1 = 5050

// Сделайте три варианта решения:
// 1. С использованием цикла.
// 2. Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1 .
// 3. С использованием формулы арифметической прогрессии

function sumToCycle(n) {
    let sum = 0;
    for (i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log(sumToCycle(10000));



let sum = 0;
function sumToRecursion(n) {

    if (n == 1) {
        sum += n;
        // console.log(`n = ${n}`);
        // console.log(`sum = ${sum}`);

    } else {
        // console.log(`Запускаем рекурсивную функцию с ${n}-1`);
        sumToRecursion(n - 1);
        // console.log(`до суммирования n = ${n}`);
        // console.log(`до суммирования sum = ${sum}`);
        // console.log(`Производим суммирование с ${n}-1`);
        sum = sum + n;
        // console.log(`n = ${n}`);
        // console.log(`sum = ${sum}`);
    }
    return sum;
}

console.log(sumToRecursion(10000));



function sumToArithmeticProgression(n, d) {
    let sum = n * (2 + d * (n - 1)) / 2;
    return sum;
}

console.log(sumToArithmeticProgression(10000, 1));

// Факториал  натурального числа – это число, умноженное на "себя минус один" ,
// затем на "себя минус два" , и так далее до 1 . Факториал n обозначается как n!
// Определение факториала можно записать как:
// n! = n * (n - 1) * (n - 2) * ...*1
// 1! = 1
// 2! = 2 * 1 = 2
// 3! = 3 * 2 * 1 = 6
// 4! = 4 * 3 * 2 * 1 = 24
// 5! = 5 * 4 * 3 * 2 * 1 = 120
// Задача – написать функцию factorial(n) , которая возвращает n! , используя
// рекурсию.

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {

    } return n * factorial(n - 1);
}

console.log(factorial(4));


// Последовательность чисел Фибоначчи  определяется формулой Fn = Fn-1 + Fn-2 . То
// есть, следующее число получается как сумма двух предыдущих.
// Первые два числа равны 1 , затем 2(1+1) , затем 3(1+2) , 5(2+3) и так далее: 1, 1,
// 2, 3, 5, 8, 13, 21... .
// Числа Фибоначчи тесно связаны с золотым сечением  и множеством природных явлений
// вокруг нас.
// Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
// Пример работы:

function fib(n) {

    if (n == 2) {
        return 1;
    } else if (n == 3) {
        return 1 + fib(n - 1);
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}
console.log(fib(2)); // 1
console.log(fib(9)); // 34

console.log(fib(3)); // 2
console.log(fib(7)); // 13
console.log(fib(77)); // 5527939700884757


//Допустим, у нас есть односвязный список (как описано в главе Рекурсия и стек):

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

// Напишите функцию printList(list) , которая выводит элементы списка по одному.
// Сделайте два варианта решения: используя цикл и через рекурсию.

function printList(list) {
    if (list.next != null) {
        console.log(list.value);
        printList(list.next);
    } else {
        console.log(list.value);
    }
}

printList(list);

function printList2(list) {
       
    while (list.next != null) {
        console.log(list.value);
        list = list.next;
        if (list.next == null){
            console.log(list.value);
        }
    }
}

printList2(list);

// console.log(list);

// Выведите односвязный список из предыдущего задания Вывод односвязного списка в
// обратном порядке.
// Сделайте два решения: с использованием цикла и через рекурсию.


let list2 = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

let tempArr = [];

function printListReverse(list) {
    if (list) {
        // console.log(list.value);
        tempArr.push(list.value);
        printListReverse(list.next);
    } else {   
    tempArr.reverse().forEach(item => console.log(item));
    }
}

printListReverse(list2);

let tempArr2 = [];
function printListReverse2(list) {
    
    while (list) {
        tempArr2.push(list.value);
        list = list.next;
    }   
    tempArr2.reverse().forEach(item => console.log(item));
    
}

printListReverse2(list2);

