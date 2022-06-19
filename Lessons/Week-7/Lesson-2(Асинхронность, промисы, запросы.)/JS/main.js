//! Синхронность и асинхронность
// JavaScript — это однопоточный язык программирования, в котором может быть выполнено только что-то одно за раз. То есть, в одном потоке движок JavaScript может обработать только 1 оператор за раз. Используя асинхронность JS вы можете выполнять другие функции без блокирования основного потока.

// for(let i = 0; i < 10000000; i++){

// };
// console.log('Сработает после того, как цикл закончит работу');

// alert('Будет работать до тех пор, пока не закроем alert')
// console.log('не сработает пока открыт alert');

//! setTimeout() & setInterval()
// Мы можем вызвать функцию не в данный момент, а позже, через заданный интревал времени.

//? setTimeout - позволяет вызвать функцию один раз, через определенный период времени.
// setTimeout(()=>{
//     console.log('Async');
// }, 2000);
// console.log('Синхронный');

//? setInteval - позволяет вызвать функцию регулярно, повторяя вызов, через определенный интервал времени.
// let a = 0;
// setInterval(()=>{
//     console.log(a++);
// }, 1000);

//? clearTimeout - отменяет timeout, ранее установленный вызовом setTimeout()
// let time1 = setTimeout(()=>{
//     console.log(1);
// }, 1000);
// let time2 = setTimeout(()=>{
//     console.log(2);
// }, 2000);
// clearTimeout(time1);

//? clearInterval - отменяет интервал, ранее установленный вызовом setInterval()
// let num = 0;
// let interval = setInterval(()=>{
//     console.log(num++);
// }, 1000)

// setTimeout(()=>{
//     clearInterval(interval)
// }, 5000)

//todo создай в index.html два дива .wrapper и .box

// let btn = document.querySelector('.btn');
// btn.addEventListener('click', ()=>{
//     let box = document.querySelector('.box');
//     let pos = 0;
//     function frame(){
//         if(pos == 300){
//             clearInterval()
//         }else{
//             pos++
//             box.style.top = pos +'px';
//             box.style.left = pos + 'px';
//         }
//     }
//     let id = setInterval(frame)
// });

//! Promise
//? Promise - обещание(объект). Интерфейс Promise (промис) представляет собой обёртку для значения, неизвестного на момент создания промиса. Он позволяет обрабатывать результаты асинхронных операций так, как если бы они были синхронными: вместо конечного результата асинхронного метода возвращается своего рода обещание (дословный перевод слова "промис") получить результат в некоторый момент в будущем.

// Promise может находиться в трёх состояниях:

// ожидание (pending): начальное состояние, не исполнен и не отклонён.
// исполнено (fulfilled): операция завершена успешно.
// отклонено (rejected): операция завершена с ошибкой.
// const myFirstPromise = new Promise((resolve, reject)=>{
//     let num = 1 + 1;
//     if(num === 3){
//         resolve('Успешно')
//     }else{
//         reject('Безуспешно')
//     }
// });
// console.log(myFirstPromise);

// then - для того, чтобы отловить успешный результат.
// catch - для того, чтобы отловить безуспешный результа.
// finally - необязательный параметр, который выведется в конце, завершается этапом 

// let obj = {name:'Boris', status:'JS'}
// console.log(obj.status);

// myFirstPromise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log('Промис вернул результат');
// });

//? pending пример из видео
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(
//         new Promise((res, rej) => {
//           setTimeout(() => {
//             res("sayHello");
//           }, 1000);
//         })
//       );
//     }, 1000);
//   });
//   console.log(p);
//   p.then((promise) => console.log(promise)).catch((error) => console.log(error))

//! Запросы
//? XMLHttpRequest
// const xhr = new XMLHttpRequest()
// xhr.open('GET', 'https://reqres.in/api/users?page=2');
// xhr.send();
// xhr.onload = ()=>{
//     let array = JSON.parse (xhr.response);
//     console.log(array.data);
//     array.data.forEach((item) => {
//         console.log(item.first_name);
//     });
// };

//! fetch
// fetch('https://reqres.in/api/users?page=2').then((res)=>{res.json(); // JSON.parse(res)
// }).then((info)=>{
//     console.log(info.data);
//     info.data.forEach((item)=>{
//         console.log(item.first_name);
//     });
// }).catch((error)=>{
//     console.log(error);
// });


