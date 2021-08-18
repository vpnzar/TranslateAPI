const refs = {
  linkInputField: document.querySelector('#name-input'),
  linkCurrentInputMeaning: document.querySelector('#name-output'),
};

refs.linkInputField.addEventListener('input', onInputChange);

function resultFromAPI(url) {
  return fetch(url)
    .then(response => response.json())
    .then(textInfo => textInfo);
}

function onInputChange(event) {
  refs.linkCurrentInputMeaning.textContent = event.currentTarget.value;
  resultFromAPI(
    `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${refs.linkCurrentInputMeaning.textContent}`
  ).then(
    text =>
      (refs.linkCurrentInputMeaning.textContent =
        text[0].meanings[0].translation.text)
  );

  // fetch(
  //   `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${refs.linkCurrentInputMeaning.textContent}`
  // )
  //   .then(res => {
  //     return res.json();
  //   })
  //   .then(text => {
  //     console.log(text[0].meanings[0].translation.text);
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
}

// console.log(
//   resultFromAPI(
//     `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${refs.linkCurrentInputMeaning.textContent}`
//   ).then(text => text[0])
// );
