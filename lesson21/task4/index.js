export function getTitle() {
  const result = document.querySelector(".title").textContent;
  console.log(result);
}

export function getDescription() {
  const result = document.querySelector(".about").innerText;
  console.log(result);
}

export function getPlans() {
  const result = document.querySelector(".plans").innerHTML;
  console.log(result);
}

export function getGoal() {
  const result = document.querySelector(".goal").outerHTML;
  console.log(result);
}
