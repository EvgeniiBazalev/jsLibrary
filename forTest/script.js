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
        if (typeof(anyObj[key]) == Number) {
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