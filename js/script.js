const submitForm = document.querySelector(".todo-list__form");
const input = document.querySelector(".todo-list__input");
const addButton = document.querySelector(".icon-plus");
const list = document.querySelector(".todo-list__list");
const listItems = document.querySelectorAll(".todo-list__item");

let listLength = listItems.length;

function generateItem(text) {
  const html = `
    <li class="todo-list__item">
    <input class="todo-list__checkbox" type="checkbox" id="item_${listLength}" />
    <label class="todo-list__item-text" for="item_${listLength}">
      ${text}
    </label>
    <span class="todo-list__button icon-trash"></span>
  </li>`;

  list.innerHTML += html;
}

function addItem(event) {
  event.preventDefault();
  const todo = input.value.trim();

  if (todo.length) {
    listLength += 1;
    generateItem(todo);
    submitForm.reset();
  }
}

function deleteItem(e) {
  if (e.target.classList.contains("icon-trash")) {
    e.target.parentElement.remove();
  }
}

submitForm.addEventListener("submit", addItem);
addButton.addEventListener("click", addItem);
list.addEventListener("click", deleteItem);
