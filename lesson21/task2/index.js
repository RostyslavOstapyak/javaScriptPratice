function getTitleElement() {
  const result = document.querySelector(".title");

  console.dir(result);
  return result;
}
function getInputElement() {
  const result = document.querySelector('[type="text"]');
  console.dir(result);
  return result;
}
getTitleElement();
getInputElement();
