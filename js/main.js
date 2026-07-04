// js/main.js

const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateButton = document.getElementById('generate');
const resultInput = document.getElementById('result');
const copyButton = document.getElementById('copy');

generateButton.addEventListener('click', () => {
  try {
    const options = {
      length: Number(lengthInput.value),
      useUppercase: uppercaseCheckbox.checked,
      useLowercase: lowercaseCheckbox.checked,
      useNumbers: numbersCheckbox.checked,
      useSymbols: symbolsCheckbox.checked,
    };

    if (options.length < 4) {
      alert('パスワード長は4以上にしてください');
      return;
    }

    const password = generatePassword(options);
    resultInput.value = password;
  } catch (error) {
    alert(error.message);
  }
});

copyButton.addEventListener('click', () => {
  if (!resultInput.value) return;

  navigator.clipboard.writeText(resultInput.value);
  alert('コピーしました');
});