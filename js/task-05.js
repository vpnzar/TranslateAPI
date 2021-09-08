const refs = {
  linkInputField: document.querySelector('#name-input'),
  linkCurrentInputMeaning: document.querySelector('#name-output'),
};

refs.linkInputField.addEventListener('input', onInputChange);

const resultFromAPI = async url => {
  const response = await fetch(url);
  const wordsJson = response.json();
  return wordsJson;
};

function onInputChange(event) {
  refs.linkCurrentInputMeaning.textContent = event.currentTarget.value;
  const eventQuery = refs.linkCurrentInputMeaning.textContent;
  resultFromAPI(
    `https://dictionary.skyeng.ru/api/public/v1/words/search?search=${eventQuery}`
  ).then(text => {
    meaningWords(text[0].meanings[0].id);
  });
}

const meaningWords = async meaningIds => {
  const meaningURL = await fetch(
    `https://dictionary.skyeng.ru/api/public/v1/meanings?ids=${meaningIds}`
  );
  const meaningJson = meaningURL.json();
  return meaningJson;
};

meaningWords().then(meaningJson => console.log(meaningJson[0]));
