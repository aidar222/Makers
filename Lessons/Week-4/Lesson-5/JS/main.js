//! return

// function bankomat(pin, sum){
//    return pin + sum
// }
//bankomat(2222, 500); // не увидем результат, так как нет консоли
// let result = bankomat(2222, 500) 
// console.log(result);

//! Метод object.keys() - создает массив ключей объекта

// let obj1 = {
//     name:"obj1",
//     age: 35,
//     bool: true,
//     zero: null
// }
// let result = Object.keys(obj1)
// console.log(result);
// Все ключи в объекте, имеют тип данных стринг

//! Метод Object.values() создает массив значений объекта

// let resultVal = Object.values(obj1)
// console.log(resultVal);


// Задание 11
// Создайте функцию checkTask(), которая принимает строку.

// Функция должна удалить все гласные буквы из строки.
// Согласные буквы в свою очередь должны переводится в заглавные.
// Функция должна возвращать новую строку.
// За гласные буквы считать только английские гласные - a, e, i, o, u.
// Например, для строки 'hello', функция должна возвратить:

// 'HLL' 


// function checkTask(str) {
//     for (let i = 0; i < str.length; i++) {
//       if (
//         str[i] === "a" ||
//         str[i] === "e" ||
//         str[i] === "u" ||
//         str[i] === "i" ||
//         str[i] === "o"
//       ) {
//         str = str.replace(str[i], "");
//       }
//     }
//     return str.toUpperCase();
//   }
//   console.log(checkTask("hello"));
  
//   let str1 = "GOODBUY!!!";
//   console.log(str1.toLowerCase());
//   let str2 = "goodbuy!!!";
//   console.log(str1.toUpperCase());


// Задание 12
// Напишите функцию checkTask(), которая принимает интервал в виде двух четырехзначных чисел, например 2000 и 3001.

// Функция должна возвратить список всех чисел, в заданном интервале, состоящих из четных цифр.

// Например для аргументов 2000 и 3001, функция возвратит список:

// ['2000', '2002', '2004', '2006', '2008', '2020', '2022', '2024', '2026' ...  '3000'] 

function checkTask(num1, num2) {
    let res = [];
    for (let i = num1; i <= num2; i++) {
      if (i % 2 === 0) {
        let yes = true;
        let elem = i.toString().split("");
        for (let j = 0; j < elem.length; j++) {
          if (elem[j] % 2 !== 0) {
            yes = false;
          }
        }
        if (yes) res.push(i);
        yes = true;
      }
    }
    return res;
  }
  
  console.log(checkTask(2000, 3000));