import { renderTasks } from "./renderer";
import { getItem, setItem } from "./storage";

export const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".");

  const text = taskTitleInputElem.value;

  if (!text) {
    return null;
  }

  taskTitleInputElem.value = "";
  const tasksList = getItem("taskList") || [];

  const newTaskList = tasksList.concat({
    text,
    done: false,
    createDate: new Date().toISOString(),
    id: Math.random().toString(),
  });

  setItem("tasksList", newTaskList);

  renderTasks();
  return newTaskList;
};
