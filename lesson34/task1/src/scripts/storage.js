import { getTasksList, createTask } from "./taskGateway.js";

export const setItem = (key, value) => {
  // localStorage.setItem(key, JSON.stringify(value)); local storage removed
  // createTask(value);
};

export const getItem = () => getTasksList();

// adding task from API to local storage on load page
document.addEventListener("DOMContentLoaded", () => {
  getTasksList().then((tasks) => {
    setItem("tasksList", tasks);
  });
});
