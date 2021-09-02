const divElement = document.querySelector(".rect_div");
const pElement = document.querySelector(".rect_p");
const spanElement = document.querySelector(".rect_span");
const clearBtn = document.querySelector(".clear-btn");
const removeBtn = document.querySelector(".remove-handlers-btn");
const addBtn = document.querySelector(".attach-handlers-btn");

const logTarget = (text, color) => {
  console.log(`text added ${text}`);
  const eventsListElem = document.querySelector(".events-list");
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left:8px;">${text}</span>`;
};

const clearField = () => {
  console.log("field is cleared");
  document.querySelector(".events-list").innerHTML = "";
};

const logGreenDiv = logTarget.bind(null, "DIV", "green");
const logGreenP = logTarget.bind(null, "P", "green");
const logGreenSpan = logTarget.bind(null, "SPAN", "green");

const logGreyDiv = logTarget.bind(null, "DIV", "gray");
const logGrayP = logTarget.bind(null, "P", "gray");
const logGraySpan = logTarget.bind(null, "SPAN", "gray");

const removeHandlers = () => {
  divElement.removeEventListener("click", logGreenDiv);
  pElement.removeEventListener("click", logGreyP);
};

const attachHandlers = () => {
  divElement.addEventListener("click", logGreenDiv);
  pElement.addEventListener("click", logGreyP);
};

divElement.addEventListener("click", logGreenDiv);
pElement.addEventListener("click", logGreenP);
spanElement.addEventListener("click", logGreenSpan);

divElement.addEventListener("click", logGreyDiv, true);
pElement.addEventListener("click", logGrayP, true);
spanElement.addEventListener("click", logGraySpan, true);

const clearBtnAction = clearField.bind(null);
const removeHandlersAction = removeHandlers.bind(null);
const attachHandlersAction = attachHandlers.bind(null);

clearBtn.addEventListener("click", clearBtnAction);
removeBtn.addEventListener("click", removeHandlersAction);
addBtn.addEventListener("click", attachHandlersAction);
