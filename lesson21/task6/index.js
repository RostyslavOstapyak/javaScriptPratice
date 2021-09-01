export function setButton(text) {
  // const button = document.createElement("button");
  // button.innerText = text;
  // document.querySelector("body").append(button);

  const button = `<button>${text}</button>`;
  document.querySelector("body").innerHTML = button;
  // document.querySelector("body").textContent = button;
}
// setButton("tete");
