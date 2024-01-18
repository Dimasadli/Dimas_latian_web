var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let len = 0;

  for (let i = 0; i < s.length; i++) {
    console.log(arr);
    if (arr.includes(s[i])) {
      if (len < arr.length) len = arr.length;
      let index = arr.indexOf(s[i]);
      arr.splice(0, index + 1);
    }

    arr.push(s[i]);
  }

  if (len < arr.length) {
    return arr.length;
  } else {
    return len;
  }
};

lengthOfLongestSubstring("pwwkew");
