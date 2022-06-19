// const str = 'Привет Hello! My name is Kani. I am 22 years old and I live in Bishkek for 12 years';
// const regexp = /Kani/; // слово
// const regexp = /\d\d/g; // цифры
// const regexp = /\w\w\w\w\w/; // буквы латинские
// const regexp = /\W\W\W\W/; // буквы не латиница
// const regexp = /\D\D\D/ // любые символы

// const str = 'Hello we are Alan and Ulan, Elan'
// const regexp = /[AUE]lan/g;

// const str = 'Today is 20.10.2020';
// const regexp = /\d\d.\d\d.\d\d\d\d/;
// const regexp = /\d{2}.\d{2}.\d{4}/;
// const regexp = /\./
// const result = str.match(regexp);
// console.log(result);

// let str = "We see you. we need you";
// let pattern = /we/gi;
// console.log(str.replace(pattern, "I"));

// let str = prompt('Enter word: ')
// let regexp = new RegExp(/[a-zA-Z]/,'g')
// console.log(regexp.test(str));

// let str = prompt('Enter word');
// let regexp = new RegExp(/\d+/,'g');
// console.log(regexp.test(str));

// let str = prompt('Enter product weight');
// let regexp = new RegExp(/^\d+(kg|t|g)$/, 'gi')
// console.log(regexp.test(str));

// let str = 'Name: Jack, Lastname: Alan';
// let newArr = [];
// for(i = 0; i < str.length; i++){
//     if(str[i].toLocaleLowerCase() !== 'a')newArr.push(str[i])
//     else newArr.push('*')
// }

// let newStr = newArr.join('');
// console.log(newStr);
// console.log(str.replace(/a/gi, "*"));

// let str = prompt('Enter your phone number:');
// let regexp = new RegExp(/^\+996\d{9}/, 'g')
// console.log(regexp.test(str));

// if(regexp.test(str)){
//     alert('Correct')
// }else{
//     alert('Wrong')
// }


// let str = prompt('Enter word');
// console.log((/[A-Za-z0-9а-яА-Я]{5,}/).test(str));
// if ((/[A-Za-z0-9а-яА-Я]{5,}/).test(str)){
//   alert('Correct')
// }else{
//   alert('Wrong')
// }

// let str = 'aaa aaa aaa'
// let pattern = /aaa$/
// console.log(str.replace(pattern, '!'))
  // console.log(('aaa aaa aaa').replace(/aaa$/, '!'));

  function checkTask(str){
    console.log(('aaa aaa aaa').replace(/aaa$/, "!"));
   }
   checkTask()