export function squaredNumbers() {
  const elementsList = document.querySelectorAll(".number");
  elementsList.forEach((el) => {
    const dataValue = el.getAttribute("data-number");
    el.setAttribute("data-squared-number", dataValue * dataValue);
  });
}
// squaredNumbers();
