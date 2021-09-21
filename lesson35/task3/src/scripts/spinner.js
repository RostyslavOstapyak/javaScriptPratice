const spinnerElem = document.querySelector(".spinner");

export const toggleSpinner = () => {
  spinnerElem.classList.toggle("spinner_hidden");
};

export const hideSpinner = () => spinnerElem.classList.add("spinner_hidden");
