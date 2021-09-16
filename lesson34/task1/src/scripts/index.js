import { initTodoListHandlers } from "./todoList.js";
import { renderTasks } from "./renderer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});

// eslint-disable-next-line consistent-return
const onStorageChange = (e) => {
  if (e.key !== "tasksList") {
    return null;
  }
  renderTasks();
};

window.addEventListener("storage", onStorageChange);
