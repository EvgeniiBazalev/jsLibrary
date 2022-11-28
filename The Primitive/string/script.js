'use strict';

//! Функция, которая делает первый символ заглавным и возвращает строку

function ucFirst(str) {
    let strTemporary = str[0].toUpperCase() + str.slice(1);
    return strTemporary;
}

console.log(ucFirst('hello world'));

//! Функция, проверки на спам

function checkSpam(str) {
    str = str.toLowerCase();
    return (Boolean((~str.indexOf('viagra'))||(~str.indexOf('xxx'))));
}

console.log(checkSpam('I want ViaGra'));

//! Функция усечения строки до "нужно всего лишь взять 2 банки..."

function trunCate(str, maxLength) {
    if (str.length <= maxLength) {
        return str;
    } else {
        str = str.slice(0, maxLength) + '...';
              
        return str;
    }
    
}

console.log(trunCate('Hello my dear friend', 10));


//! Функция преобразования $120 в 120"

function extractCurrencyValue(str) {
    str = +str.slice(1);
    return str;
}

console.log(extractCurrencyValue('$300'));