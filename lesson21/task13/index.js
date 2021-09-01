export function getSection(num) {
  const spanItem = document.querySelector(`span[data-number='${num}']`);
  return spanItem.closest(".box").getAttribute("data-section");
}
// getSection(1);
