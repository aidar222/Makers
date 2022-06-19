// let mentor = {
//     company: "Makers",
//     name: "Aliya",
//     "last name": "Pattinson",
//     job: "JS-DEV and actor",
//     age: 25
// };
// console.log(mentor);
// console.log(mentor ["last name"]);

// переназначение
// mentor.age -= 1; // mentor.age = mentor.age - 1
// console.log(mentor.age);

// delete - удаление ключа
// delete mentor.company
// console.log(mentor);

// добавление нового ключа
// mentor.phone = 'Iphone 13 Pro Max'
// console.log(mentor.phone);

// let mentor = {
//         company: "Makers",
//         name: "Aliya",
//         "last name": "Pattinson",
//         job: "JS-DEV and actor",
//         age: 25
//     };

    // let mentor2 = mentor;
    // mentor2.name = "Misha";
    // console.log('mentor', mentor);
    // console.log('mentor2', mentor2);

// ? spread operator - расширяет, копирует
// let mentor2 = { ...mentor };
// mentor2.name = "Misha";
// console.log("mentor", mentor);
// console.log("mentor2", mentor2);

//! Простые методы массивов
//? push/pop
// для добавления новых элементов в конец массива, существует специальный метод push
// Синтаксис:
// Название_массива.push(новый_элемент)
// let fruit = ['apple', 'pineapple', 'lime']
// fruit.push('banana')
// console.log(fruit);

//? pop
// Для удаление с конца массива испоьзуется метод pop(). Передавать аргументы в скобки не нужно
// Синтаксис:
// Название_массива.pop()
// fruit.pop()
// console.log(fruit);

//? shift/unshift
// Для добавления элемента в начало используется метод unshift.
// Синтаксис:
// Название_массива.unshift(новый_элемент)
// let cars = ['Mers', 'Audi', 'Tesla', 'Subaru', 'Lada']
// let newCar = 'Toyota'
// cars.unshift(newCar)
// console.log(cars);

//Для удаление с начала массива испоьзуется метод shift().
// Синтаксис:
// Название_массива.shift()
// let shiftCar = cars.shift()
// console.log(cars);
// console.log(shiftCar);

//! slice/splice
//? Метод slice - копирует  и возвращает новый массив. Принимает индекс - начальная позиция (с какого индекса начать) и конечную позицию (до какого элемента копировать, не включительно) 
// Снитаксис
// Название_массива.slice(начала индекса, конец индекса)
// let friends = ['Alex', 'Marty', 'Melman', 'Gloria']
// let zebra = friends.slice(1,2)
// console.log(friends);
// console.log(zebra);
// let madagaskar = friends.slice(0, 4);
// console.log(madagaskar);

//? Метод splice более функциональный. Он может удалять, добавлять и заменять элементы в произвольной части массива. При этом метод splice() изменеят изначальный массив.
// Синтаксис:
// Название_массива.splice(индекс, количество элементов (либо для удаления, либо для добавления), элементы, которые нужно добавить(используется не всегда))
// let friends = ['Alex', 'Marty', 'Melman', 'Gloria'];
// let deleteFriends = friends.splice(1, 2)
// console.log(friends);
// console.log(deleteFriends);
// friends.splice(friends.length, 0, ... deleteFriends)
// console.log(friends);

//! split/join/reverse
//? с помощью метода join() можно объединить все элеменнты массива в одну строку 
// Синтаксис:
// название_массива.join(соединитель)
// let fruit = ['apple', 'orange', 'grape', 'banana']
// let newFruit = fruit.join(' ')
// console.log(newFruit);
// console.log(fruit);

//? split() - Метод развивает элементы строки в массив по указанному раздилителю
// let date = '14.04.2022'
// let newDate = date.split('.')
// console.log(newDate);

//? reverse - переворачивает и меняет порядок элементов в обратную сторону (меняет исходный массив)
// синтаксис
// название_массива.reverse

let number = [5, 4, 3, 2, 1]
console.log(number);
number.reverse()
console.log(number);

let str = "Hello my name is Ekaterina";

// console.log(str.split(" ").reverse().join(" "));
let splitStr = str.split(" "); // ["Hello", "my", "name", "is", "Ekaterina"]
splitStr.reverse(); // ["Ekaterina", "is", "name", "my", "Hello"]
let joinStr = splitStr.join(" "); // "Ekaterina is name my Hello"
console.log(joinStr);

//? Метод concat() соединяет два массива. Не меняет исходный массив
// Синтаксис
// название1_массива.concat(название2_массива) 
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = arr1.concat(arr2)
console.log(newArr);

//? Для сортировки элементов массива используется метод sort()
let fruits = ['Banana', 'Orange', 'Apple', 'Mango']
fruits.sort()
console.log(fruits)

let numbers = [1,34,56,3,9,70]
numbers.sort((a, b) => b - a)
console.log(numbers);