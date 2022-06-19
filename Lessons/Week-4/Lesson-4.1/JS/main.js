//? Существует два способа создания регулярного выражения.

//! Первый способ - через специальную функцию конструктор new Regex.
// Синтаксис:
// let str = new RegExp("шаблон", "флаги")

//! Второй способ - через слэши
// Синтаксис
// let str = /шаблон/флаги

//! Флаги
// i - игнорирует флаги
// g - глабальный поиск
// m - многострочный поиск
// s - режим "dotall", точка включает перевод строки \n
// u - полная поддержка юникода
// y - поиск на кокретной позиции в тексте 

// let str = 'I believe I can fly'
// new pattern1 = new RegExp("i", "ig")
// let pattern2 = /i/ig

//! Методы RegExp
// let str = 'I believe I can fly. I believe I can touch the sky'
//? Метод match возвращает совпадения в виде массива, а если совпадений нет, он вернется в null.
// Синтаксис
// строка.match(шаблон)

// let pattern1 = /i/gi
// let result = str.match(pattern1)
// console.log(result);

//? Метод replace заменяет совпадения другой строкой, которая передается вторым аргументом в метод. 
// Синтаксис:
// строка.replace(шаблон, замена)

// let myStr = 'Typescript';
// let pattern1 = /Type/;
// let result = myStr.replace(pattern1, "Java");
// console.log(result);

//? Метод test проверяет, есть хоть одно совпадение. 
// Синтаксис:
// шаблон.test(строку)

// let str = "Username: Sanzhar";
// let pattern1 = /user/i;
// let result = pattern1.test(str);
// console.log(result);

//? Метод search ищет совпадения, если находит, то возвращает индекс совпадения. В случае отсуствия возвращает -1.
// Синтаксис 
// строка.search(шаблон)

// let str = "Ekaterina, Aktilek, Takhmina";
// let pattern2 = /kate/;
// let result = str.search(pattern2)
// console.log(result);

//! Символьные классы 
//? \w ищет латинские буквы
// let str = "Hello";
// let pattern1 = /\w/;
// let result = str.match(pattern1);
// console.log(result);

//? \d ищет числа;
// let str = 'password: 1224'
// let pattern2 = /\d/g
// let result = str.match(pattern2)
// console.log(result);

//? ^ и $
// let str = "Mary had a little lamb"
// let pattern2 = /^Mary/
// let result = str.replace(pattern2, "Ekaterina")
// console.log(result);

// let str = "Mary had a little lamb"
// let pattern = /Lamb$/i
// let result = pattern.test(str)
// console.log(result);

//! Квантификаторы
//? * - ноль или более
//? + - один или более
//? ? - ноль или один
//? {n} -  n-е количество 
//? {n, x} - диапазон
//? {n, }  - n и более

// let str = 'I am 900 years old';
// let pattern = /\d{3}/
// let result = str.replace(pattern, 20)
// console.log(result);

//? 1) Найдите все строки по шаблону 3 буквы a, затем буква b и поменяйте 3 буквы a на знак '!'. То есть из 'aaab' нужно сделать '!b'.
// console.log(('aaab').replace(/aaa/, "!"))

//? 2) Дана строка с целыми числами. С помощью регулярки преобразуйте строку так, чтобы вместо этих чисел стояли их квадраты.
// let str = '10 2 3 4';
// let pattern = /\d+/g;
// str = str.replace(pattern, (number) => number * number) 
// console.log(str);
