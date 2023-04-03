/* eslint-disable import/named */
import {
  clearCompleted,
  editTodoList,
  formSubmission,
  populateTasks,
} from './modules/editTask.js';

const clearCompletedButton = document.querySelector('.clear-completed');

clearCompletedButton.addEventListener('click', clearCompleted);

formSubmission();
editTodoList();
populateTasks();