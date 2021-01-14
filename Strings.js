const RunLengthEnconding = (stringParam) => {
  let input = stringParam;
  if (input === null || input.length === 0) return " ";

  let stringBuilder = "";
  let prevChar = "";
  let counter = 0;
  let i = 0;
  let mystr = "";

  while (i < input.length) {
    if (prevChar === input.charAt(i)) {
      counter++;
    } else {
      if (prevChar !== "") {
        stringBuilder = mystr.concat(stringBuilder, counter, prevChar);
      }
      counter = 1;
    }
    prevChar = input.charAt(i);
    i++;
  }

  return stringBuilder;
};

console.log(RunLengthEnconding("aabcd"));
