// Задание 1
// Напишите код, который выведет в консоль все числа, от 45 и до 67 включительно, используя цикл while.

// let num = 45;
// while (num <= 67) {
//   console.log(num);
//   num++; // num = num + 1
// }

// Задание 2
// Напишите код, который выведет в консоль все числа, от 1 и до 20 включительно, используя цикл for.
// for (let i = 1; i <= 20; i++) {
//   console.log(i);
// }

// let i = 4; // глобальная область видимости
// for (let i = 1; i <= 20; i++) {
//внутри цикла let i = 1 - локальная область видимости
//   console.log(i);
// }
// console.log(i); // 4

// 1 круг) i = 1; 1 <= 5 (true); вывод (1)  1=1+1
// 2 круг) i = 2; 2 <= 5 (true); вывод (2)  2=2+1
// 3 круг) i = 3; 3 <= 5 (true); вывод (3)  3=3+1
// 4 круг) i = 4; 4 <= 5 (true); вывод (4)  4=4+1;
// 5 круг) i = 5; 5 <= 5 (true); вывод (5)  5=5+!
// 6 круг) i = 6; 6 <= 5 (true); ---- STOP ----

// Задание 3
// Создайте массив arr с именами пяти друзей, затем выведите эти имена по одному, используя цикл for или while.

// let arr = ["Paul", "John", "Goarge", "Ringo", "Yoko"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let i = 0;
// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// Задание 10
// let word = "dog"
// let res = []
// for (let i = 0; i<word.length; i++){
//     for(let j = 0; j <word.length; j++){
//         if(word.slice(i,j + 1)!=""){
//             res = word.slice(i, j +1)
//             console.log(res);
//         }

//     }
// }

// let word = "dog";
// for (let i = 0; i < word.length; i++) {
//   let str = "";
//   for (let j = i; j < word.length; j++) {
//     str = str + word[j];
//     console.log(str);
//   }
// }

// for in

// let word = "dog";
// for (let i in word) {
//   // for (let i = 0; i < word.length; i++) {
//   // i = 1
//   let str = "";
//   for (let j = i; j < word.length; j++) {
//     //   j = 2
//     str = str + word[j];
//     console.log(str);
//   }
// }

// К примеру, если в arr попадает массив [0, -11, 121, 3, 18]
// let arr = [0, -11, 121, 3, 18]
// console.log(arr[4]);
// // arr.sort((a, b) => b - a);
// // console.log(arr[0]);
// console.log(Math.max(arr[0], ));

// let str = "";
// for (let i = 0; i < 7; i++) {
//     str += "#"; //str = str + "#"
//     console.log(str);
// }

// Задание 7
// Создайте переменную arr. Пройдитесь по всем элементам массива циклом, сложите их и выведите сумму в консоль:
// К примеру, если в переменной arr хранится данный массив - [1, 2, 3, 4, 5]

// let arr =[1, 2, 3, 4, 5, "6", "7"]
// let sum = 0
// for (let i of arr){
//     sum += +i;
// }
// console.log(sum);

//! Перевод строки в число (только с числами)

// //? +
// let str = "46"
// let str2 = "48"
// let sumStr = +str + +str2; //+
// console.log(sumStr);
// console.log(+true); //1
// console.log(+undefined); // NaN
// console.log(+null); // null
//todo если в строке хранятся буквы, символ + не сконвертирует, а выведет NaN

//? parseInt()
// console.log(parseInt("35Hello1231231"));
//todo Работает также как символ +, но если в строке есть буквы, не выдает NaN. Выведет первые числа, как только найдет буквы, оставшиеся символы проигнорирует. 

//? Number ()
// console.log(Number("1313"));

// Вложенные циклы
let newArr = ["Hello", ["my", "name"],["is"],["Ekaterina"]]
// console.log(newArr);
// for(let i of newArr){
//     if(typeof i === "string"){
//         console.log(i);
//     }else{
//         for(let j of i){
//             console.log(j);
//         }
//     }
// }
let obj = {
    name: "Kate",
    age: 23,
};
let arr1 = [1, 2 , 3, 4, 5]
console.log(Array.isArray(arr1));