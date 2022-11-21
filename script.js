const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonRemoveTasks = document.getElementById('apaga-tudo');
const buttonRemoveDoneTasks = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima');
const buttonMoveDown = document.getElementById('mover-baixo');
const buttonRemoveSelected = document.getElementById('remover-selecionado');
const listOfTasks = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');

const removeSelected = () => {
  const selectedItem = document.querySelector('.selected');
  if (selectedItem) selectedItem.classList.remove('selected');
};

const selectItem = ({ target }) => {
  removeSelected();
  target.classList.add('selected');
};

const completeItem = ({ target }) => {
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else { target.classList.add('completed'); }
};

const createTaskOnClick = (taskValue) => {
  if (taskValue.length < 1) { return false; }
  const task = document.createElement('li');
  task.innerText = inputTask.value;
  inputTask.value = '';
  task.classList.add('task-item');
  listOfTasks.appendChild(task);
};

const removeTasksOnClick = () => {
  listOfTasks.innerHTML = '';
};

const removeCompletedOnClick = () => {
  const completedTasks = document.querySelectorAll('.completed');
  if (completedTasks) completedTasks.forEach((task) => task.remove());
};

const moveUpOnClick = () => {
  const selected = document.querySelector('.selected');
  if (!selected || selected === listOfTasks.firstElementChild) return false;
  selected.previousElementSibling.before(selected);
};

const moveDownOnClick = () => {
  const selected = document.querySelector('.selected');
  if (!selected || selected === listOfTasks.lastElementChild) return false;
  selected.nextElementSibling.after(selected);
};

const removeSelectedOnClick = () => {
  const selected = document.querySelector('.selected');
  if (selected) selected.remove();
};

const SaveTasksOnClick = () => {
  const listHTML = listOfTasks.innerHTML;
  localStorage.setItem('toDoList', listHTML);
};

const retrieveTasks = () => {
  if (!localStorage.toDoList) return false;
  const tasks = (localStorage.getItem('toDoList'));
  listOfTasks.innerHTML = tasks;
};

window.addEventListener('load', () => { retrieveTasks(); });

listOfTasks.addEventListener('click', selectItem);
listOfTasks.addEventListener('dblclick', completeItem);
buttonCreateTask.addEventListener('click', () => createTaskOnClick(inputTask));
buttonRemoveTasks.addEventListener('click', removeTasksOnClick);
buttonRemoveDoneTasks.addEventListener('click', removeCompletedOnClick);
buttonSaveTasks.addEventListener('click', SaveTasksOnClick);
buttonMoveUp.addEventListener('click', moveUpOnClick);
buttonMoveDown.addEventListener('click', moveDownOnClick);
buttonRemoveSelected.addEventListener('click', removeSelectedOnClick);
