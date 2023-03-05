'use strict';

// У нас есть дерево, структурированное как вложенные списки ul/li .
// Напишите код, который выведет каждый элемент списка <li> :
// 1. Какой в нём текст (без поддерева) ?
// 2. Какое число потомков – всех вложенных <li> (включая глубоко
// вложенные) ?
let count = 0;
function counter(elem) {
    try {
        let newelem = elem.firstElementChild.firstElementChild;
        if (elem == '[object HTMLLIElement]') {
            // alert(elem.firstElementChild.childElementCount);
            count = count + elem.firstElementChild.childElementCount;
            // alert(count);
            return counter(newelem);
        }
    }
    catch(err) {
        // alert('else');
        let countNew = count;
        count = 0;
        return countNew;
    }
}


let li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++){
    alert(`${li[i].textContent.split('\n')[0]} : ${counter(li[i])}`);
}