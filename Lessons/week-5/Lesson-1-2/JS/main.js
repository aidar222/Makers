//! CallBack function
// function callback(x){
//     console.log("Коллбэк начал работать");
//     console.log(x);
//     console.log("Коллбэк закончил свою работу");
// }

// function main(x){
//     console.log("Главная функция начала работать");
//     callback(x);
//     console.log("Главная функция закончила работу");
// }
// main("Привет")

//! Метод forEach()
//? Выполняет указанную функцию один раз для каждого элемента в массиве. Не создает новый массив!
// array.forEach((element, index, array) => {тело функции})

// const students =[
//     {name: "Nursultan", age: 26, status: "student"},
//     {name: "Aibek", age: 26, status: "student"},
//     {name: "Kanat", age: 20, status: "student"},
//     {name: "Nurislam", age: 22, status: "student"}
// ];

// let newStudentFor = students.forEach((elem, index)=>{
//     return elem;
// })
// console.log(newStudentFor);

// students.forEach(function(elem, index, array){
    // console.log(elem.name);
    // console.log(Object.keys(elem))
    // console.log(Object.values(elem));
// });

// students.forEach((elem, index)=>{
    // console.log(elem);
// })

//! Метод map()
//? Метод map создает новый массив с результатом вызова указанной функции для каждого элемента массива.

// let newStudent = students.map((elem, index)=>{
//     return elem
// })
// console.log(newStudent)

//! Метод filter
//? Метод filter() - создает новый массив со всеми элементами, которые прошли проверку, задаваемую в функции.

// let ageStudent = students.filter((elem)=> {
//     return elem.age > 23
// })
// console.log(ageStudent);
// ageStudent.forEach((elem)=>{
//     console.log(elem.name);
// })

//! Метод reduce()
//? Метод reduce() - применяет функцию к каждому элменету массива (слева-направо), всегда возвращает один результат.

// let sumAge = 0;
// for(let i = 0; i < students.length; i++){
//     sumAge += students[i].age;
// }
// console.log(sumAge);

// prev - начало перебора 
//next - каждый последующий элемент
// let studentAge = students.reduce((prev, next, index, array) => {
//     return (prev += next.age);
// }, 0);
// console.log(studentAge);

// let str = ['m', 'a', 'k', 'e', 'r', 's'];
// let newStr = str.reduce((word1, word2)=>{
//     return word1 + word2
// }, []);
// console.log(newStr);

//TODO У вас есть массив объектов user, и в каждом из них есть user.name. Напишите код, который преобразует их в массив имён.

// let users = [
//     { name: "Kim", age: 41 },
//     { name: "Kortney", age: 42 },
//     { name: "Khloe", age: 37 },
//     { name: "Kendall", age: 26 },
//     { name: "Kylie", age: 24 },
//   ];

//   let newUsers = users.map((elem)=>{
//     return elem.name
// });
// console.log(newUsers);

//? Если reduce() не имеет второго параметра (начального состояния), то prevValue равно array [0]. А currentValue = array [1].

// Синтаксис:
// array.reduce(1) callback(prev, curr, index, arr), 2)начальное состояние)

// let numArr = [2, 4, 6, 5, 3, 1]
// let total = numArr.reduce((prev, curr)=>{
//     return prev + curr;
// });
// console.log(total);


//! find()
//? Метод find() - возвращает значение первого найденного в массиве элемента, которое уодвлетворяет условию переданному в callback функции. В противном случае возвращает undefined.

const students =[
    {name: "Nursultan", age: 26, status: "student"},
    {name: "Aibek", age: 26, status: "student"},
    {name: "Kanat", age: 20, status: "student"},
    {name: "Nurislam", age: 22, status: "student"}
];
// let answer = students.find((elem)=>{
//     return elem.name = "Nurislam";
// });
// console.log(answer);

//! findIndex()
//? Метод findIndex() возвращает первый (искомый) индекс в массиве, если элемент удовлетворяет условию проверки. в противном случае возвращает -1.

// const indexAnswer = students.findIndex((elem)=>{
//     return elem.name === "Nurislam" 
// });
// console.log(indexAnswer);

//! every()
//? Метод every() - проверяет, удовлетворяет ли ВСЕ элементы массива условию, заданному в callback функции.

// let everyAnswer = students.every((elem)=>{
//     return elem.status === "student"
// });
// console.log(everyAnswer);

//! some()
//? Метод some() - проверяет, удовлетворяет ли КАКОЙ-ЛИБО элемент массива условию, заданному в callback функции.  

// let someAnswer = students.some((elem)=>{
//     return elem.name === "Kanat"
// });
// console.log(someAnswer);

//! indexOf
//? Метод indexOf() - возвращает первый индекс (искомый), по которому данный элемент может быть найден в массиве или -1, если такого нет.

// let arrForIndexOf = ["Boris", "Kamilla", "Kanat"];
// let indexOfAnswer = students.indexOf("Kanat");
// console.log(indexOfAnswer);

//! includes()
//? Метод includes() - определяет содержит ли массив определенный элемент, возвращая в зависимости true или false.


// let arrForIndexOf = ["Boris", "Kamilla", "Kanat"];
// let includesAnswer = arrForIncludes.includes("Aibek");
// console.log(includesAnswer);

// let arr = [1, 2, 3, 0, 4, 5, 6];
// let answer = 0;
// let result = arr.reduce(function(sum, elem) {
// 	if (elem == 0) {
// 		answer = sum;
// 	} else {
// 		return sum + elem;
// 	}
// });
// if(answer == undefined){answer = result};
// console.log(answer);

// let iterable = [10, 20, 30];

// for (let value of iterable) {
//   value += 1;
//   console.log(value);
// }

let n = 10;
 
nextPrime:
for (let i = 2; i <= n; i++) { // Для всех i...
 
  for (let j = 2; j < i; j++) { // проверить, делится ли число..
    if (i % j == 0) continue nextPrime; // не подходит, берём следующее
  }
 
  console.log( i ); // простое число
}