// let btn = document.getElementById('btn');
// btn.addEventListener('click', function(){
//     console.log('Hello');
// });

// btn.addEventListener('click', ()=>{
//     console.log('hello you');
// })

// btn.onclick = () => alert('hello!!!')

// btn.addEventListener('click', handler)
// btn.addEventListener('click', handler2)


// function handler(){
//     alert('Thank you')
// }

// function handler2 (){
//     alert('Thank you again')
// }

// btn.removeEventListener('click', handler);

// let h1 = document.querySelector('h1')
// let inp = document.querySelector('#inp')
// inp.addEventListener('change', function(event){
//     console.log(event.target.value);
//     h1.innerText = event.target.value
//     event.target.value = ''
// });
// console.log(h1, inp);

// inp.addEventListener('input', function(event){
//     // console.log(event.target.value);
//     h1.innerText = event.target.value
//     console.log(event);
// });

// inp.addEventListener('keydown', function(event){
//     // console.log(event.target.value);
//     h1.innerText = event.key
//     console.log(event);
// });


// let btn = document.querySelector('#btn');
// let inp = document.querySelector('#inp');
// let container = document.querySelector('#container');

// let addElemToContainer = function(){
//     console.log(inp.value);
//     let newElem = document.createElement('div');
//     if(!inp.value) return
//     newElem.innerText = inp.value;
//     container.append(newElem);
//     inp.value = '';
// }

// btn.addEventListener('click', addElemToContainer);
// inp.addEventListener('change', addElemToContainer);

// document.addEventListener('mousemove', function(e) {
//     // console.log('mouse');
//     // console.log(e);
//     console.log(`X=${e.clientX} Y=${e.clientY}`);
// });


// let btn1 = document.querySelector('#btn1')
// let btn2 = document.querySelector('#btn2')

// btn1.addEventListener('click', function(){
//     alert("btn1 was clicked")
// });

// let event = new Event('click');
// // btn1.dispatchEvent(event);
// btn2.addEventListener('click', ()=> {
//     btn1.dispatchEvent(event)
// });

document.addEventListener('DOMContentLoaded', ()=>{
    console.log('Loaded');
});