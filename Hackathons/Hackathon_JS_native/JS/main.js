var modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let modal2 = document.getElementById("inModal")


let btn1 = document.querySelector(".btn1")
let inp = document.querySelector(".taskFirst");
let list = document.querySelector(".task-list");

let adds = document.querySelector(".taskSecond");
let listadds = document.querySelector(".task-list1");


btn.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

btn1.onclick = function () {
  modal.style.display = "block";
};

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};

btn1.addEventListener("click", () => {
  if (inp.value === "") {
    alert("Введите напиток!");
    return; 
  }

  let obj = { task: inp.value }; 
  localStorage.setItem("products", JSON.stringify(obj))
  // setItemToStorage(obj);
  render(); 
  inp.value = ""; 
});

btn1.addEventListener("click", () => {
  if (adds.value === "") {
    alert("Введите добавки!");
    return; 
  }

  let obj = { task: adds.value }; 
  localStorage.setItem("products", JSON.stringify(obj))

  // setItemToStorage(obj); 
  render(); 
  adds.value = ""; 
});