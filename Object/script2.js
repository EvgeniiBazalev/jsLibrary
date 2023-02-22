'use strict';

new Promise(function (resolve, reject) {
    setTimeout(() => {
        reject(new Error("Whoops!"));
    }, 10000);
}).catch(error => console.log(error));