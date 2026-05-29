// longest common prefix

function longestCommonPrefix(str) {
  let first = str[0];
  for (let i = 0; i < first.length; i++) {
    let char = first[i];
    for (let j = 1; j < str.length; j++) {
      if (i >= str[j].length || str[j][i] !== char) {
        return first.slice(0, i);
      }
    }
  }
  return first;
}

