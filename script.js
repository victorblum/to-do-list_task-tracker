const sortButton = document.getElementById('sort');

const taskRow = document.getElementById('newTask');
const deleteButton = document.getElementById('deleteTask');

const enterButton = document.getElementById('enter');

const liDeleteButton = document.querySelectorAll('.liButton');
const ulTaskListElement = document.querySelector('.taskList ul');
const taskListElement = document.querySelector('.taskList');

enterButton.addEventListener('click', clickEnterButton);
deleteButton.addEventListener('click', clickDeleteButton);
// liDeleteButton.addEventListener('click', clickLiDeleteButton);
// sortButton.addEventListener('click', clickSortButton);

function clickEnterButton() {
    if (taskRow.value === '' || taskRow.value === ' ') {
        alert('Enter your task');
    } else {
    const newLi = document.createElement('li');
    const newButton = document.createElement('button')
    newLi.innerText=taskRow.value;
    newButton.innerText="+";
    newButton.classList.add("liButton");
    ulTaskListElement.append(newLi);
    newLi.append(newButton);
    taskRow.value='';
    taskListElement.style.display='block';
    }
}

function clickDeleteButton(event) {
    event.preventDefault();
    taskRow.value='';
}

// function clickLiDeleteButton(event) {

// }

// function clickSortButton () {

// }