'use strict';

let table = document.getElementsByTagName('table')[0];

let arrRows = Array.from(table.rows).slice(1);



for (let i = 0; i < arrRows.length; i++){
    console.log(arrRows[i])
}


arrRows.sort(function (a, b){
        
        if (a.cells[0].firstChild.data < b.cells[0].firstChild.data)  {
            return -1;
        }
    
        if (a.cells[0].firstChild.data > b.cells[0].firstChild.data)  {
            return 1;
        }
    
        return 0;
    });

    // table.rows[0].after(arrRows[0]);
    // table.rows[1].after(arrRows[1]);
    // table.rows[2].after(arrRows[2]);
    // table.rows[3].after(arrRows[3]);

//     for (let i = 0; i < table.rows.length; i++){
//         console.log(table.rows[i])
//     }    

let length = table.rows.length;

 for (let i = 0; i < length - 1; i++) {
     table.rows[i].after(arrRows[i]);
 }
