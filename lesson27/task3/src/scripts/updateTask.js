import { renderTasks } from "./renderer.js";
import { getItem, setItem } from "./storage.js";

export const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("");

  if (!isCheckbox) {
    return null;
  }

  const tasksList = getItem("taskList");
  const newTasksList = tasksList.map((task) => {
    if (task.id === e.target.dataset.id) {
      const done = e.target.checked;
      return {
        ...task,
        done,
        finishDate: done ? new Date().toISOString() : null,
      };
    }
    return task;
  });
  setItem("tasksList", newTasksList);

  renderTasks();
};
