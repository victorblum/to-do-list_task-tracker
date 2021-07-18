const sortButton = document.getElementById('sort');
const enterButton = document.getElementById('enter');
const deleteButton = document.getElementById('deleteTask');
const mainForm = document.getElementById('taskForm');
const plusButton = document.querySelector('.plus');

const taskRow = document.getElementById('newTask');
const taskListElement = document.querySelector('.taskList');
const ulTaskListElement = document.querySelector('.taskList ul');

// Change main button color
enterButton.addEventListener('mouseover', function() {
    plusButton.style.background='#AA68FE';
    enterButton.style.background='#9953F1';
})
enterButton.addEventListener('mouseout', function() {
    plusButton.style.background='#9953F1';
    enterButton.style.background='#833AE0';
})

// Writing and adding new task
mainForm.addEventListener('submit', clickEnterButton);
function clickEnterButton(event) {
    event.preventDefault();
    if (taskRow.value.trim() === '' || taskRow.value === null) {
        return false;
    } else {
    const newLi = document.createElement('li');
    const liSpan = document.createElement('span');
    newLi.classList.add("liItem");
    liSpan.classList.add("spanItem");
    liSpan.innerText=taskRow.value;
    ulTaskListElement.append(newLi);
    newLi.append(liSpan);
    newLi.draggable=true;
    liSpan.contentEditable=true;
    liSpan.setAttribute('max', 25);

    const newButton = document.createElement('span')
    newButton.innerHTML="&times;";
    newButton.classList.add("liButton");
    newLi.append(newButton);
    
    taskRow.value='';
    taskListElement.style.display='block';
    liEditButton();
    liDeleteButton(newButton);
    }
}

// Task editing
function liEditButton() {
    const textfields = document.querySelectorAll(".spanItem"); 
    for(i=0; i<textfields.length; i++){
    textfields[i].addEventListener("keypress", function(e) {
        if (e.shiftKey || e.which === 13) {
            e.preventDefault();
          } else if (this.textContent.length >= this.getAttribute("max")){
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
sortButton.addEventListener('click', liSortButton);
function liSortButton() {
const liSpanElements = document.querySelectorAll('.liItem span:first-child');
const liElements = document.querySelectorAll('.liItem');

if (liElements.length >= 2) {
let list = [];
for(let i=0; i<liSpanElements.length; i++){
    list.push(liSpanElements[i]);
}
list.sort((a, b) => {
    const first = a.innerHTML;
    const second = b.innerHTML;
    return first < second ? -1 : (first  > second ? 1 : 0);
});
for(let i=0; i<list.length; i++){
    ulTaskListElement.insertBefore(list[i], ulTaskListElement.firstChild);
    console.log(list[i].innerHTML);
    }

sortButton.style.background="url('images/Group\ 90.svg') no-repeat";
    sortButton.onmouseover = () => {
        sortButton.style.background="url('images/Group\ 91.svg') no-repeat";
    }
    sortButton.onmouseout = () => {
        sortButton.style.background="url('images/Group\ 90.svg') no-repeat";
    }
}
}