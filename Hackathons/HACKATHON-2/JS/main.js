// Задание №1
// Создайте объект в переменной programmer. Дайте объекту имя,
// фамилию, возраст, язык программирования и зарплату. Выведите каждое свойство объекта по очереди в консоль.

// ПИСАТЬ КОД ЗДЕСЬ

// let programmer = {
//     name: 'Steve',
//     lastName: 'Smith',
//     age: 34,
//     language: 'JavaScript',
//     salary: '1$'
// };
// console.log(programmer.name);
// console.log(programmer.lastName);
// console.log(programmer.age);
// console.log(programmer.language);
// console.log(programmer.salary);

// Задание №2
// Запросите у пользователя ввести два числа и верните ему сумму этих двух чисел.
// Если сумма больше 10 и в то же время меньше 20 то, умножьте на 5. Если же сумма больше 20 и меньше 50, то разделите на 3.
// Иначе прибавьте 10.
// Для решения используйте функции: prompt и parseInt или опертаор +.
// Ответ может быть и десятичным числом, и выведите это конечное число.
// Например:
// let firstNum = prompt("Введите первое число")
// let secondNum = prompt("Введите второе число")

// ПИСАТЬ КОД ЗДЕСЬ

// let firstNum = prompt("Введите первое число");
// let secondNum = prompt("Введите второе число");
// let sum = +firstNum + +secondNum;
// if(sum > 10 && sum < 20){
//     alert(sum * 5)
// }else if(sum > 20 && sum < 50){
//     alert(sum / 2)
// }else if (sum){
//     alert(sum + 10)
// };


// Задание №3
// Вам дан сложный вложенный список. Используя цикл выведите все элементы в виде ключ: значение
// Ввод:
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
// ];

// Вывод:
// name: Makers
// type: Bootcamp
// place: Bishkek
// languages: JavaScript, Python
// simply: the best!

// ПИСАТЬ КОД ЗДЕСЬ

// let aboutUs = [
//  ["name", "Makers"],
//  ["type", "Bootcamp"],
//  ["place", "Bishkek"],
//  ["languages", "JavaScript, Python"],
//  ["simply", "the best!"]
// ]; 
//  for(elem of aboutUs){
//     console.log(`${elem[0]}: ${elem[1]}`)
//    }


// Задание №4
// Есть объект users в котором перечислен
// возраст участников. Напишите код,
// который выведет суммарный возраст
// всех участников. Решите задачу через
// цикл for...in.
// let users = {
//   John: 28,
//   Mark: 30,
//   David: 25,
//   Richard: 42
// };

// ПИСАТЬ КОД ЗДЕСЬ

// let users = {
//       John: 28,
//       Mark: 30,
//       David: 25,
//       Richard: 42
//     };
// let sum = 0;
// for(elem in users){
//     sum += users[elem]; 
// };
// console.log(sum);

// Задание №5
// Напишите функцию removeElem(arr, element), которая принимает 2 аргумента.
// Первый аргумент- это массив.
// Второй аргумент- это элемент который нужно удалить из массива.
// Пример: let arr = [2, ‘hello’, true,  ‘world’,  5, ‘js’]
//     removeElem(arr,’world’)
// Ответ: [2, ‘hello’, true,  5, ‘js’]

// ПИСАТЬ КОД ЗДЕСЬ

// function removeElem(arr) {
//     let removed = arr.splice(3,1)
//     console.log(arr);
// };
// removeElem([2, 'hello', true,  'world',  5, 'js'])

//! Задание №6
// Напишите функцию palindrom(word), принимающая один аргумент word.
// Функция, должна выводить в консоль true, если строка является палиндромом, в обратном случае false. При этом нужно учитывать пробелы и регистр.
// Палиндром – слово, которое читается одинаково слева направо и справа налево (например, ротор)

// Пример №1:
// Ввод: tenet
// Ответ: true

// Пример №2:
// Ввод: my gym
// Ответ: true

// Пример №3Ж
// Ввод: nolan
// Вывод: false

// ПИСАТЬ КОД ЗДЕСЬ


//! Задание №7
// Дан лимит = 1000, напишите функцию, которая будет выводить в консоль удвоенное значение аргумента до тех пор, пока оно не достигнет лимита, и после этого вывести в консоль аргументы в обратном порядке (использовать цикл while)

// Например:

// Ввод: functionLimit(50)
// Вывод:
// 50
// 100
// 200
// 400
// 800
// 800
// 400
// 200
// 100
// 50

// ПИСАТЬ КОД ЗДЕСЬ

// Задание №8
// Дан массив со строками. Оставьте в нем только те строки, длина которых больше 5-ти символов.
// Используйте метод filter()

// ПИСАТЬ КОД ЗДЕСЬ

// let string = ["Misha", "Aitegin", "Aliya", "Mirdin"];
// let newString = string.filter((elem) => {
//   return elem.length > 5;
// });
// console.log(newString);

// Задание №9
// Дан массив
// let task2 = [10, 25, 25, 15, 5, 10];
// Выведите в alert сумму элементов
// этого массива.
// Используйте метод .forEach()

// ПИСАТЬ КОД ЗДЕСЬ

// let task2 = [10, 25, 25, 15, 5, 10];
// let sum = 0;
// task2.forEach(function (elem) {
//   sum += elem;
// });
// alert(sum);

// Задание №10
// 	Напишите функцию, определяющую
// максимальное количество повторяющихся
//  элементов в массиве.
// Массив для примера:
// let task5 = [4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4];

// ПИСАТЬ КОД ЗДЕСЬ


// function checkTask(task5){
// let result = {};
// for (let i = 0; i < task5.length; ++i) {
//   let a = task5[i];
//   if (result[a] != undefined) ++result[a];
//   else result[a] = 1;
// }
// console.log(result)
// };
// checkTask([4, 5, 5, 5, 3, 5, 2, 3, 1, 3, 4])

//! Задание №11
// Дан массив nums = [8,1,2,2,3]
// Напишите функцию, которая будет возвращать массив, в котором указано сколько есть чисел в массиве меньше, чем каждый элемент массива.
// Используйте метод map()
// Пример №1:
// Ввод: nums = [8,1,2,2,3]
// Вывод: [4,0,1,1,3]
// 4 элемента меньше чем 8
// 0 элементов меньше чем 1
// 1 элемент меньше чем 2
// 1 элемент меньше чем 2
// 3 элемента меньше чем 3

// Пример №2:
// Ввод: nums = [6,5,4,8]
// Вывод: [2,1,0,3]

// ПИСАТЬ КОД ЗДЕСЬ

// Задание №12
// Вам нужно поменять местами значения
// переменных при помощи деструктуризации.
// let a = 0;
// let b = 1;
// Пример результата:
// console.log(a, b); // 1, 0

// ПИСАТЬ КОД ЗДЕСЬ

// let a = 0;
// let b = 1;
// [a, b] = [b, a];
// console.log(a, b);

// Задание №13
// Дан объект { size: { width: 100, height: 200 }, items: ["Cake", "Donut"], extra: true}.
// Деструктуризуйте все свойства и элементы данного объекта, включая вложенные объекты и массивы и выведите в консоли.

// ПИСАТЬ КОД ЗДЕСЬ

// let obj = { 
//     size: { width: 100, height: 200 },
//     items: ["Cake", "Donut"],
//     extra: true
// };

// let {
//     size: {width, height},
//     items: [Cake, Donut],
//     extra: true1
//     } = obj;
  
//   console.log(width, height, Cake, Donut, true1);

// Задание №14
// Необходимо создать объект, который будет
// представлять из себя лифт. У него
// должны быть методы:
// ● printFloor - печатает текущий этаж, на котором
// находится лифт
// ● upOneFloor - перемещает на один этаж вверх
// ● downOneFloor - перемещает на один этаж вниз
// ● toFloor - принимает целое числовое
// значение от 1 до 16 - переместиться на
// определенный этаж.
// Изначально лифт находится на первом этаже.
// Когда мы вызываем метод toFloor(),
// программа должна в консоли отобразить
// постепенное перемещение лифта на нужный этаж
// (только в этом методе).
// ● Лифт должен хранить текущий этаж, на котором он находится.
// ● Для наглядности, вызовите метод toFloor несколько раз в программе.
// ● Метод toFloor должен использовать методы oneFloorUp и oneFloorDown для
// перемещения по этажам, а также метод printFloor для вывода текущего этажа лифта.
// ● В здании 16 этажей, нельзя, чтобы лифт мог уехать ниже первого или выше 16-го этажа.

// ПИСАТЬ КОД ЗДЕСЬ
// let elevator = {
//   current: 1,
//   max: 16,
//   min: 1,
//   printFloor(){
//       console.log(this.current);
//   },
//   upOneFloor(){
//       if(this.current >= this.min && this.current < this.max){
//           this.current++;
//           this.printFloor();
//       }else{
//           console.log("Error")
//       }
//   },
//   downOneFloor(){
//       if(this.current > this.min && this.current <= this.max){
//           this.current--;
//           this.printFloor()
//       }else{
//           console.log("Error");
//       }
//   },
//   toFloor(floor){
//       if(floor >= this.min && floor <= this.max){
//           while(this.current < floor){
//               this.upOneFloor()
//           }
//       }else{
//           console.log("Error")
//       }
//   }
// };
// elevator.printFloor();
// elevator.upOneFloor();
// elevator.upOneFloor();
// elevator.downOneFloor();
// elevator.downOneFloor();
// elevator.toFloor(6); 
// elevator.toFloor(45); 