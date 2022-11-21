const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonRemoveTasks = document.getElementById('apaga-tudo');
const buttonRemoveDoneTasks = document.getElementById('remover-finalizados');
// const buttonSaveTasks = document.getElementById('salvar-tarefas');
// const buttonMoveUp = document.getElementById('mover-cima');
// const buttonMoveDown = document.getElementById('mover-baixo');
// const buttonRemoveSelected = document.getElementById('remover-selecionado');
const listOfTasks = document.getElementById('lista-tarefas');
const inputTask = document.getElementById('texto-tarefa');

const removeSelected = () => {
  const selectedItem = document.getElementsByClassName('selected')[0];
  if (selectedItem) selectedItem.classList.remove('selected');
};

const selectItem = ({ target }) => {
  removeSelected();
  target.classList.add('selected');
};

const completeItem = ({ target }) => {
  if (target.classList.contains('completed')) {
    target.classList.remove('completed');
  } else {
    target.classList.add('completed');
  }
};

const createTaskOnClick = (taskValue) => {
  if (taskValue.length < 1) { return false; }
  const task = document.createElement('li');
  task.innerText = inputTask.value;
  inputTask.value = '';
  task.classList.add('task-item');
  task.addEventListener('click', selectItem);
  task.addEventListener('dblclick', completeItem);
  listOfTasks.appendChild(task);
};

const removeTasksOnClick = () => {
  listOfTasks.innerHTML = '';
};

const removeCompletedOnClick = () => {
  const completedTasks = Array.from(listOfTasks.childNodes);
  completedTasks.forEach((task) => {
    if (task.classList.contains('completed')) {
      listOfTasks.removeChild(task);
    }
  });
};

// const SaveTasksOnClick = () => {
//   const tasks = Array.from(listOfTasks.childNodes);
//   console.log(JSON.stringify(tasks));
//   localStorage.setItem('toDoList', JSON.stringify(tasks));
// };

// const retrieveTasks = () => {
//   if (!localStorage.toDoList) { return false; }
//   const tasks = JSON.parse(localStorage.getItem('toDoList'));
//   console.log(tasks);
//   tasks.forEach((task) => { createTaskOnClick(task); });
// };

// window.addEventListener('load', () => { retrieveTasks(); });

buttonCreateTask.addEventListener('click', () => createTaskOnClick(inputTask));
buttonRemoveTasks.addEventListener('click', removeTasksOnClick);
buttonRemoveDoneTasks.addEventListener('click', removeCompletedOnClick);
// buttonSaveTasks.addEventListener('click', SaveTasksOnClick);
// buttonMoveUp.addEventListener('click', moveUpOnClick);
// buttonMoveDown.addEventListener('click', moveDownOnClick);
// buttonRemoveSelected.addEventListener('click', removeSelectedOnClick);
