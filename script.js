const sortButton = document.getElementById('sort');
const taskRow =  document.getElementById('newTask');
const deleteButton = document.querySelectorAll('deleteTask');
const enterTask = document.getElementById('enter');

function auto_height(elem) {
    elem.style.height = "1px";
    elem.style.height = (elem.scrollHeight)+"px";
}