let form = document.querySelector(".todoInput");
const todoList = document.querySelector(".todolist");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let input = document.querySelector("#text");
  let text = input.value;
  let newTodo = document.createElement("li");
  let newCheckbox = document.createElement("input");
  newCheckbox.type = "checkbox";
  newCheckbox.classList.add("checkbox");
  /* Mark new list items completed */
  newCheckbox.addEventListener("change", function (e) {
    const checkbox = e.target;
    const listItem = e.target.parentNode;
    listItem.classList.add("checked");
    checkbox.remove();
  });
  let newTodoText = document.createElement("span");
  let buttons = document.createElement("button");
  buttons.classList.add("delete", "far", "fa-trash-alt");
  newTodoText.innerText = text;
  newTodo.appendChild(newCheckbox);
  newTodo.appendChild(newTodoText);
  newTodo.appendChild(buttons);
  todoList.appendChild(newTodo);
  input.value = "";
});

/* Delete To Do's */
todoList.addEventListener("click", function (evt) {
  console.log(evt);
  const deletedButton = document.querySelectorAll(".delete");
  for (btn of deletedButton) {
    if (btn == evt.target) {
      const listItem = evt.target.parentNode;
      listItem.remove();
    }
  }
});

/* Mark existing list items completed */
let checkboxInputs = document.querySelectorAll('input[type="checkbox"]');

for (input of checkboxInputs) {
  input.addEventListener("change", function (event) {
    const checkbox = event.target;
    const listItem = event.target.parentNode;
    listItem.classList.add("checked");
    checkbox.remove();
  });
}