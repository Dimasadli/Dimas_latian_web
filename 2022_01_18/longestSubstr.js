var lengthOfLongestSubstring = function (s) {
  let arr = [];
  let len = 0;

  for (let i = 0; i < s.length; i++) {
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

var lengthOfLongestSubstring = function (str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      if (seen[char] > start) {
        start = seen[char];
      }
    }
    // index - beginning of substring + 1 (to include current in count)
    if (i - start + 1 > longest) {
      longest = i - start + 1;
    }
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
};

lengthOfLongestSubstring("pwwkew");
