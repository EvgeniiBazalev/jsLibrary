'use strict';

// Напишите функцию createCalendar(elem, year, month) .
// Вызов функции должен создать календарь для заданного месяца month в году
// year и вставить его в elem .
// Календарь должен быть таблицей, где неделя – это <tr> , а день – это <td> . У
// таблицы должен быть заголовок с названиями дней недели, каждый день –
// <th> , первым днём недели должен быть понедельник.
// Например, createCalendar(cal, 2012, 9) сгенерирует в cal следующий
// календарь:
// пн вт ср чт пт сб вс
//                 1  2
// 3   4  5  6  7  8  9
// 10 11 12 13 14 15 16
// 17 18 19 20 21 22 23
// 24 25 26 27 28 29 30


let dayOfWeek = {
    0: 'ПН',
    1: 'ВТ',
    2: 'СР',
    3: 'ЧТ',
    4: 'ПТ',
    5: 'СБ',
    6: 'ВС',
};

function dayOfWeekTranslate(number) {
    if (number == 0) {
        number = 7;
    }
    return number - 1;
}

let container = document.getElementsByClassName('container')[0];
let table = document.createElement('table');
container.append(table);
let tr = document.createElement('tr');
table.prepend(tr);
for (let i = 0; i < 7; i++) {
    let th = document.createElement('th');
    th.textContent = dayOfWeek[i];
    tr.append(th);
}

for (let i = 0; i < 6; i++) {
    let newtr = document.createElement('tr');
    table.append(newtr);
    for (let i = 0; i < 7; i++) {
        let td = document.createElement('td');
        td.textContent = ' ';
        newtr.append(td);
    }
}

let year = document.getElementById('year').value;
let month = document.getElementById('month').value; 
console.log(year);

function logDate() {
    let year = document.getElementById('year').value;
    let month = document.getElementById('month').value; 
    let date = new Date(year, month - 1, 1);
    let week = 1;

   
    for(let i = 0; i < 7; i++){    
    table.rows[1].cells[i].innerHTML = ' ';
    table.rows[5].cells[i].innerHTML = ' ';
    table.rows[6].cells[i].innerHTML = ' ';
    }
        
    

    for (let i = 1; date.getMonth() < month && date.getFullYear() <= year ; i++) {
        let WeekDay = dayOfWeekTranslate(date.getDay());
        console.log(`${date.getDate()} : ${dayOfWeek[WeekDay]}`);
        date.setDate(date.getDate() + 1);
        table.rows[week].cells[WeekDay].innerHTML = i;
        if(WeekDay == 6) {
            week++;
        }
    }

}

logDate();