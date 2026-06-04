//find the index of first occurrence in a string

var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let j = 0;

        while (
            j < needle.length &&
            haystack[i + j] === needle[j]
        ) {
            j++;
        }

        if (j === needle.length) {
            return i;
        }
    }

    return -1;
};
