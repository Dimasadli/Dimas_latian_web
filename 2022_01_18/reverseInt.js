var reverse = function (x) {
  let temp = [];
  const str = x.toString().split("");
  let tempStr = str;
  let tempMin = null;
  const minMax = Math.pow(2, 31) * -1;
  const maxMin = Math.pow(2, 31);

  if (x > maxMin) {
    return 0;
  }

  if (x <= minMax) {
    return 0;
  }

  if (str[0] === "-") {
    tempStr = str.slice(1, str.length);
    tempMin = str[0];
  }
  let tempReverse = tempStr.reverse();

  let i = 0;

  while (tempReverse.length > i) {
    if (tempReverse[i] !== "0") {
      break;
    }
    i++;
  }

  let result = tempReverse.slice(i, tempReverse.length);

  if (tempMin) {
    result.unshift(tempMin);
  }

  if (Number(result.join("")) > maxMin || Number(result.join("")) <= minMax) {
    return 0;
  }

  return Number(result.join(""));
};

reverse(-123);
