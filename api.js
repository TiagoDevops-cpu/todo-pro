let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

export async function getTasks() {
  return tasks;
}

export async function addTask(text) {
  const newTask = {
    id: Date.now(),
    text,
    completed: false
  };

  tasks.push(newTask);
  save();
}

export async function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  save();
}

export async function toggleTask(id) {
  tasks = tasks.map(task =>
    task.id === id ? { ...task, completed: !task.completed } : task
  );
  save();
}