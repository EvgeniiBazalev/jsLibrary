'use strict';
// Есть «обычная» функция. Как можно внутри неё получить результат выполнения async –
// функции?

async function wait() {
    alert('promise nachal work')
    await new Promise(resolve => setTimeout(resolve, 3000));
    return 'promise work vse';
}
function f() {
    // покажет 10 через 1 секунду
    wait()
        .then(result => {
            alert(result);
            new Promise(resolve => {
                setTimeout(resolve, 3000);
                return 'promise2 work vse';
            });
        })
        .then(result => alert(result));
}
f();
