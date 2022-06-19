// let person = {
//     name: 'Jack', 
//     age: 20,
//     childs: ['John', 'Luci', 'Emily', 'Tom'],
//     clothes: {
//         shirts: 'black'
//     }   
// }
// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.childs[person.childs.length - 1]);
// console.log(person.clothes.shirts);

//! переназначение свойств 
// person.age = 21;
// person.name = 'Johnny';
// console.log(person.name);

//! добавление свойств
// person.car = 'Toyota';
// console.log(person.car);

//! удаление свойств
// delete person.childs 
// console.log(person);
// delete person.clothes.shirts
// console.log(person);

const obj = {
    name: 'Jack'
}

// obj.name = 'Johnny'
// console.log(obj);

let person1 = {
    name: 'Kani',
    age: 22
}

// let person2 = person1;
// person2.name = 'Kubat'
// console.log(person2);
// console.log(person1);

//! spread operator
// let person2 = {...person1}; 
// person2.name = 'Kubat'
// console.log(person2);
// console.log(person1);

// let arr = [1, 2, 3];
// let brr = arr;
// let brr = [...arr]
// arr[0] = 100;
// console.log(arr, brr);

//! Arrays
// let numArr = [1, 2, 3, 4, 5];
// console.log(numArr);

//! length
// console.log(numArr.length);

//! доступ к лементам массива
// console.log(numArr[3]);

// console.log(numArr[numArr.length - 1]);

const guest = [
    {
        name: 'Alice'
    },
    {
        name: 'John'
    },
    {
        name: 'Emily'
    },
    {
        name: 'Raychael'
    }
]
let newGuest = {
    name: 'Alex'
}

//! Push
guest.push(newGuest);
// console.log(guest);

//! Pop
guest.pop()
// console.log(guest);

let importantGuest = {
    name: 'Jack'
}

//! Unshift
guest.unshift ({name: 'Tom'}, 
importantGuest,
{name:'Bill'});
// console.log(guest);

//! Shift
let kickedGuest2 = guest.shift ()
// console.log(kickedGuest2);
// console.log(guest);

//! Slice
// let a = guest.slice(2, 3);
// console.log(a);

//! Splice
let john = guest.splice(3, 0, newGuest)
console.log(guest);
// console.log(john);

let arrAge = [3, 90, 12, 34, 22, 9, 7];
// arrAge.sort()
// console.log(arrAge);

arrAge.sort((a, b) => a - b)
console.log(arrAge);