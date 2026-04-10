const list = document.getElementById("list");
const counter = document.getElementById("counter");

export function renderTasks(tasks, onDelete, onToggle) {
  list.innerHTML = "";

  tasks.forEach(task => {
    const li = document.createElement("li");

    if (task.completed) {
      li.classList.add("completed");
    }

    li.innerText = task.text;

    li.addEventListener("click", () => {
      onToggle(task.id);
    });

    const btn = document.createElement("button");
    btn.innerText = "❌";

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      onDelete(task.id);
    });

    li.appendChild(btn);
    list.appendChild(li);
  });

  counter.innerText = `Total: ${tasks.length}`;
}