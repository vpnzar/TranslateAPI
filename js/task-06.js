const form = {
  input: document.querySelector('#validation-input'),
  inputDataLength: document.querySelector('input'),
};

form.input.addEventListener('blur', checkLengthText);

function checkLengthText(event) {
  if (
    Number(form.inputDataLength.dataset.length) ===
    event.currentTarget.value.length
  ) {
    form.input.classList.add('valid');
    form.input.classList.remove('invalid');
  } else {
    form.input.classList.add('invalid');
    form.input.classList.remove('valid');
  }
}
