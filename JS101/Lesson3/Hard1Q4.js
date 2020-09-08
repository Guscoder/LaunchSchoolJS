function isAnIpNumber(str) {
  if (/^\d+$/.test(str)) {
    let number = Number(str);
    return number >= 0 && number <= 255;
  }

  return false;
}

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split('.');
  console.log(dotSeparatedWords.length);
  if (dotSeparatedWords.length > 4 || dotSeparatedWords.length < 4) {
    return false;
  } else {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
    return true;
  }

  //   while (dotSeparatedWords.length === 4) {
  //     let word = dotSeparatedWords.pop();
  //     if (!isAnIpNumber(word)) {
  //       break;
  //     }
  //   }

  //   return true;
}

console.log(isDotSeparatedIpAddress('54.34.35'));
console.log(isDotSeparatedIpAddress('54.34.35.345.213'));
console.log(isDotSeparatedIpAddress('54.34.35.192'));
