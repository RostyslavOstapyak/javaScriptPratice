const listElem = document.querySelector(".list");

const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderTasks = (tasksList) => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const id = Math.random().toFixed(2) * 100;
      listItemElem.setAttribute("data-id", id);
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};
renderTasks(tasks);

const createButton = document.querySelector(".create-task-btn");
const inputField = document.querySelector(".task-input");
function addTask() {
  listElem.innerHTML = ""; // clear list before rendering
  let inputValue = inputField.value; // get input value

  if (inputValue !== "") {
    tasks.push({ text: inputValue, done: false }); // push new element to array
  }
  inputField.value = "";
  renderTasks(tasks); // render new elements
}
createButton.addEventListener("click", addTask);

const checkbox = document.querySelectorAll(".list__item-checkbox");

function doneTask(el) {
  console.log(el.parentNode.getAttribute("data-id"));
  const dataValue = el.parentNode.getAttribute("data-id");
  const item = document.querySelector(`[data-id='${dataValue}]'`);
  item.classList.add("list__item_done");
}

[...checkbox].forEach((el) => {
  el.addEventListener("checked", doneTask(el));
});
