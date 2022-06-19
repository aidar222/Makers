// Сохраняем API (базу данных) в переменную API
const API = "http://localhost:8000/books";

// Сохраняем элементы из html переменные
let inpName = document.getElementById("inpName");
let inpAuthor = document.getElementById("inpAuthor");
let inpImage = document.getElementById("inpImage");
let inpPrice = document.getElementById("inpPrice");
let btnAdd = document.getElementById("btnAdd");
let sectionBooks = document.getElementById("sectionBooks");

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
  });
  // Совершаем очистку инпутов
  inpName.value = "";
  inpImage.value = "";
  inpAuthor.value = "";
  inpPrice.value = "";
  //Меняем класс с помощью toggle у аккордеона, для того чтобы закрывался аккордеон при клике на кнопку добавить
  btnOpenForm.classList.toggle('show')
}

// ! ------------------------- READ ----------------------------
// Создаём функцию для отображения
function readBooks() {
  fetch(API) // получение данных из db.json
    .then((res) => res.json())
    .then((data) => {
      sectionBooks.innerHTML = "";// очищяем тег section, чтобы не было дубликатов
      data.forEach((item) => { // перебираем наш полученный массив с обьектами
        // добавляем в наш тег section вёрстку карточен с данными из массивов, при каждом цикле
        sectionBooks.innerHTML += `
        <div class="card mt-3" style="width: 15rem;">
  <img src="${item.bookImage}" class="card-img-top" style="height:280px" alt="${item.bookName}">
  <div class="card-body">
    <h5 class="card-title">${item.bookName}</h5>
    <p class="card-text">${item.bookAuthor}</p>
    <p class="card-text">${item.bookPrice}</p>
    <button class="btn btn-outline-danger btnDelete">Удалить</button>
    <button class="btn btn-outline-warning btnEdit">Изменить</button>
  </div>
</div>
        `;
      });
    });
}
readBooks();