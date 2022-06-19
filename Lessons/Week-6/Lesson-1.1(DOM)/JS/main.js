//! getElements
//? Все узлы, элементы, методы и свойства DOM доступны через глобальный объект document.
// console.log(document);
// console.log(document.documentElement); // html - только для чтения.
// console.log(document.head);
// console.log(document.body);

// let title = document.getElementsByTagName('h1');
// console.log(title[0]);

// let block = document.getElementById('block');
// console.log(block);

// let elem = document.getElementsByClassName('elem');
// console.log(elem);

// for(let i of elem){
//     console.log(i);
// };

// let blockName = document.getElementsByName('attrName');
// console.log(blockName); // Заменили полностью на аттрибут id

//! querySelector/all
//? метод querySelector() возвращает первое совпадение

// let elem = document.querySelector('.elem');
// console.log(elem);

//? Метод querySelector() возвращает все совпадения, в виде узла NodeList

// elem = document.querySelectorAll('.elem'); // NodeList можно перебрать только одним методом массива forEach
// console.log(elem);
// elem = document.getElementsByClassName('elem') // HTMLCollection не работает метод массива forEach
// elem.forEach((item) => console.log(item));

// let divList = document.querySelectorAll('div');
// console.log(divList);

//! createElement / createTextNode / innerHTML / innerText

//? createElement() - создание новых элементов, применяется к объекту document.

let newDiv = document.createElement('div');
let newText = document.createTextNode('createTextNode - строка, которая создает текстовый узел');
newDiv.prepend(newText);
console.log(newDiv);

let addInfo = document.getElementById('addInfo')
addInfo.prepend(newDiv);

// console.log(newDiv.innerText);
newDiv.innerText = 'Я перезаписал текст внутри div с id addInfo'

//? innerText = с помощью него можно обратиться к тексту нашего элемента. Также можно через знак "=" перезаписать полностью весь контент (всё содержимое элмента)

newDiv.innerHTML = "<h2>Перезаписываю внутренний, добавляя новый элемент</h2>";
//? innerHTML - видит запись тегов(<h2>...</h2>)

// ! append / prepend / before / after

// ? Метод append() добавляет узлы в конец указанного родительского элемента (работает как push())
let ul = document.querySelector("ul");
let newElem = document.createElement('li');
newElem.innerText = "Новый элемент списка";
ul.append(newElem);

//? Метод prepend() - добавляет узлы в начало родительского элемента (работает как unshift())
newElem.innerText = 'Новый список с помощью prepend';
ul.prepend(newElem);

//? Метод before() добавляет узел жо элемента 
let input = document.createElement('input')
ul.before(input);

//? Метод after() добавляет узел после элемента
let button = document.createElement('button');
button.innerText = 'Нажми меня';
ul.after(button);

//! append() VS appendChild()
//? append() - принимает объекты узла и также строку, в то время как appendChild() принимает только узел
// div.append('рандомный текст') //сработает 
// div.appendChild('рандомный текст') // не стработает
//? 2. append() позволяет добавлять несколько элементов, в то же время как appendChild допускает один элемент.
// div.append('<h2>text</h2>, <input type = "text"/>) // сработает
// div.appendChild('<h2>text</h2>, <input type = "text"/>) // НЕ сработает

//! classList 
const block2 = document.querySelector('#block2');
// добавление классов
block2.classList.add('newClass');

// удаление классов
block2.classList.remove('unit')
console.log(block2.classList);

// добавление если нет, удаление если нет
block2.classList.toggle('random');
block2.classList.toggle('random');
block2.classList.toggle('random');
console.log(block2.classList);

// проверка (true/false)
let answer = block2.classList.contains('newClass')
console.log(answer);

//! style 
document.body.style.backgroundColor = 'orange';

let style = `
font-size: 20px;
color: white;`
document.querySelector('*').style = style