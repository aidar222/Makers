//! Для чего нужны циклы?

// let arr = ['Kamilla', 'Emir', 'Aidar', 'Ekaterina', 'Aktilek']
// arr[0] === 'Ekaterina' ||
// arr[1] === 'Ekaterina' || 
// arr[2] === 'Ekaterina' || 
// arr[3] === 'Ekaterina' || 
// arr[4] === 'Ekaterina'
// ? console.log('Мы нашли Екатерину')
// : console.log('В списке нет Екатерины');

// for (let i = 0; i < arr.length; i++){
//     arr[i] === 'Ekaterina' ? console.log('Мы нашли Екатерину')
//     : console.log('В списке нет');
// }

//! Инкремент и Декремент 
//? Инкремент - это УВЕЛИЧЕНИЕ значения переменной на единицу, а декремент - это УМЕНЬШЕНИЕ значения перемнной на единицу. 

//todo Инкремент 
// let inc = 0
// console.log(inc);
// inc++; //inc = inc + 1;
// console.log(inc);

//todo Декремент 
// let dec = 3
// dec--
// console.log(dec);

//! Постфиксный и префиксный инкремент и декремент 
// ++i
// --i
//todo постфиксный
// let i = 0
// console.log(i++); // выведет 0, затем увеличит на 1
// console.log(i); 
//todo префиксный
// let pre = 0;
// console.log(++pre); // увеличит на 1, а затем выведет 1

//! for
//? Цикл for используется, когда вы заранее знаете сколько раз вам нужно что-то сделать.
//todo Синтаксис цикла for:
// for(1 - начало; 2 - условие; 3 - шаг){
//     код для обработки каждого элемента
// }

// for (let i = 0; i < 5; i++){
//     console.log(`Ваша оценка: ${i}`);
// }

//! break, continue
//? С помощью ключевого слова break можно преждевременно остановить цикл, не дожидаясь пока условие не возратит false

//todo break
//  let arr = [1, 2, 3, 0, 5, 6]
//  for(let i = 0; i < arr.length; i++){
//      if(arr[i] === 0) {
//          break
//      }
//      console.log("Покажет число", arr[i]);
//  }

 //todo continue 
//? Используя ключевое слово continue, можно остановиться на текущем кругу цикла. При continue, цикл просто переходит на следующий круг.
//  let arr = ['a', 'b', 'c', 'd', 'e']
//  for(let i = 0; i < arr.length; i++){
//      if(arr[i] === 'c') continue;
//      console.log(arr[i]);
//  }

//! while
//? Цикл while также может использоваться для многократного повторения одного участка кода. 
// Синтаксис while:
// while (условие) {
//     тело цикла
// }
// let password = null
// while (password !== "qwerty"){
//     password = prompt("Введите пароль:");
//     console.log("Пароль неправльный");
// }

//! do...while
//? Цикл do...while в начале выполняет тело цикла, а затем проводит проверку условия.
// синтаксис do...while
// do {
//     тело цикла (действие)
// }while (условие)

// let km = 0 
// do {
//     console.log('Едем дальше!');
//     km++;
// }while (km < 5);

//! Циклы for...in и for...of
//todo for...in 
//? Цикл for...in выполняет операцию по перечисляемым свойсвам объекта, такими свойствами у объекта будут ключи, а у массива индексы.
// синтаксис for...in 
// for (переменная in название объекта){
//     тело цикла
// }
// let obj = {
//     name: 'Aliya',
//     age: 20,
//     job: 'JS Dev'
// }
// for (let i in obj){
//     console.log(i);
//     console.log(obj[i]);
// }

//todo for..of
//? Цикл for...of перебирает массивы, под переменной будет хранится индекс.

// let arr = [4, 7, 5, 9 , 0]
// Перебирать и объекты и массивы можно через цикл for...in
//todo for...in
// for (let i in arr){
//     console.log(i);
//     console.log(arr[i]);
// }

// for...of
// for (let i of arr){
//     console.log(i);
// }

//! Вложенные циклы

let arr = [
    [1, 2],
    [3, 4],
    [5, 6],
];
arr[0][1]

for(let i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    for(let j = 0; j < arr[i].length; j++){
        console.log(arr[i][j]);
    }
}
