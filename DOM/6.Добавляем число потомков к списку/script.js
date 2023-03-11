'use strict';
// Есть дерево, организованное в виде вложенных списков ul/li .
// Напишите код, который добавит каждому элементу списка <li> количество
// вложенных в него элементов. Узлы нижнего уровня, без детей – пропускайте.

let li = document.getElementsByTagName('li');
console.log(li.length);

for (let elem of li){
    if(elem.getElementsByTagName('li').length == 0){
        continue;
    }
    elem.firstChild.data += `[${elem.getElementsByTagName('li').length}]`;
}