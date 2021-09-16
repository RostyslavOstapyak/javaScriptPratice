import { getTasksList } from "./taskGateway.js";
import { renderTasks } from "./renderer.js";

export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = (key) => JSON.parse(localStorage.getItem(key));

// adding task from API to local storage on
getTasksList().then((tasks) => {
  setItem("tasksList", tasks);
  renderTasks();
});
