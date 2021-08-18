const form = {
  input: document.querySelector('#font-size-control'),
  text: document.querySelector('#text'),
};

form.input.addEventListener('input', textSizeChange);

function textSizeChange() {
  form.text.style.fontSize = form.input.value + 'px';
}
