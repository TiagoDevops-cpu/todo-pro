import {
  getTasks,
  addTask,
  deleteTask,
  toggleTask
} from './api.js';

import { renderTasks } from './ui.js';

const input = document.getElementById("input");
const btn = document.getElementById("btn");

async function loadTasks() {
  const tasks = await getTasks();
  renderTasks(tasks, removeTask, toggleTaskStatus);
}

btn.addEventListener("click", async () => {
  const text = input.value;

  if (!text) return;

  await addTask(text);
  input.value = "";

  loadTasks();
});

async function removeTask(id) {
  await deleteTask(id);
  loadTasks();
}

async function toggleTaskStatus(id) {
  await toggleTask(id);
  loadTasks();
}

loadTasks();