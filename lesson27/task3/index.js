import { initTodoListHandlers } from "./src/scripts/todoList";
import { renderTasks } from "./src/scripts/renderer";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});

const onStorageChange = (e) => {
  if (e.key !== "tasksList") {
    return null;
  }
  renderTasks();
  return null;
};

window.addEventListener("storage", onStorageChange);
