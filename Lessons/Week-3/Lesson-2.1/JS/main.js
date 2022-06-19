// ! Модальное окно (interactions)
// alert("Привет")
//? Alert - это необольшое окно с сообщением. Будет отображаться до тех пор, пока не нажмем кнопку ОК.
// let result = prompt ("Введите имя:", "Пользователь");
// alert (result);
//? prompt - Это модальное окно для ввода значения. Принимает в себя два аргумента: название - текст, который отображается в окне; default - необязательный аргумент, который устанавливает начальное значение, отоборазится, если пользователь не введет свое значение.

// let result = confirm("Вам есть 18?")
// console.log(result);
//? confirm - отоборажает модальное окно с текстом (вопрос) и двумя кнопками: ОК (true) и ОТМЕНА (false)

//! Операторы сравнения 
//? Операторы сравнения всегда возвращают boolean (логический тип данных)
const number1 = 5;
const number2 = 6;
console.log(number1 > number2);

console.log(20 >= 10);// true
console.log(50 >= 50);// true
console.log(5<=4);// false
// console.log("50" <= 100);

//Не строгое равенсвто ==, приводит к общему, игнорирует тип данных.
console.log("10" == 10);// true
console.log("n10" == 10);// false
//строгое равенство ===, не приводит к общему типу данных, сравнивает тип данных и значение
console.log("10" === 10);// false
console.log(10 === 10);// true

//Boolean - узнать логический тип (true или false)
console.log(Boolean("string"));// true
console.log(Boolean(""));// false
console.log(Boolean(" "));// true
console.log(Boolean(0));// false
console.log(Boolean(undefined));// false
console.log(Boolean(-1));// true

//todo Ложное
// 0 - ноль
// "" - пустая строка
// null 
// undefined
// false

//! Логические операторы 
//todo && (И) - возвращает true, если оба значения true
// let age = 20
// console.log(age > 18 && age < 25);// true
// console.log(age > 18 && age < 19);// false
// Если хотя бы одна часть выражения ложна (false), то все выражение будет false:
true && false // false
true && true && false // false

//todo || (или) - если хоть одно условия true, то все выражение true
false || true // true

let admin = false
let user = "user"
admin || user // "user"

//todo ! (не, отрицание) 
!true // false
// ! - сначала приводит к логическому типу true\false, затем возвращает в противоположное значение. 
!100 // false
!"" // true
!0 // true

console.log(!!false); // false
Boolean(false) // faslse
// !! - оператор возвращает булевое значение, также как функция Boolean()

//todo Комбинирование 
console.log(true || false && true); // true
console.log(!true || false && true); // false

//? Приоритетность 1. ! (отрицание), 2. && (и), 3. || (или)

console.log(("hello" && false) || (null && true)); // null

//! Условные операторы
//? if...else
// if(условия){
//     код1;
// }else {
//     код2 (если условия не верное)
// }

let age = 20;
if(age >= 18){
    console.log("Доступ разрешен");
}else {
    console.log("Доступ запрещен");
}

let user1 = prompt ("Введите ваше имя")
if(user1 === "Миша"){
    console.log("Привет Миша");
}else if(user1 === "Айтегин"){
    console.log("Привет Айтегин");
}else{
    console.log("Я тебя не знаю");
}

//! Тернарный оператор
// то же самое, что и конструктор if..else, но с коротким синтаксисом и два выхода
let sale = 20
let buyMac
sale > 50 || sale <30 ? buyMac = true : buyMac = false
console.log(buyMac);
// условие ? сработает, если условие правда: сработает, если условие ложное

//! switch
//? switch case - условный оператор, который заменяет собой сразу несколько else if. Минус в том, что для сравнения берется только одно значение. Плюс - визуально выглядит все понятно. 
// пример на else if 
// let day = 3
// if (day === 1){
//     console.log("Понедельник");
// }else if(day === 2) {
//     console.log("Вторник");
// }else if(day === 3){
//     console.log("Среда");
// }

//пример на switch case

// switch(значение которое сравниваем) {
//     case то значение, которое хотим сравнить:
//         console.log("код, который отобразится, если условия правильны");
//         default: (если ни одно из условий не верное. Обязательный параметр)
//         код, который сработает
// }

// let day = +prompt("Введите день")
// switch (day) {
//     case 1:
//         console.log("Понедельник");
//         break
//     case 2:
//         console.log("Вторник")
//         break
//     case 3:
//         console.log("Среда");
//         break
//     case 4:
//         console.log("Четверг");
//         break
//     default:
//         console.log("Нет такого");
// }


let x = true
// let x = {name: "Kanat"}
// let x = 123
// let x = "Hello world"
switch (typeof x) {
    case "boolean":
        console.log("boolean");
        break;
        case "number":
            console.log("Тип данных Number");
            break;
    default:
        console.log("Нет такого типа");
}