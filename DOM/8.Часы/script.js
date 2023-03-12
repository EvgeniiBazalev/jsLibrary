'use strict';

// Создайте цветные часы как в примере ниже:

let hoursContainer = document.getElementsByClassName("hours")[0];
let minutesContainer = document.getElementsByClassName("minutes")[0];
let secondContainer = document.getElementsByClassName("second")[0];




async function timer() {

    let date = new Date();
    let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
    let minutes = date.getMinutes() < 10 ? ':0' + date.getMinutes() : ':' + date.getMinutes();
    let second = date.getSeconds() < 10 ? ':0' + date.getSeconds() : ':' + date.getSeconds();

    hoursContainer.append(hours);
    minutesContainer.append(minutes);
    secondContainer.append(second);
    while (true) {
        let promise = new Promise(resolve => {
            setTimeout(() => resolve('go'), 1000);
        });

        let result = await promise;

        date = new Date();
        hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
        minutes = date.getMinutes() < 10 ? ':0' + date.getMinutes() : ':' + date.getMinutes();
        second = date.getSeconds() < 10 ? ':0' + date.getSeconds() : ':' + date.getSeconds();

        hoursContainer.firstChild.remove();
        minutesContainer.firstChild.remove();
        secondContainer.firstChild.remove();

        hoursContainer.append(hours);
        minutesContainer.append(minutes);
        secondContainer.append(second);
    }
}
timer();