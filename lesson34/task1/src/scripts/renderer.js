import { getItem } from "./storage.js";

const listElem = document.querySelector(".list");

const compareTasks = (a, b) => a.done - b.done;

const createCheckbox = ({ done, id }) => {
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.setAttribute("data-id", id);
  checkboxElem.checked = done;
  checkboxElem.classList.add("list__item-checkbox");

  return checkboxElem;
};

const createListItem = ({ text, done, id }) => {
  const listItemElement = document.createElement("li");
  listItemElement.classList.add("list__item");
  const checkboxElem = createCheckbox({ done, id });

  if (done) {
    listItemElement.classList.add("list__item_done");
  }
  listItemElement.append(checkboxElem, text);

  return listItemElement;
};

export const renderTasks = () => {
  console.log("render is running");
  let tasksList = getItem("tasksList") || [];
  if (getItem("tasksList") === "Not found") {
    tasksList = [];
  }

  listElem.innerHTML = "";
  const tasksElems = tasksList.sort(compareTasks).map(createListItem);

  listElem.append(...tasksElems);
};
