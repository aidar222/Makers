// Сохраняем API (базу данных) в переменную API
const API = "http://localhost:8000/books";

// Сохраняем элементы из html переменные
let inpName = document.getElementById("inpName");
let inpAuthor = document.getElementById("inpAuthor");
let inpImage = document.getElementById("inpImage");
let inpPrice = document.getElementById("inpPrice");
let btnAdd = document.getElementById("btnAdd");
let sectionBooks = document.getElementById("sectionBooks");
let btnOpenForm = document.getElementById("flush-collapseOne");

let searchValue = "1"; // переменная для нашего поиска (снизу нельзя создать)

let currentPage = 1; // Переменная для пагинации, текущая страница
let countPage = 1; // количество всех страниц

// Навешиваем событие на кнопку Добавить
btnAdd.addEventListener("click", () => {
  if (
    // проверка на заполненность полей
    !inpName.value.trim() ||
    !inpAuthor.value.trim() ||
    !inpImage.value.trim() ||
    !inpPrice.value.trim()
  ) {
    alert("Заполните поле!");
    return;
  }
  let newBook = {
    // создаём новый обьект, куда добавляем значения наших инпутов
    bookName: inpName.value,
    bookAuthor: inpAuthor.value,
    bookImage: inpImage.value,
    bookPrice: inpPrice.value,
  };
  creatBooks(newBook); // Вызываем функция для добавления новой книги в базу данныхи передаем в качестве аргумента обьект, созданный выше
  readBooks(); // Вызываем функцию для отображения данных
});
// ! ---------------------- CREATE ---------------------------
// Функция для добавления новых книг в базу данных(db.json)
function creatBooks(book) {
  fetch(API, {
    // отправляем запрос с помощью метода POST для отправки данных
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(book),
  }).then(() => readBooks());
  // Совершаем очистку инпутов
  inpName.value = "";
  inpImage.value = "";
  inpAuthor.value = "";
  inpPrice.value = "";
  // Меняем класс с помощью toggle у аккориона, для того чтобы закрывался аккордион при клике на кнопку добавить
  btnOpenForm.classList.toggle("show");
}

// ! ------------------------- READ ----------------------------
// Создаём функцию для отображения
function readBooks() {
  //отправляем запрос в db.json с начтройками поиска и пагинации. Знак q- нужен для того чтобы найти элемент во всей базе данных. Знак & - ставится если добавляем новые настройки предыдущим. _page- для того чтобы открыть конкретную страницу. _limit - для отображения нескольких элементов на сайте.
  fetch(`${API}?q=${searchValue}&_page=${currentPage}&_limit=5`) // получение данных из db.json
    .then((res) => res.json())
    .then((data) => {
      sectionBooks.innerHTML = ""; // очищаем тег section, чтобы не было дубликатов
      data.forEach((item) => {
        // перебираем наш полученный массив с обьектами
        // добавляем в наш тег section вёрстку карточек с данными из массивов, при каждом цикле
        sectionBooks.innerHTML += `
        <div class="card mt-3" style="width: 15rem;">
  <img src="${item.bookImage}" class="card-img-top" style="height:280px" alt="${item.bookName}">
  <div class="card-body">
    <h5 class="card-title">${item.bookName}</h5>
    <p class="card-text">${item.bookAuthor}</p>
    <p class="card-text">${item.bookPrice}</p>
    <button class="btn btn-outline-danger btnDelete" id="${item.id}">Удалить</button>
    <button class="btn btn-outline-warning btnEdit" id="${item.id}" data-bs-toggle="modal"
    data-bs-target="#exampleModal">Изменить</button>
  </div>
</div>
        `;
      });
      sumPage(); //вызов функции для нахождения колличества страниц
    });
}
readBooks(); // один раз вызываем функцию отобрадения данных для того, чтобы при посещении сайта данные отобразились
// !---------------------- DELETE ------------------------
// Событие на кнопку удалить
document.addEventListener("click", (event) => {
  // с помощью обьекта event ищем класс нашего элемента
  let del_class = [...event.target.classList]; // сохраняем в массив с классами в переменную, используя spread operator
  if (del_class.includes("btnDelete")) {
    //проверяем, есть ли в нашем поиске класс btnDelete
    let del_id = event.target.id; // сохраняем в переменную id нашего элемента по которому кликнули
    fetch(`${API}/${del_id}`, {
      method: "DELETE",
    }).then(() => readBooks()); // чтобы вызов функции отображения данных сначала подождал запрос DELETE выполнился затем сработал( делает синхронный код асинхронным)
  }
});
// ! DELETE FINISH
// !------------------ EDIT START ----------------------
// Сохраняем в переменные названия инпутов и кнопки
let editInpName = document.getElementById("editInpName");
let editInpAuthor = document.getElementById("editInpAuthor");
let editInpImage = document.getElementById("editInpImage");
let editInpPrice = document.getElementById("editInpPrice");
let editBtnSave = document.getElementById("editBtnSave");

document.addEventListener("click", (event) => {
  let editArr = [...event.target.classList];
  if (editArr.includes("btnEdit")) {
    let id = event.target.id;
    fetch(`${API}/${id}`) // с помощью запроса GET обращаемся к конкретному обьекту
      .then((res) => res.json())
      .then((data) => {
        // сохраняем в инпутфы модального окна, данные из db.json
        editInpName.value = data.bookName;
        editInpAuthor.value = data.bookAuthor;
        editInpImage.value = data.bookImage;
        editInpPrice.value = data.bookPrice;
        // добавляем при помощи метода setAttribute id в нашу кнопку Cохранить, для того чтобы передать в дальнейшем в аргументы функции editBook()
        editBtnSave.setAttribute("id", data.id);
      });
  }
});

// !------------------ EDIT FINISH ----------------------

// Событие на кнопку сохранить
editBtnSave.addEventListener("click", () => {
  // Создаём обьект с измененными данными, в дальнейшем для отправки в db.json
  let editedBook = {
    boookName: editInpName.value,
    bookAuthor: editInpAuthor.value,
    bookImage: editInpImage.value,
    bookPrice: editInpPrice.value,
  };
  editBook(editedBook, editBtnSave.id); // вызов функции для отправки измененных данных в db.json, в качестве аргумента передаем выше созданный обьект и значение аттрибута id из кнопки сохранить
});

// Функция для отправки измененных данных в db.json
function editBook(objEditBook, id) {
  // в параметры принимаем: измененный обьект и id по которому будем обращатся
  fetch(`${API}/${id}`, {
    method: "PATCH", // используя этот метод для запроса на изменения данных в db.json
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(objEditBook),
  }).then(() => readBooks()); // вызов функции для отображения данных сразу же после нажатия на кнопку сохранить
}

// ! ------------------ SEARCH ---------------------------
let inpSearch = document.getElementById("inpSearch");

inpSearch.addEventListener("input", (event) => {
  searchValue = event.target.value;
  readBooks(); // Вызываем функции для отображение данныз, сразу же после изменения я инпута
});

// !-------------------------- PAGINATION --------------------------
// сохраняем в переменные кнопеи назад и вперед из index.html для пагинации
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");

// событие на кнопку prev
prevBtn.addEventListener("click", () => {
  if (currentPage <= 1) return; //проверка на то чтобы текущая страница не уменьшалась единички
  currentPage--; //(currentPage = currentPage -1;) уменьшение текущей страницы на одну, если условие не сработает
  readBooks(); // вызой функции для отображение данных после нажатия кнопки пред
});

// событие на кнопку след
nextBtn.addEventListener("click", () => {
  if (currentPage >= countPage) return; //проверка на то чтобы текущая страница не увеличилась количества всез страниц(countPage)
  currentPage++; // увеличение текущей страницы на одну, если условие не сработает
  readBooks(); //вызой функции для отображение данных при нажатии кнопки след
});

// функция для нахождения количества страниц
function sumPage() {
  fetch(API) //запрос в db.json для того чтобы получитть весь массив с книгами
    .then((res) => res.json()) // переформатируем в обычный формат js
    .then((data) => {
      // сохраняем в переменную колличество всех страниц, с помощью свойства length узнаем длирну массива затем делим на лимит(сколько карточек хотим отобразить на одной странице) и обворачиваем в метод Math.ceil() для того чтобы округлить результат
      countPage = Math.ceil(data.length / 6);
    });
}
