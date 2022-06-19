//! function Declaration
//? Чтобы какая-то  часть программы (блок кода) неоднократно не повторялась используем функции.
//? Функция - это именованный блок код, который нвызывается в нужных местах программы по имени.

// Также как и с перменными, при присвоении функции имени, мы говорим, что объявляем фунцию. Такие функции называются finction declaration
//синтаксис:
// function имя_функции (список_параметров){
    // блок кода 
// }

// function funcName(name, job, company) {
//   console.log(`Привет ${name}. С днём рождения! `);
//   console.log(job);
// }
// funcName("Айдана", "Куратор");
// funcName("Миша");
// funcName("Айтегин");

//todo Внутри функции можно использовать любые инструменты, которые есть в JS, а также писать другие функции.

// function countUntil(a, b) {
//     for (let i = a; i <= b; i++) {
//       console.log(`Счетчик ${i}`);
//     }
//   }
  
//   countUntil(1, 10);
//   countUntil(3, 8);

// function countUntil(a, b) {
//         for (let i = a; i <= b; i++) {
//           console.log(`Счетчик ${i}`);
//         }if(i%2===0){
//         console.log(i);
//         }
//       }
//       let a = +prompt('Введите первое число');
//       let b = +prompt('Введите второе число');
//       console.log(typeof a);
//       countUntil(a, b);


//! return
//? Для того, чтобы вернуть результат функции, нужно использовать return. После ключевого слова return? дальнейший код игнорируется.

// function calc(a, b) {
//   //   console.log(a * b);
//   let sum = a * b;
//   return sum;
// }
// let result = calc(3, 4);
// console.log(result);

// function checkType(elem) {
//     if(!elem) return 
//     console.log("Данное значение имеет тип - ", typeof elem)   
// }
// checkType(1);

// function funcType(a,b) {
//     let sum = a + b;
//     return sum;
// }
// let result = funcType(10,20)
// console.log(result);

// function funcName(a,b) {
//     let sum = (a + b) * 3
//     return sum
// }
// let result1 = funcName(10,10)
// console.log(result1);

// TODO 2. Напишите функцию pow(x,n) которая возвращает x в степени n. Другими словами умножьте x на себя n раз
// Решение

// function pow(x, n) {
//     let sum = x ** n;
//     return sum
// }
// console.log(pow(-2,-3));

// let arr = [
//     "hello",
//     5,
//     false,
//     {job: "JSDev"},
//     ["World", [4, 7, 8], { company: "makers" }],
// ];
// let newObject = {
//     name: 'Makers',
// }
// console.log(Array.isArray(newObject))
// console.log(Array.isArray(arr));

// for (i of arr) {
//   if (typeof i !== "object") {
//     console.log(i);
//   } else if (Array.isArray(i)) {
//     for (j of i) {
//       if (Array.isArray(j)) {
//         let sum = 0;
//         for (k of j) {
//           console.log(k);
//           sum += k;
//         }
//         console.log(sum);
//       } else if (typeof j === "object") {
//         for (a in j) {
//           console.log(j[a]);
//         }
//       }
//     }
//   }else{
//       for(w in i){
//           console.log(i[w])
//       }
//   }
// } 

//! Область видимости
//? - это система определяющая доступность переменных. Так как функции это блок кода со своей внутренней логикой, создаются различные области видимости.
// Пример:
// let message = 'Я глобальная область видимости'
// function showMessage() {
//     console.log(message);
// }
// showMessage();

// function showMessage(){
//     let message = "Привет я локальная видимости"
//     console.log(message);
// }
// showMessage()
// console.log();// Будет ошибка из глобальной области видимости, нет доступа к локальной.

// let userName = "user"

// function showName() {
//     userName = "Kanat"
//     // console.log(userName);
// }
// showName();
// console.log(userName);

// let sum = 0 
// for(let i = 0; i < 5; i++){
//     sum+=i;
// }
// console.log(sum);

// let userName = "user" // это глобальная переменная (1)
// function showUser() {
//     let userName = "localUser"; // это локальная переменная (2)
//     console.log(userName);
// }
// showUser()

//! HOISTING
//? Hoisting - это механизм в JS, в котором переменные (var) и объявление функций передвигаются вверх.

// Это означает то, что совершенно неважно, где были объявленны функции или переменная var, все они передвигаются вверх в своей области.
// При переменной var - поднимаются только объявления переменной (название), но не значения. В случае функции, поднимается вся функция.

// showName()

// function showName() {
//     console.log('Это hoisting');
// }

// console.log(a)
// var a = 5

//! function Expression
// function expression не поддерживает hoisting
// let func = function(){
//     console.log("Это анонимная функция");
// }
// func()

//! Колбэк функция
// колбэк функция - это функция, которая передается в аргументы внутри функции

// let ask = function(question, yes, no){
//     if(confirm(question)===true){
//         yes()
//     }else{
//         no()
//     }
// }
// ask("Вы согласны?",
//     function(){
//         console.log("Вы согласны с ответом")},
//     function(){
//         console.log("Вы не согласны с ответом")});

//! arguments
//? arguments - это массивоподобный объект доступный только внутри функции (имеет свойство length и индексацию, но не имеет доступа к методам массива). Через arguments можно ссылаться на аргументы функции внутри нее:
function func(){
// console.log(arguments);

for(index of arguments){
    console.log(index);
}
}

func(10, 20, 30, 40)