        
/* Add To Do's */
let form = document.querySelector(".todoInput");
const todoList = document.querySelector(".todolist");

form.addEventListener("submit",function(event) {
    event.preventDefault();
    let input = document.querySelector("#text");
    let text = input.value;
    let newTodo = document.createElement("li");
    let buttons = document.createElement("button");
    buttons.innerText = "Delete";
    buttons.classList.add("delete");
    newTodo.innerText = text;
    newTodo.appendChild(buttons);
    todoList.appendChild(newTodo);  
    input.value = "";
});

/* Delete To Do's */

todoList.addEventListener("click", function(evt){
    console.log(evt);
    const deletedButton = document.querySelectorAll(".delete");
    for (btn of deletedButton) {
        if (btn == evt.target){
        const listItem = evt.target.parentNode;
        listItem.remove();
        }
    }
});