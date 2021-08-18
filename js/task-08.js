const form = {
  box: document.querySelector('#boxes'),
  input: document.querySelector('input'),
  renderBtn: document.querySelector('[data-action="render"]'),
  destroyBtn: document.querySelector('[data-action="destroy"]'),
};

form.renderBtn.addEventListener('click', createBoxes);
form.destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = form.input.value;
  const amountBoxes = [];
  const rdmColor = () => (Math.random() * 256) >> 0;
  let sizeValue = 30;

  for (let i = 0; i < amount; i++) {
    const cloneBox = document.createElement('div');
    cloneBox.style.backgroundColor = `rgb(${rdmColor()}, ${rdmColor()}, ${rdmColor()})`;
    cloneBox.style.width = `${sizeValue}px`;
    cloneBox.style.height = `${sizeValue}px`;
    sizeValue = sizeValue + 10;
    amountBoxes.push(cloneBox);
  }
  form.box.append(...amountBoxes);
}

function destroyBoxes() {
  form.box.innerHTML = '';
}
