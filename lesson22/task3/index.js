const inputField = document.querySelector(".text-input");

const action = () => {
  console.log(inputField.value);
};

inputField.addEventListener("change", action);
