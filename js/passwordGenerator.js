// js/passwordGenerator.js

function generatePassword(options) {
  const {
    length,
    useUppercase,
    useLowercase,
    useNumbers,
    useSymbols,
  } = options;

  const uppercases = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowercases = 'abcdefghijklmnopqrstuvwxyz';
  const numbers = '0123456789';
  const symbols = '!@#$%^&*()_+';

  let availableChars = '';

  if (useUppercase) availableChars += uppercases;
  if (useLowercase) availableChars += lowercases;
  if (useNumbers) availableChars += numbers;
  if (useSymbols) availableChars += symbols;

  if (availableChars.length === 0) {
    throw new Error('文字種が選択されていません');
  }

  let password = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * availableChars.length);
    password += availableChars[randomIndex];
  }

  return password;
}