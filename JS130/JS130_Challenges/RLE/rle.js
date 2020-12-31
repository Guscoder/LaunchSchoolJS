// iterate through string
// separate grops of consecutive letters
// add each group to array
// for each array item, count length
// combine length + letter--add to new array
// join array turn into string
// output string

function getLetterGroups(dataString) {
  let letterGroups = [];
  let group = dataString[0];
  for (let index = 0; index < dataString.length; index++) {
    let letter1 = dataString[index];
    let letter2 = dataString[index + 1];

    if (letter1 === letter2) {
      group += letter2;
    } else if (!letter2) {
      letterGroups.push(group);
      break;
    } else if (letter1 !== letter2) {
      letterGroups.push(group);
      group = "" + letter2;
    }
  }
  return letterGroups;
}

const functions = {
  encode(dataString) {
    if (dataString === "") return "";
    let letterGroupsArray = getLetterGroups(dataString);
    let compressedArray = [];

    letterGroupsArray.forEach((item) => {
      if (item.length === 1) {
        compressedArray.push(item[0]);
      } else {
        compressedArray.push(item.length + item[0]);
      }
    });

    return compressedArray.join("");
  },
  // eslint-disable-next-line max-lines-per-function
  decode(dataString) {
    let translation = [];
    for (let index = 0; index < dataString.length; index++) {
      let currentChar = dataString[index];
      let nextChar = dataString[index + 1];
      if (
        Number.isInteger(parseInt(currentChar)) &&
        !Number.isInteger(parseInt(nextChar))
      ) {
        translation.push(dataString[index + 1].repeat(currentChar));
        index += 1;
      } else if (
        Number.isInteger(parseInt(currentChar)) &&
        Number.isInteger(parseInt(nextChar))
      ) {
        let num = parseInt(currentChar + nextChar);
        translation.push(dataString[index + 2].repeat(num));
        index += 2;
      } else {
        translation.push(dataString[index]);
      }
    }
    return translation.join("");
  },
};

module.exports = functions;

let encode = function (string) {
  return string.replace(/(.)\1+/g, (match, p1) => `${match.length}${p1}`);
};

let decode = function (string) {
  return string.replace(/(\d+)(\D{1})/g, (_, p1, p2) => p2.repeat(p1));
};

module.exports = {
  encode,
  decode,
};
