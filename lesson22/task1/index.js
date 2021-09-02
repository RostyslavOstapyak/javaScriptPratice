const divElement = document.querySelector(".rect_div");
const pElement = document.querySelector(".rect_p");

const logTarget = (text, color) => {
  console.log(`text added ${text}`);
  const eventsListElem = document.querySelector(".events-list");
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left:8px;">${text}</span>`;
};

const clearField = () => {
  console.log("field is cleared");
  document.querySelector(".events-list").innerHTML = "";
};

const clearBtn = document.querySelector(".clear-btn");
const clearBtnAction = clearField.bind(null);
clearBtn.addEventListener("click", clearBtnAction);

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreyP = logTarget.bind(null, "P", "grey");

divElement.addEventListener("click", logGreenDiv);
pElement.addEventListener("click", logGreyP);

const removeBtn = document.querySelector(".remove-handlers-btn");

const removeHandlers = () => {
  divElement.removeEventListener("click", logGreenDiv);
  pElement.removeEventListener("click", logGreyP);
};

const removeHandlersAction = removeHandlers.bind(null);

removeBtn.addEventListener("click", removeHandlersAction);

const addBtn = document.querySelector(".attach-handlers-btn");

const attachHandlers = () => {
  divElement.addEventListener("click", logGreenDiv);
  pElement.addEventListener("click", logGreyP);
};

const attachHandlersAction = attachHandlers.bind(null);

addBtn.addEventListener("click", attachHandlersAction);
