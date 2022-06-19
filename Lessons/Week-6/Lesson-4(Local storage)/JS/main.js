// ! ============= localStorage ===============
// console.log(typeof localStorage);
// localStorage - локальное хранилище браузера.

// getItem - стягивание данных
// синтаксис - localStorage.getItem("ключ-хранилища")

// setItem() - отправка данных
// Синатксис - localStorage.setItem("ключ", "данные которые хотим отправить")

// removeItem - удаляет хранилище по ключу
// Синтаксис - localStorage.removeItem("ключ, который хотим удалить")

// clear - удаляет хранилище полностью
// синтаксис - localStorage.clear()

// localStorage.setItem("breakfast", "eggs"); // т.к. нет такого ключа, мы создали новый ("breakfast") и отправили данные ("eggs")

// localStorage.setItem("lunch", null);
// localStorage.setItem("breakfast", JSON.stringify([1, 2, 3])); // для того чтобы отправить данные в localStorage, нужно переформатировать данные в JSON формат, а именно JSON.stringify()

// let newStorage = JSON.parse(localStorage.getItem("lunch")); //  для того чтобы стянуть данные localStorage, используем метод getItem, и полученный резульат переформатируем в обычный js формат, а именно в JSON.parse()
// console.log(typeof newStorage);

// Создайте новый ключ в localstorage, с названием car. Затем положите туда объект, с ключами model, year, color.
// Стяните данные с вышеуказанного ключа  и нужно перебрать объект, так чтобы каждое значение объекта вышло в консоли

// localStorage.setItem(
//   "car",
//   JSON.stringify({ model: "Mers", year: 2012, color: "black" })
// );
// let carStorage = JSON.parse(localStorage.getItem("car"));
// // console.log(carStorage);
// for (let i in carStorage) {
//   console.log(carStorage[i]);
// }

// sessionStorage.setItem("main", JSON.stringify("js"));

// ! ============= todo list ===============
// ? CRUD - create read update delete
let btn = document.querySelector(".btn");
let inp = document.querySelector(".task-input");
let list = document.querySelector(".task-list");

render();

btn.addEventListener("click", () => {
  // событие на кнопку добавить
  if (inp.value === "") {
    alert("Заполните поле!");
    return;
  }
  let obj = { task: inp.value };
  setItemToStorage(obj);
  render();
  inp.value = "";
});

// Функция для создания новых тасков и отправки в localStorage
// data = []
function setItemToStorage(task) {
  let data = JSON.parse(localStorage.getItem("task-data"));
  data.push(task);
  localStorage.setItem("task-data", JSON.stringify(data));
}

// функция для отображения данных в браузере
function render() {
  if (!localStorage.getItem("task-data")) {
    // проверка на то, есть ли что-нибудь в localStorage, а именно наш ключ task-data
    localStorage.setItem("task-data", JSON.stringify([])); // если такого ключа нет, то создаем его и добавляем первое значение пустой массив
  }

  let newData = JSON.parse(localStorage.getItem("task-data")); // стягиваем массив с localStorage и преобразовываем в обычный формат js
  list.innerHTML = ""; // очищаем страницу
  newData.forEach((item, index) => {
    // перебираем массив и для каждого элемента создаём новый li тег с кнопками delete и edit
    let li = document.createElement("li");
    let btnDelete = document.createElement("button");
    let btnEdit = document.createElement("button");
    li.innerText = item.task;
    btnDelete.innerText = "Delete";
    btnEdit.innerText = "Edit";
    li.append(btnDelete);
    li.append(btnEdit);
    list.append(li);
    btnDelete.addEventListener("click", () => {
      deleteElement(index);
    });
  });
}

// Функция для удаления таска
function deleteElement(id) {
  let data = JSON.parse(localStorage.getItem("task-data"));
  data.splice(id, 1);
  localStorage.setItem("task-data", JSON.stringify(data));
  render();
}