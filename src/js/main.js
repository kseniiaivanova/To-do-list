let todoOne = {
  content: "Buy plane tickets",
  done: false,
};

let todoTwo = {
  content: "Book a hotel",
  done: false,
};

let todoThree = {
  content: "Pack my things",
  done: false,
};

let todos = [todoOne, todoTwo, todoThree];

//function displayTodos() {
for (let i = 0; i < todos.length; i++) {
  let myList = document.getElementById("myList");
  let check = document.createElement("input");
  check.setAttribute("type", "checkbox");

  let item = document.createElement("li");
  item.classList.add("li");

  myList.appendChild(item);
  item.appendChild(check);
  item.innerHTML += todos[i].content;

  check.addEventListener("change", () => {
    console.log("hej!");
    if (check.checked) {
      console.log("oj");
    } else {
      console.log("hej");
    }
  });
}
