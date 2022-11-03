class Todo {
  constructor(id, content, done) {
    this.id = id;
    this.content = content;
    this.done = done;
  }
}

let todoOne = new Todo(Date.now(), "Buy plane tickets", false);

let todoTwo = new Todo(Date.now(), "Book a hotel", false);

let todoThree = new Todo(Date.now(), "Pack my things", false);

let todos = [todoOne, todoTwo, todoThree];

let addButton = document.getElementById("mybtn");
addButton.addEventListener("click", function () {
  let inputField = document.getElementById("myinput");
  let inputText = inputField.value;
  let userInput = new Todo(Date.now(), inputText, false);

  if (inputText !== " ") {
    todos.push(userInput);

    displayTodos();
  }
});

function displayTodos() {
  let myList = document.getElementById("myList");
  myList.innerHTML = "";

  for (let i = 0; i < todos.length; i++) {
    let item = document.createElement("li");
    let check = document.createElement("input");
    let todoText = document.createElement("span");
    check.setAttribute("type", "checkbox");

    item.className = "li";
    //check.innerHTML = "Test";

    if (todos[i].done) {
      item.classList.add("checked");
    }

    check.addEventListener("click", () => {
      if (todos[i].done === false) {
        todos[i].done = true;
      } else {
        todos[i].done = false;
      }
      displayTodos();
    });

    item.appendChild(check);
    item.appendChild(todoText);
    myList.appendChild(item);

    todoText.innerHTML += todos[i].content;
  }
}
displayTodos();
