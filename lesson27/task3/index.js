import { initTodoListHandlers } from "./src/scripts/todoList";
import { renderTasks } from "./src/scripts/renderer";

document.addEventListener("DOMContentLoaded", () => {
  renderTasks();
  initTodoListHandlers();
});
