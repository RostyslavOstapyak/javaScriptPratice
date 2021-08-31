export function getItemsList() {
  const result = document.querySelectorAll(".technology");
  console.dir(result);
  return result;
}

getItemsList();

export function getItemsArray() {
  const result = Array.from(document.querySelectorAll(".tool"));
  console.dir(result);
  return result;
}
getItemsArray();
