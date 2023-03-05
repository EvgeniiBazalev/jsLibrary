'use strict';

// for (let i = 0; table.rows.length; i++) {

//     document.body.children[1].rows[i].cells[i].style.backgroundColor = 'red';

// }
let sost = 0;

function myFunction() {
    if (sost == 0) {
        let table = document.body.children[1];
        let i = 0;
        for (let prop of table.rows) {
            table.rows[i].cells[i].style.backgroundColor = 'red';
            i++;
            sost = 1;
        }
    } else if (sost == 1) {
        let table = document.body.children[1];
        let i = 0;
        for (let prop of table.rows) {
            table.rows[i].cells[i].style.backgroundColor = 'green';
            i++;
            sost = 2;
        }
    }

    else if (sost == 2) {
        let table = document.body.children[1];
        let i = 0;
        for (let prop of table.rows) {
            table.rows[i].cells[i].style.backgroundColor = 'blue';
            i++;
            sost = 0;
        }
    }
}