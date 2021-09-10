const users = require("./util.js");

const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");
const userUl = document.getElementById("users");

// Var i fila fra før
const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  for (const user of users) {
    userUl.innerHTML += `<li><span>${user.id}</span><span>${user.name}</span><span>${user.age}</span></li>`;
  }
};

const main = () => {
  createTableUI(users);
};

const filterByName = () => {
  const name = searchInput.value;
  const temp = users.filter((element) => element.name.includes(name));
  createTableUI(temp);
};

const filterByAge = () => {
  const age = filterInput.value;
  const temp = users.filter((element) => element.age >= age)
  createTableUI(temp);
}

searchInput.addEventListener("keyup", filterByName);
filterButton.addEventListener("click", filterByAge);

main();
