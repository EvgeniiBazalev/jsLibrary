"use strict";

// describe("pow", function () {

//       before(() => alert('Основной тест стартует'));
//       after(() => alert('Основной тест завершается'));

//       beforEach(() => alert('Начинаем локальный тест'));
//       afterEach(() => alert('Заканчиваем локальный тест'));

//     function makeTest(x, n) {

//         let y = x**n;

        
//         it(`${x} в степени ${n} равно ${y}`, function () {
//             assert.equal(pow(x, n), y);
//         });

//     }

//     for (let x = 0; x < 5; x++) {

//         for (let n = 0; n < 5; n++) {
//             makeTest(x, n);
//         }       
//     }

// });

describe("pow", function() {

    // before(() => alert('Основной тест стартует'));
    // after(() => alert('Основной тест завершается'));


    describe("возводит x в степень 3", function() {
  
      function makeTest(x) {
        let expected = x * x * x;
        it(`${x} в степени 3 будет ${expected}`, function() {
          assert.equal(pow(x, 3), expected);
        });
      }
  
      for (let x = 1; x <= 5; x++) {
        makeTest(x);
      } 
  
    });
  
    it("если n - отрицательное число, результат будет NaN", function() {
      assert.isNaN(pow(2, -5));
    });
  
    it("если n не число, результат будет NaN", function() {
      assert.isNaN(pow(2, 1.5));
    });

    it("если n равно 55, результат будет NaN", function() {
        assert.isNaN(pow(62, 55));
      });
   
  
  });