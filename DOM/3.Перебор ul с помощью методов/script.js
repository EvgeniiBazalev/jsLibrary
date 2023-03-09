'use strict';

// У нас есть дерево, структурированное как вложенные списки ul/li .
// Напишите код, который выведет каждый элемент списка <li> :
// 1. Какой в нём текст (без поддерева) ?
// 2. Какое число потомков – всех вложенных <li> (включая глубоко
// вложенные) ?

let ul = document.querySelectorAll('li');
// alert(ul[0].innerText.split('\n')[0]);
// alert(ul[0].querySelectorAll('li').length);

for (let elem of ul){
    alert(`${elem.innerText.split('\n')[0]} : ${elem.querySelectorAll('li').length}`)
}
