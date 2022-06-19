let btn = document.getElementById('button');
let body = document.querySelector('body')

//? addEventListener() - слушатель событий. Один из способов добавления event(события).
// Синтаксис: название_элемента.addEventListener(названия_события, callBack function) 
// function changeColor() {
//     body.style.backgroundImage = "url(https://static.wixstatic.com/media/f11603_7e245f139d354f2fa1acba92a5f51972~mv2.gif/v1/fill/w_320,h_320,q_90/f11603_7e245f139d354f2fa1acba92a5f51972~mv2.gif)"
// };
// // btn.addEventListener('click', changeColor);

// btn.onclick = changeColor

//! addEventListener VS on_название_события
//? 1) в addEventListener() можно каждый раз добавлять новое событие, но при "on_название_события" каждое новое созданое событие перезаписывается (можно добавить только одно события).
//? 2) в addEventListener() и on_название_события в main. js передаем саму функцию (либо название), а в index.html on_название_события нужно передать название функции и вызвать её.
 
//! События JS
//todo События на мышку
//? click - на левый клик мышью
function changeColor() {
    body.style.backgroundImage = "url(https://static.wixstatic.com/media/f11603_7e245f139d354f2fa1acba92a5f51972~mv2.gif/v1/fill/w_320,h_320,q_90/f11603_7e245f139d354f2fa1acba92a5f51972~mv2.gif)"
};
btn.onclick = changeColor

//? contextmenu - когда кликнули правой кнопкой мышью
btn.oncontextmenu = ()=>{
    body.style.backgroundImage = "url(https://c.tenor.com/F0PvAS2uXMcAAAAC/funny-dancing-spiderman-dancing-spiderman.gif)"
};

//? mouseover / mouseout - когда мышь наводится на элемент и наоборот
btn.onmouseover = ()=>{
    body.style.backgroundImage = 'url(https://media1.giphy.com/media/TIEh1VS5EYQt5QbODH/giphy.gif)'
};
btn.onmouseout = ()=>{
    body.style.backgroundImage = 'url(https://c.tenor.com/Gh5s0NyMlnYAAAAC/perfect-blue-scream.gif)'
};

//? mousedown / mouseup
let trump = document.getElementById("Trump");
trump.onmousedown = () => {
  trump.style.width = "500px";
};

trump.onmouseup = () => {
  trump.style.width = "250px";
};

//? mousemove - при движении мыши
// trump.onmousemove = (event)=>{
//     console.log(event);
// };

//? Работая с обработчиками событий важно знать, что обработчики, в нашем примере onmousemove, дают доступ к такому объекту событий - event. Данный объект можно словить в качестве параметра передаваемой функции(т.к это всего лишь параметр называть его можно как угодно, это может быть "e", xyz, event). Объект событий дает нам доступ к атрибутам и свойствам определенного события, в нашем случае событие mousemove имеет такие свойства как target, buttons, clientX, clientY и многие другие. Свойство target показывает на каком именно HTML объекте сработало событие, в нашем случае картинка в теге img, с id trump - img#trump, с помощью свойств clientX, clientY можно отслеживать координаты движения мыши.

//! События на input
let inp = document.getElementById('inp');
let title = document.getElementById('title');
// inp.addEventListener('change', (event)=>{
//     title.innerText = event.target.value;
// });

//? input
inp.addEventListener('input', (event)=>{
    title.innerText = event.target.value;
});

//? focus
//? dblclick
//? mouseleave
