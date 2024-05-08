
   // Function to add a new to-do item
function addTodo() {
var input = document.getElementById("todo-input");
var todoText = input.value.trim();
if (todoText !== "") {
 var todoList = document.getElementById("todo-list");
 var listItem = document.createElement("li");
 listItem.className = "todo-item";
 listItem.innerHTML = `
 <span>${todoText}</span>
  <button onclick="deleteTodo(this)">Delete</button>
   `;
   todoList.appendChild(listItem);
  input.value = "";
 } else {
   alert("Please enter a valid to-do!");
   }
    }

    // Function to delete a to-do item
    function deleteTodo(button) {
        var listItem = button.parentNode;
        listItem.parentNode.removeChild(listItem);
    }

/*  
let todostorecontainer=document   nvn 
*/

