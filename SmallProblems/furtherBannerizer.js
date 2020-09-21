function logInBox(str, width) {
  const dashLine = '-'.repeat(width);
  const spacerLine = ' '.repeat(width);
  let cutString = '';
  if (str.length + 2 > width) {
    cutString = str.substring(0, width - 2);
  }

  console.log(`+${dashLine}+`);
  console.log(`|${spacerLine}|`);
  console.log(`| ${cutString} |`);
  console.log(`|${spacerLine}|`);
  console.log(`+${dashLine}+`);
}

logInBox('To boldly go where no one has gone before.', 10);
