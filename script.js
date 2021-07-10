const sortButton = document.getElementById('sort');
const enterButton = document.getElementById('enter');
const deleteButton = document.getElementById('deleteTask');
const liDeleteButton = document.querySelectorAll('.liButton');

const taskRow = document.getElementById('newTask');
const ulTaskListElement = document.querySelector('.taskList ul');
const taskListElement = document.querySelector('.taskList');
const liElement = document.querySelectorAll('.edit-list')

enterButton.addEventListener('click', clickEnterButton);
deleteButton.addEventListener('click', clickDeleteButton);
ulTaskListElement.addEventListener('click', clickEditButton);
// liDeleteButton.addEventListener('click', clickLiDeleteButton);
// sortButton.addEventListener('click', clickSortButton);


function clickEnterButton(event) {
    if (taskRow.value.trim() === '' || taskRow.value === null) {
        return false;
    } else {
    const newLi = document.createElement('li');
    newLi.innerText=taskRow.value;
    newLi.classList.add("edit-list");
    ulTaskListElement.append(newLi);

    const newButton = document.createElement('button')
    newButton.innerText="+";
    newButton.classList.add("liButton");
    newLi.append(newButton);

    taskRow.value='';
    taskListElement.style.display='block';
    }
}

taskRow.addEventListener("keypress", (event) => {
    const keyEnter = 13;
    if (event.which === keyEnter) {
        clickEnterButton();
    }
});

function clickDeleteButton(event) {
    event.preventDefault();
    taskRow.value='';
}

function clickEditButton (event) {
    const liElem = event.target;
    liElem.contentEditable = true;
}

// function clickLiDeleteButton(element) {
//         element.addEventListener("click", (event) => {
//             element.parentElement.remove();
//             event.stopPropagation();
//         });

// function clickSortButton () {

// }

// function dragAndDrop () {

// }