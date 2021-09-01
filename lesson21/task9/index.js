export function finishList() {
  const list = document.querySelector(".list");
  const special = document.querySelector(".special");

  const li = document.createElement("li");
  li.textContent = 1;
  list.prepend(li);

  const fourLi = document.createElement("li");
  fourLi.textContent = 4;
  special.before(fourLi);

  const sixLi = document.createElement("li");
  sixLi.textContent = 6;
  special.after(sixLi);

  const eightLi = document.createElement("li");
  eightLi.textContent = 8;
  list.append(eightLi);
}

// finishList();
