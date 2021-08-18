const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const createItemsForList = document.querySelector("#ingredients");

const elements = ingredients.map((option) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = option;
  return itemEl;
});

createItemsForList.append(...elements);
