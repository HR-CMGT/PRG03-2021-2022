window.addEventListener('load', init);

//Global variables
let todoItems = [];
let inputField;
let list;

/**
 * Initialize the application
 */
function init()
{
  //Connect variables with HTML elements
  let form = document.querySelector('#todo-form');
  inputField = document.querySelector('#todo-field');
  list = document.querySelector('#list');

  //Add event listeners for form & removal
  form.addEventListener('submit', formSubmitHandler);
  list.addEventListener('click', todoItemClickHandler);

  //Retrieve current items from local storage & add them to the list
  let todoItemsString = localStorage.getItem('todoItems');
  if (todoItemsString !== null) {
    todoItems = JSON.parse(todoItemsString);
    for (let todoItem of todoItems) {
      addTodoItem(todoItem);
    }
  }
}

/**
 * Handle the new input from the form
 *
 * @param e
 */
function formSubmitHandler(e)
{
  e.preventDefault();

  //Check if the field is not empty
  let inputValue = inputField.value;
  if (inputValue !== '') {
    //Add to the HTML list & local storage
    addTodoItem(inputValue);
    todoItems.push(inputValue);
    localStorage.setItem('todoItems', JSON.stringify(todoItems));

    //Reset the field
    inputField.value = '';
    inputField.classList.remove('error');
  } else {
    //Add an error state with CSS
    inputField.classList.add('error');
  }
}

/**
 * Add a new item to the HTML
 *
 * @param todoText
 */
function addTodoItem(todoText)
{
  let listItem = document.createElement('li');
  listItem.innerText = todoText;
  list.appendChild(listItem);
}

/**
 * Remove the clicked list item
 *
 * @param e
 */
function todoItemClickHandler(e)
{
  let todoItem = e.target;

  //Only continue if we clicked on a list item
  if (todoItem.nodeName !== 'LI') {
    return;
  }

  //Remove from local storage
  let itemPosition = todoItems.indexOf(todoItem.innerText);
  todoItems.splice(itemPosition, 1);
  localStorage.setItem('todoItems', JSON.stringify(todoItems));

  //Remove from HTML
  todoItem.remove();
}
