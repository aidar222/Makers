//! 1 пример ФУНКЦИИ
// function showMessage(message){
// console.log(message);
// }

// showMessage('Makers Bootcamp')
// showMessage('JavaScript')

//! 2
// function calcMultity(a, b) {
//     // console.log(a * b);
//     return a * b
// }
// let result = calcMultity(5, 6)
// console.log(result);

//! 3 
// let showMessage = function(message){
//     console.log(message);
// }
// showMessage('Makers')


// let calcMultity = function(a, b){
//     return a * b
// }
// console.log(calcMultity(2, 7))


// let result = calcMultity(7, 2)
// console.log(result);
// function calcMultity(a, b) {
//     return a * b
// }

//! Hoisting
// console.log(a);
// console.log(b);
// var a = 'Makers';
// let b = 'Bootcamp';


//! scope - область видимости
// let count = 0;
// function counter(){
//     // count++
//     let count = 10;
//     console.log(count);
// }
// counter()

// let personName = 'Kani'
// function func(){
//     let personName = 'Kubat'
//     function func2() {
//         let personName = 'Aidai'
//         console.log(personName);
//     }
//     func2()
// }
// func()

// function checkSum(){
//     let a = +prompt('Enter first number');
//     let b = +prompt('Enter second number');

//     let sum = a + b;

//     if(sum === 15){
//         alert('Summa ravna 15')
//     }else if(sum <15){
//         alert('Summa menshe 15')
//     }else{
//         alert('Summa bolshe 15')
//     }
// }
// checkSum()

// function someFunc(){
//     console.log('Hello world');
// }
// let newFunc = someFunc
// console.log(newFunc);

function calcSum (a, b){
    return a + b
}
console.log(calcSum(2,7));