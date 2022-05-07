// SELECTORS
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption=document.querySelector(".filter-todo");

// EVENT LISTENERS
// document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);


// FUNCTIONS

function addTodo(event) {
  //Prevent form from submitting
  event.preventDefault();

  //  TODO div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");

  // Create LI
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);

  // ADD TODO TO LOCAL STORAGE
  // saveLocalTodos(todoInput.value);


  //    check mark  button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);

// delete button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn");
  todoDiv.appendChild(trashButton);

  // APPEND TO LIST
  todoList.appendChild(todoDiv);

  // clear to do input value
  todoInput.value="";
}

function deleteCheck(event){
  const item=event.target;

  // DELETE
  if(item.classList[0]==='trash-btn')
  {
    const todo=item.parentElement;

    // Animation here
    todo.classList.add('fall');
    removeLocalTodos(todo);
    todo.addEventListener('transitioned',function(){
    todo.remove();
    });
    
  }

  // CHECK MARK
  if(item.classList[0]==="complete-btn")
  {
    const todo=item.parentElement;
    todo.classList.toggle("completed");
  }


}
function filterTodo(event){
  const todos=todoList.childNodes;
  console.log(todos);
  todos.forEach(function(todo){
switch(event.target.value)
{
  case "all":
    todo.style.display="flex";
    break;

    case "completed":
      if(todo.classList.contains('completed')){
        todo.style.display="flex";

      }
      else{
        todo.style.display="none";
      }
      break;

      case "uncompleted":
      if(!todo.classList.contains('completed')){
      todo.style.display="flex";

      }
      else{
        todo.style.display="none";
      }
      break;


}

  });


}



