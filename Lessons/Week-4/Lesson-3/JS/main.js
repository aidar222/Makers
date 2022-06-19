// ! Параметры и аргументы
// ? Параметры функции - это имена, перечисленные в объявлении функции.
// ? Аргументы функции - это реальные значения, передаваемые функции.

// Например:
// function funcName (параметры){
// }
// funcName(аргументы)

// ! Стрелочные функции
// ? Стрелочные функции работают точно так же, как две остальные функции, но имеет упрощенный синтаксис и их довольно удобно использовать в определенных ситуациях.
// Синтаксис:
// let arrowFunc = () => {}

// let arrowFunc = name => {console.log(name)}

// let func = (a, b) => a + b;
// console.log(func(4, 5));

// let someFunc = () => {
//     console.log(arguments);
// }
// someFunc("hello", 4, true, null);

// В стрелочных функциях не работает arguments.

// let rideFunc = (a) => a * 1000;
// console.log(rideFunc(1));

//! Методы объектов
// let car = {
//     model: "Toyota",
//     marka: "Camry 55",
//     color: "pink",
//     year: 2017,
//     show: function(message){
//         console.log(`Наша машина едет ${message}`);
//     },
//     showKey(){
//         console.log(car.marka);
//     }
// };
// console.log(car);
// car.show("на ИК");
// car.showKey()

//! this
//todo WINDOW
// console.log(this);
// console.log(window);
// function myFunc(){
//     console.log(this);
// }
// myFunc();

// let dog = {
//     name: "Rex",
//     year: 4, 
//     show(){
//         console.log(this.name);
//     }
// };
// let dog2 = {...dog};
// dog2.name = "lil";
// dog.show();
// dog2.show()

// Когда this используется внутри объекта, это ключевое слово ссылается на сам объект.

// let obj1 = {
//     hello(){
//         console.log("Hello")
//         return this // console.log(obj1)
//     },
//     obj2: {
//         name: "dog",
//         speak(){
//             console.log("gav");
//             return this //console.log(obj2)
//         }
//     }
// }

// console.log(obj1);
// console.log(obj1.hello());
// console.log(obj1.obj2);

// //? Ключевое слово this ссылается на обьект свойством которого является функция. Другими словами, this ссылается на обьект, который в данный момент вызывает метод.

// let user = {
//     firstName: "Айтегин",
//     sayHi(){
//         let arrow = () => console.log(this.firstName);
//         arrow()
//     }
// }
// user.sayHi()

let data = 10;
if (typeof data === "number" || data === 5) {
  console.log(`${data} - это число`);
} else if (typeof data === "string" && data === "5") {
  console.log(`${data} - это строка, в которой лежит число`);
} else {
  console.log("Необработанный случай ");
}