const divElement = document.querySelector(".rect_div");
const pElement = document.querySelector(".rect_p");
const spanElement = document.querySelector(".rect_span");
const clearBtn = document.querySelector(".clear-btn");
const removeBtn = document.querySelector(".remove-handlers-btn");
const addBtn = document.querySelector(".attach-handlers-btn");
const eventsListElem = document.querySelector(".events-list");

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left:8px;">${text}</span>`;
};

const clearField = () => {
  eventsListElem.innerHTML = "";
};

const removeHandlers = () => {
  divElement.removeEventListener("click", logTarget("DIV", "green"));
  pElement.removeEventListener("click", logTarget("P", "green"));
  spanElement.removeEventListener("click", logTarget("SPAN", "green"));

  divElement.removeEventListener("click", logTarget("DIV", "gray"), true);
  pElement.removeEventListener("click", logTarget("P", "gray"), true);
  spanElement.removeEventListener("click", logTarget("SPAN", "gray"), true);
};

const attachHandlers = () => {
  divElement.addEventListener("click", logTarget("DIV", "green"));
  pElement.addEventListener("click", logTarget("P", "green"));
  spanElement.addEventListener("click", logTarget("SPAN", "green"));

  divElement.addEventListener("click", logTarget("DIV", "gray"), true);
  pElement.addEventListener("click", logTarget("P", "gray"), true);
  spanElement.addEventListener("click", logTarget("SPAN", "gray"), true);
};
attachHandlers();

clearBtn.addEventListener("click", clearField);
removeBtn.addEventListener("click", removeHandlers);
addBtn.addEventListener("click", attachHandlers);
