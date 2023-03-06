'use strict';

// У нас есть дерево, структурированное как вложенные списки ul/li .
// Напишите код, который выведет каждый элемент списка <li> :
// 1. Какой в нём текст (без поддерева) ?
// 2. Какое число потомков – всех вложенных <li> (включая глубоко
// вложенные) ?

let li = document.getElementsByTagName('li');
let li2 = document.body.children[1].children;

let map = new Map;

recursionWatch(li2);

function recursionWatch(elem) {
    // alert('recursionWatch start');
    let count;
    for (let knot of elem) {
        // alert('for recursionWatch start');
        if (knot == '[object HTMLLIElement]') {
            count = childCount();
            alert(`${knot.textContent.split('\n')[0]} : ${count(knot)}`);
        }

        if (knot.children) {
            recursionWatch(knot.children);
        }
    }
}

function childCount() {
    // alert('childCount start');
    let count = 0;

    return function counter(elem) {
        if (elem.children[0]) {
            let elemCollection = elem.children[0].children;
            for (let knot of elemCollection) {
                // alert('for childCount start');
                count++;
                counter(knot);
            }
        }
        return count;
    }
    
}


// for (let i = 0; i < li.length; i++){
//     alert(`${li[i].textContent.split('\n')[0]} : ${counter(li[i])}`);
// }


// let count = 0;
// function counter(elem) {
//     try {
//         let newelem = elem.firstElementChild.firstElementChild;
//         if (elem == '[object HTMLLIElement]') {
//             // alert(elem.firstElementChild.childElementCount);
//             count = count + elem.firstElementChild.childElementCount;
//             // alert(count);
//             return counter(newelem);
//         }
//     }
//     catch(err) {
//         // alert('else');
//         let countNew = count;
//         count = 0;
//         return countNew;
//     }
// }