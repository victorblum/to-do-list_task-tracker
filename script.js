const sortButton = document.getElementById('sort');
const enterButton = document.getElementById('enter');
const resetButton = document.getElementById('resetTask');
const mainForm = document.getElementById('taskForm');
const plusButton = document.querySelector('.plus');

const taskRow = document.getElementById('newTask');
const taskListElement = document.querySelector('.taskList');
const ulTaskListElement = document.querySelector('.taskList ul');

// Writing and adding new task
mainForm.addEventListener('submit', clickEnterButton);
function clickEnterButton(event) {
    event.preventDefault();
    if (taskRow.value.trim() === '' || taskRow.value === null) {
        return false;
    } 
    const newLi = document.createElement('li');
    const liSpan = document.createElement('span');
    newLi.classList.add("liItem");
    liSpan.classList.add("spanItem");
    liSpan.innerText=taskRow.value;
    ulTaskListElement.append(newLi);
    newLi.append(liSpan);
    newLi.draggable=true;
    liSpan.contentEditable=true;

    const newButton = document.createElement('span')
    newButton.innerHTML="&times;";
    newButton.classList.add("liButton");
    newLi.append(newButton);
    
    taskRow.value='';
    taskListElement.style.display='block';
    liEditButton();
    liDeleteButton(newButton);
}

// Task editing
function liEditButton() {
    const textfields = document.querySelectorAll(".spanItem"); 
    for(i=0; i<textfields.length; i++){
    textfields[i].addEventListener("keypress", function(e) {
        if (e.shiftKey || e.which === 13) {
            e.preventDefault();
          } else if (this.textContent.length >= 25){
            e.preventDefault();
            return false;
        }
    }, false);
}}

// Deleting a task
function liDeleteButton(button) {
    button.addEventListener("click", (event) => {
        const liElements = document.querySelectorAll('.liItem');
        if (liElements.length === 1) {
            button.parentElement.remove();
            event.stopPropagation();
            taskListElement.style.display='none';
        } else {
            button.parentElement.remove();
            event.stopPropagation();
        }
    });
}

// Sorting tasks
let flag = 0;
sortButton.addEventListener('click', function () {
if (flag === 0) {
    liSortButton(ulTaskListElement);
    flag = 1;
  } else {
    liSortButtonBack(ulTaskListElement); 
    flag = 0;
  }
 })

function liSortButton() {
    const liElements = document.querySelectorAll('.liItem');
    if (liElements.length >= 2) {
    Array.from(ulTaskListElement.getElementsByTagName("li"))
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach(li => ulTaskListElement.appendChild(li));
    sortButton.style.background="url('images/Group\ 90.svg') no-repeat";
    sortButton.onmouseover = () => {
        sortButton.style.background="url('images/Group\ 91.svg') no-repeat";
    }
    sortButton.onmouseout = () => {
        sortButton.style.background="url('images/Group\ 90.svg') no-repeat";
    }}
}

  function liSortButtonBack() {
    const liElements = document.querySelectorAll('.liItem');
    if (liElements.length >= 2) {
    Array.from(ulTaskListElement.getElementsByTagName("li"))
      .sort((a, b) => b.textContent.localeCompare(a.textContent))
      .forEach(li => ulTaskListElement.appendChild(li));
    sortButton.style.background="url('images/Group\ 74.svg') no-repeat";
    sortButton.onmouseover = () => {
          sortButton.style.background="url('images/Group\ 73.svg') no-repeat";
    }
    sortButton.onmouseout = () => {
          sortButton.style.background="url('images/Group\ 74.svg') no-repeat";
    }}
}

