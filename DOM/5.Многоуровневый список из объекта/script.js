'use strict';

// Напишите функцию createTree , которая создаёт вложенный список ul/li
// из объекта.

let data = {
    "Рыбы": {
        "форель": {},
        "лосось": {}
    },
    "Деревья": {
        "Огромные": {
            "секвойя": {},
            "дуб": {}
        },
        "Цветковые": {
            "яблоня": {},
            "магнолия": {}
        }
    }
};

let container = document.getElementsByClassName("container")[0];
iterator(container, data);

function iterator(cont, obj) {

    iteratingOfObjectForUl(obj);

    function iteratingOfObjectForLi(obj) {

        for (let item in obj) {
            if (Object.keys(obj[item]).length != 0) {
                console.log(`${item} не пустой`);
                let li = document.createElement('li');
                li.innerHTML = item;
                cont.append(li);
                cont = li;
                iteratingOfObjectForUl(obj[item]);

            } else {
                console.log(`${item} пустой`);
                let li = document.createElement('li');
                li.innerHTML = item;
                cont.append(li);
            }

        }
    }

    function iteratingOfObjectForUl(obj) {

        for (let item in obj) {
            if (Object.keys(obj[item]).length != 0) {
                console.log(`${item} не пустой`);
                let ul = document.createElement('ul');
                ul.innerHTML = item;
                cont.append(ul);
                cont = ul;
                iteratingOfObjectForLi(obj[item]);

            } else {
                console.log(`${item} пустой`);
                let ul = document.createElement('ul');
                ul.innerHTML = item;
                cont.append(ul);
            }

        }
    }
}


//Решение по книжке
// function createTree(container, obj) {
//     container.innerHTML = createTreeText(obj);
// }

// function createTreeText(obj) { // отдельная рекурсивная функция
//     let li = '';
//     let ul;
//     for (let key in obj) {
//         li += '<li>' + key + createTreeText(obj[key]) + '</li>';
//     }
//     if (li) {
//         ul = '<ul>' + li + '</ul>'
//     }
//     return ul || '';
// }

// createTree(container, data);

//Решение по книжке2
// function createTree(container, obj) {
//     container.append(createTreeDom(obj));
// }

// function createTreeDom(obj) {
//     // если нет дочерних элементов, то вызов возвращает undefined
//     // и элемент <ul> не будет создан
//     if (!Object.keys(obj).length) return;

//     let ul = document.createElement('ul');

//     for (let key in obj) {
//         let li = document.createElement('li');
//         li.innerHTML = key;

//         let childrenUl = createTreeDom(obj[key]);
//         if (childrenUl) {
//             li.append(childrenUl);
//         }

//         ul.append(li);
//     }

//     return ul;
// }

// let container = document.getElementById('container');
// createTree(container, data);
