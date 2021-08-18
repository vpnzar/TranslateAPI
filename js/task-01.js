const allItems = document.querySelectorAll(".item");
console.log(`В списке ${allItems.length} категории.`);

//===================================================

const itemEl = 0;
const itemTextTitle = allItems[itemEl].firstElementChild;
const allItemEl = allItems[itemEl].querySelectorAll("li");

console.log(`Категория: ${itemTextTitle.textContent}`);
console.log(`Количество элементов: ${allItemEl.length}`);
