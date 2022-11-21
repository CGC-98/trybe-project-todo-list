const buttonCreateTask = document.getElementById('criar-tarefa');
const buttonRemoveTasks = document.getElementById('apaga-tudo');
const buttonRemoveDoneTasks = document.getElementById('remover-finalizados');
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

const createTaskOnClick = () => {
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

buttonCreateTask.addEventListener('click', createTaskOnClick);
buttonRemoveTasks.addEventListener('click', removeTasksOnClick);
buttonRemoveDoneTasks.addEventListener('click', removeCompletedOnClick);
