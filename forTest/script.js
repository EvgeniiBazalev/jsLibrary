'use strict';

let user = {

    name: 'John',
    age: '35',

};

let key = prompt('Что вы хотите о нем узнать?', 'name');

let test = 'name';

alert( user[key] );
alert( user[test] );