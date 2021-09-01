export function createButton(text) {
  const button = document.createElement("button");
  button.textContent = text;
  document.querySelector("body").append(button);
}

createButton("sss");
