// length of last word

function lengthOfLastWord(s) {
    let words = s.trim().split(" ");
    return words[words.length - 1].length;
};
