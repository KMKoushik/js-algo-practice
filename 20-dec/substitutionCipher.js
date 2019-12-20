const substitutionCipher = inputString => {
  const inputCharArray = inputString.split('');
  let chipheredString = '';
  const isLowerCase = charCode => charCode >= 97 && charCode <= 122;
  const isUpperCase = charCode => charCode >= 65 && charCode <= 90;
  const getShiftValue = charCode => (charCode % 2 === 0 ? 6 : 4);

  const shiftChar = char => {
    let charCode = char.charCodeAt();
    if (isLowerCase(charCode) || isUpperCase(charCode)) {
      charCode += getShiftValue(charCode);
      if (charCode > 122) {
        charCode = 96 + (charCode - 122);
      } else if (charCode > 90 && charCode <= 97) {
        charCode = 64 + (charCode - 90);
      }
    }
    return String.fromCharCode(charCode);
  };

  chipheredString = inputCharArray.map(shiftChar).join('');

  return chipheredString;
};

export default substitutionCipher;
