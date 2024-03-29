'use strict';

//!Получить значение свойства через полученное имя свойства
{
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
    {
        function sumToCycle(n) {
            let sum = 0;
            for (i = 1; i <= n; i++) {
                sum += i;
            }
            return sum;
        }

        console.log(sumToCycle(10000));
    }



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
            if (list.next == null) {
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

}

//Проверим вызов функций и работу лексического окружения

{
    'use strict';
    function f() {
        let value = 0;
        return function foo() {
            console.log(value);
            value++;
        };
    }
    // три функции в массиве, каждая из них ссылается на лексическое окружение
    // из соответствующего вызова f()


    f()();
    f()();
    f()();
}

{
    let phrase = "Hello";
    if (true) {
        let user = "John";
        function sayHi() {
            console.log(`${phrase}, ${user}`);
        }
    }
    sayHi();
}

// Напишите функцию sum , которая работает таким образом: sum(a)(b) = a+b .
// Да, именно таким образом, используя двойные круглые скобки (не опечатка).

{
    function sum(arg1) {
        let sum = 0;
        return function (arg2) {
            sum = sum + arg1 + arg2
            console.log(sum);
        }
    }

    sum(5)(-1);
}

// У нас есть встроенный метод arr.filter(f) для массивов. Он фильтрует все элементы
// с помощью функции f . Если она возвращает true , то элемент добавится в
// возвращаемый массив.
// Сделайте набор «готовых к употреблению» фильтров:
// inBetween(a, b) – между a и b (включительно).
// inArray([...]) – находится в данном массиве.
// Они должны использоваться таким образом:
// arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6
// (включительно).
// arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с
// одним из элементов массива
{
    /* .. ваш код для inBetween и inArray */
    function inBetween(a, b) {
        return function (item) {
            if (item <= b && item >= a) {
                return true;
            } else {
                return false;
            }
        }
    }

    function inArray(arr) {
        return function (item) {
            for (i = 0; i < arr.length; i++) {
                if (item == arr[i]) {
                    return true;
                }
            }

            return false;
        }
    }


    let arr = [1, 2, 3, 4, 5, 6, 7];
    console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
    console.log(arr.filter(inArray([1, 2, 10]))); // 1,2
}

// У нас есть массив объектов, который нужно отсортировать:
// Обычный способ был бы таким:
{
    'use strict';
    let users = [
        { name: "John", age: 20, surname: "Johnson" },
        { name: "Pete", age: 18, surname: "Peterson" },
        { name: "Ann", age: 19, surname: "Hathaway" }
    ];

    // по имени (Ann, John, Pete)
    // users.sort((a, b) => a.name > b.name ? 1 : -1);
    // по возрасту (Pete, Ann, John)
    // users.sort((a, b) => a.age > b.age ? 1 : -1);

    function byField(property) {
        return (a, b) => a[property] > b[property] ? 1 : -1;
    }


    users.sort(byField('name'));
    console.log(users);
    users.sort(byField('age'));
    console.log(users);
}

// Следующий код создаёт массив из стрелков ( shooters ).
// Каждая функция предназначена выводить их порядковые номера. Но что-то пошло не
// так…
{
    'use strict';
    function makeArmy() {
        let shooters = [];
        let i = 0;
        while (i < 10) {
            let j = i;
            let shooter = function () { // функция shooter
                console.log(j); // должна выводить порядковый номер
            };

            shooters.push(shooter);


            i++;
        }
        return shooters;
    }
    let army = makeArmy();
    army[0](); // у 0-го стрелка будет номер 10
    army[5](); // и у 5-го стрелка тоже будет номер 10
    console.log(army);
    // ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...
}

// Измените код makeCounter() так, чтобы счётчик мог увеличивать и устанавливать
// значение:
// counter() должен возвращать следующее значение (как и раньше).
// counter.set(value) должен устанавливать счётчику значение value .
// counter.decrease() должен уменьшать значение счётчика на 1.

// {

//     'use strict';

//     function makeCounter() {
//         let count = 0;

//         return function () {
//             count++;
//             return count;
//         }

//             function set(st) {
//                 count = st;
//             }
//         // ... ваш код ...
//     }

//     let counter = makeCounter();

//     console.log(counter()); // 0
//     console.log(counter()); // 1

//     counter.set(10); // установить новое значение счётчика

//     console.log(counter()); // 10

//     counter.decrease(); // уменьшить значение счётчика на 1

//     console.log(counter()); // 10 (вместо 11)

}



// Напишите функцию sum , которая бы работала следующим образом:


{

    'use strict';

    function sum(a) {
        let currentSum = a;
        function f(b) {
            currentSum += b;
            return f;
        }
        f.toString = function () {
            return currentSum;
        };
        return f;
    }

    console.log('Сумма равна ' + sum(1)(2));
    console.log(sum(1)(2)(3));
    console.log(sum(5)(-1)(2));
    console.log(sum(6)(-1)(-2)(-3));
    console.log(sum(0)(1)(2)(3)(4)(5));

}

{
    'use strict';

    let timerId = setTimeout(() => console.log("ничего не происходит"), 10000);
    console.log(timerId); // идентификатор таймера
    clearTimeout(timerId);
    console.log(timerId); // тот же идентификатор (не принимает значение null после отмены)

}

{
    'use strict';

    let start = Date.now();
    let times = [];
    setTimeout(function run() {
        times.push(Date.now() - start); // запоминаем задержку от предыдущего вызова
        if (start + 100 < Date.now()) console.log(times); // показываем задержку через 100 мс
        else setTimeout(run); // если нужно ещё запланировать
    });
    // пример вывода:
    // 1,1,1,1,9,15,20,24,30,35,40,45,50,55,59,64,70,75,80,85,90,95,100

}


// Напишите функцию printNumbers(from, to) , которая выводит число каждую секунду,
// начиная от from и заканчивая to .
// Сделайте два варианта решения.
// 1. Используя setInterval .
// 2. Используя рекурсивный setTimeout .

{
    'use strict';


    function printNumbers(from, to) {
        setTimeout(function run() {
            if (from < to) {

                setTimeout(run, 1000);
                console.log(from++);
            }
        }
            , 1000);
    }

    printNumbers(6, 10);

}



// Создайте декоратор spy(func) , который должен возвращать обёртку, которая сохраняет
// все вызовы функции в своём свойстве calls .
// Каждый вызов должен сохраняться как массив аргументов.


{
    'use strict';

    function work(a, b) {
        console.log(a + b); // произвольная функция или метод
    }

    function spy(func) {


        function wrapper(...args) {
            // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
            wrapper.calls.push(args);
            return func.call(this, ...args);
        }
        wrapper.calls = [];
        // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
        wrapper.calls.push(args);
        return func.call(this, ...args);
    }
    wrapper.calls = [];
    return wrapper;
}
    }

newResult = spy(work);
newResult(1, 2); // 3
newResult(4, 5); // 9
console.log(newResult.calls);


for (let args of newResult.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
}


{
    'use strict';

    function work(a, b) {
        work.property = 'prop';
        console.log(arguments[0]);
        return 22;
    }

    work(1, 2);
}

{
    'use strict';

    function slow(x) {
        // здесь могут быть ресурсоёмкие вычисления
        console.log(`Called with ${x}`);
        return x;
    }
    function cachingDecorator(func) {
        func.cache = new Map();
        return function (x) {
            if (func.cache.has(x)) { // если кеш содержит такой x,
                return func.cache.get(x); // читаем из него результат
                console.log('сработал кэш');
            }

            let result = func(x); // иначе, вызываем функцию
            func.cache.set(x, result); // и кешируем (запоминаем) результат
            return result;
        };
    }
    slow = cachingDecorator(slow);
    console.log(slow(1)); // slow(1) кешируем
    console.log("Again: " + slow(1)); // возвращаем из кеша
    console.log(slow(2)); // slow(2) кешируем
    console.log("Again: " + slow(2)); // возвращаем из кеша
    console.log(slow.cache);
}


// Создайте декоратор delay(f, ms) , который задерживает каждый вызов f на ms
// миллисекунд. Например:
// Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
// В приведённом выше коде f – функция с одним аргументом, но ваше решение должно
// передавать все аргументы и контекст this .

{
    'use strict';

    function f(x) {
        console.log(x);
    }
    // создаём обёртки
    function delay(func, delay) {

        function startWithDelay(...args) {
            return setTimeout.call(this, func, delay, ...args);
        }
        return startWithDelay;
    }
    let f1000 = delay(f, 1000);
    let f1500 = delay(f, 1500);
    f1000("test"); // показывает "test" после 1000 мс
    f1500("test"); // показывает "test" после 1500 мс  
}


{
    'use strict';
    function outerF() {
        let i = 0;
        function innerF() {
            console.log(i++);
        }
        return innerF;
    }

    let func = outerF();;
    outerF()(); //Так каждая функция достает переменную i из своего лексичечкого окружения
    outerF()(); //Замыкание не работает
    outerF()();

    func(); //Так каждая функция достает переменную i из лексичечкого окружения созданного вокруг func
    func(); //Замыкание работает
    func();
}

// Результатом декоратора debounce(f, ms) должна быть обёртка, которая передаёт
// вызов f не более одного раза в ms миллисекунд. Другими словами, когда мы вызываем
// debounce , это гарантирует, что все остальные вызовы будут игнорироваться в течение
// ms .
{
    'use strict';

    function func(x) {
        console.log(`Сработал вызов ${x}`);
    }
    function cachingDecorator(func) {
        func.cache = new Map();
        return function (x) {
            if (func.cache.has(x)) { // если кеш содержит такой x,
                return func.cache.get(x); // читаем из него результат
                console.log('сработал кэш');
            }

            function debounce(func, ms) {
                console.log('Запустилась debounce');
                let stop = 0;

                function stopZiro() {
                    console.log('Запустилась stopZiro');
                    stop = 0;
                }

                function ignor(x) {
                    console.log(`Игнорирован вызов ${x}`)
                }

                function start(x) {
                    console.log(`Запущен start${x}`);
                    if (stop == 0) {
                        console.log('Запустилась top == 0');
                        stop = 1;
                        setTimeout(stopZiro, ms);
                        return func(x);
                    } else {
                        console.log('Запустилась top == 1');
                        return ignor(x);
                    }
                }
                return start;

            }

            // Имеется объект dictionary , созданный с помощью Object.create(null) для
            // хранения любых пар ключ/значение .
            // Добавьте ему метод dictionary.toString() , который должен возвращать список
            // ключей, разделённых запятой. Ваш toString не должен выводиться при итерации
            // объекта с помощью цикла for..in .
            {
                'use strict';
                let dictionary = Object.create(null, {
                    toString: { // определяем свойство toString
                        value() { // значение -- это функция
                            return Object.keys(this).join();
                        }
                    }
                });
                // ваш код, который добавляет метод dictionary.toString
                // добавляем немного данных

                // Object.defineProperty(dictionary, "toString", {
                //     enumerable: false
                // });

                dictionary.apple = "Apple";
                dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ
                // только apple и __proto__ выведены в цикле
                for (let key in dictionary) {
                    console.log(key); // "apple", затем "__proto__"
                }
                // ваш метод toString в действии
                console.log(dictionary); // "apple,__proto__"

            }

            let f = debounce(func, 1000);
            f(1); // выполняется немедленно
            f(2); // проигнорирован
            setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
            setTimeout(() => f(4), 1100); // выполняется
            setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
        }

        // Тормозящий (throttling) декоратор
        // Создайте «тормозящий» декоратор throttle(f, ms) , который возвращает обёртку,
        // передавая вызов в f не более одного раза в ms миллисекунд. Те вызовы, которые
        // попадают в период «торможения», игнорируются.


        {
            'use strict';

            function f(a) {
                console.log(a)
            }

            function throttle(func, ms) {
                // console.log('Запустилась debounce');
                let stop = 0;
                let y = 0;

                function stopZiro() {
                    // console.log('Запустилась stopZiro');
                    stop = 0;
                    return func(y);
                }

                function ignor(x) {
                    // console.log(`Игнорирован вызов ${x}`)
                }

                function start(x) {
                    // console.log(`Запущен start${x}`);
                    if (stop == 0) {
                        // console.log('Запустилась top == 0');
                        stop = 1;
                        setTimeout(stopZiro, ms);
                        return func(x);
                    } else {
                        // console.log('Запустилась top == 1');
                        y = x;
                        return ignor(x);
                    }
                }
                return start;

            }


            // f1000 передаёт вызовы f максимум раз в 1000 мс
            let f1000 = throttle(f, 1000);
            f1000(1); // показывает 1
            f1000(2); // (ограничение, 1000 мс ещё нет)
            f1000(3); // (ограничение, 1000 мс ещё нет)
            f1000(4); // (ограничение, 1000 мс ещё нет)
            // когда 1000 мс истекли ...
            // ...выводим 4, промежуточное значение 2 было проигнорировано

        }

        {
            'use strict';

            let user = {
                firstName: "Вася",
                sayHi() {
                    console.log(`Привет, ${this.firstName}!`);
                }
            };

            function wrapper(func) {
                user.sayHi();
            }
            let foo = wrapper;
            foo();
            // let testTimeout = setTimeout.call(this, user.sayHi, 1000)
            // testTimeout();
        }

        {

            function f() {
                console.log(this.name);
            }
            f = f.bind({ name: "Вася" });
            f = f.bind({ name: "Петя" });
            f(); // Вася

            console.log({ name: "Вася" }.name);

        }


        {
            'use strict';
            function askPassword(ok, fail) {
                let password = "rocksar";
                if (password == "rockstar") ok();
                else fail();
            }
            let user = {
                name: 'Вася',
                loginOk() {
                    console.log(`${this.name} logged in`);
                },
                loginFail() {
                    console.log(`${this.name} failed to log in`);
                },
            };
            askPassword(() => user.loginOk(), () => user.loginFail());
            askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

        }

        {

            function askPassword(ok, fail) {
                let password = "rockstar";
                if (password == "rocksftar") ok();
                else fail();
            }
            let user = {
                name: 'John',
                login(result) {
                    console.log(this.name + (result ? ' logged in' : ' failed to log in'));

                }
            };
            askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?
        }

        // В коде ниже класс Rabbit наследует Animal .
        // К сожалению, объект класса Rabbit не создаётся. Что не так? Исправьте ошибку.
        class Animal {
            constructor(name) {
                this.name = name;
            }
        }
        class Rabbit extends Animal {
            constructor(name) {
                super(name);
                this.name = name;
                this.created = Date.now();
            }
        }

        let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
        console.log(rabbit.name);



        // Создайте новый класс ExtendedClock , который будет наследоваться от Clock и
        // добавьте параметр precision – количество миллисекунд между «тиками». Установите
        // значение в 1000 (1 секунда) по умолчанию.
        // Сохраните ваш код в файл extended-clock.js
        // Не изменяйте класс clock.js . Расширьте его.
        class Clock {
            constructor({ template }) {
                this.template = template;
            }
            render() {
                let date = new Date();
                let hours = date.getHours();
                if (hours < 10) hours = '0' + hours;
                let mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;
                let secs = date.getSeconds();
                if (secs < 10) secs = '0' + secs;
                let output = this.template
                    .replace('h', hours)
                    .replace('m', mins)
                    .replace('s', secs);
                console.log(output);
            }
            stop() {
                clearInterval(this.timer);
            }
            start() {
                this.render();
                this.timer = setInterval(() => this.render(), 1000);
            }
        }


        class ExtendedClock extends Clock {

            constructor(options) {
                super(options);
                let { precision = 1000 } = options;
                this.precision = precision;
            }

            start() {
                this.render();
                this.timer = setInterval(() => this.render(), this.precision);
            }
        }

        let extclock = new ExtendedClock({ template: 'h:m:s' });

        extclock.start();

        // Создайте класс FormatError , который наследует от встроенного класса SyntaxError .
        // Класс должен поддерживать свойства message , name и stack .

        class FormatError extends SyntaxError {
            constructor(message) {
                super();
                this.message = message;
                this.name = 'FormatError';
            }
        }

        let err = new FormatError("ошибка форматирования");
        console.log(err.message); // ошибка форматирования
        console.log(err.name); // FormatError
        console.log(err.stack); // stack
        console.log(err instanceof FormatError); // true
        console.log(err instanceof SyntaxError); // true (потому что наследует от SyntaxError)


        // Задержка на промисах
        // Встроенная функция setTimeout использует колбэк-функции. Создайте альтернативу,
        // использующую промисы.
        // Функция delay(ms) должна возвращать промис, который перейдёт в состояние
        // «выполнен» через ms миллисекунд, так чтобы мы могли добавить к нему .then :

        function delay(ms) {
            return new Promise(function (resolve, reject) {
                setTimeout(() => resolve('dast is fantastish'), ms);
            });
        }
        delay(3000).then(() => console.log('выполнилось через 3 секунды'));



        //Просто тестирую промисы
        new Promise(function (resolve, reject) {
            let a = 1;
            setTimeout(() => resolve(a), 1000);
        })
            .then(function (a) {
                a = a * 2;
                console.log(a)

                return new Promise(function (resolve, reject) {
                    setTimeout(() => resolve(a), 1000);
                })
            })
            .then(function (a) {
                a = a * 2;
                console.log(a)

                let error = new Error('Whoops!');
                throw error;

                return new Promise(function (resolve, reject) {
                    setTimeout(() => resolve(a), 1000);
                })
            }).catch((error) => console.log(error));


        // Перепишите один из примеров раздела Цепочка промисов, используя async/await
        // вместо .then/catch :

        async function loadJson(url) {
            let response = await fetch(url);
            if (response.status == 200) {
                return response.text();
            } else {
                throw new Error(response.status);
            }
        }
        loadJson('https://api.github.com/users/iliakan') // (3)
            .then(alert)
            .catch(alert); // Error: 404


        // Ниже пример из раздела Цепочка промисов, перепишите его, используя async/await
        // вместо .then/catch .
        // В функции demoGithubUser замените рекурсию на цикл: используя async/await ,
        // сделать это будет просто.

        class HttpError extends Error {
            constructor(response) {
                super(`${response.status} for ${response.url}`);
                this.name = 'HttpError';
                this.response = response;
            }
        }

        async function loadJson(url) {

            let response = await fetch(url);

            if (response.status == 200) {
                return response.json();
            } else {
                throw new HttpError(response);
            }

        }
        // Запрашивать логин, пока github не вернёт существующего пользователя.
        async function demoGithubUser() {

            go: while (true) {
                try {
                    let name = prompt("Введите логин?", "iliakan");
                    let user = await loadJson(`https://api.github.com/users/${name}`);
                    alert(`Полное имя: ${user.name}.`);
                    return user;

                } catch (err) {
                    if (err instanceof HttpError && err.response.status == 404) {
                        alert("Такого пользователя не существует, пожалуйста, повторите ввод.");
                        continue go;
                    } else {
                        throw err;
                    }
                }
            }
        }
        demoGithubUser();


        // Совмещение асинхронной функции и промиса

        async function wait() {
            alert('promise nachal work')
            await new Promise(resolve => setTimeout(resolve, 2000));
            return 'promise work vse';
        }
        function f() {
            // покажет 10 через 1 секунду
            wait()
                .then(result => {
                    alert(result);
                    return new Promise(resolve => {
                        setTimeout(() => resolve('promise nachal work'), 2000);
                    });
                })
                .then(result => alert(result));
        }
        f();

        function randomaizer(a) {
    let next = a;
    return function gonext() {
        next = next * 16807 % 2147483647;
        console.log(next);
    }
}

let random1 = randomaizer(Math.random());

function* pseudogenerator(seed) {
    while (i < 10); {
        i++;
        yield seed * 16807 % 2147483647;
    }
}

let gener = pseudogenerator(1);
gener();


//Здесь скрипт часов для html

{/* <script>

class Clock {

    constructor(template) {
        this.template = template;
    }

    timer;

    render() {
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
        // console.log(this.template);

        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);


        console.log(output);

        // console.log(`${hours}:${mins}:${secs}`);
    }

    stop() {
        clearInterval(timer);
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

}

let clock = new Clock('h:m:s');
clock.start();

</script> */}
