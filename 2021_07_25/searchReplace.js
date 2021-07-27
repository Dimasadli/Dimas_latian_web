function myReplace(str, before, after) {
    if (before.charAt(0).toUpperCase() === before.charAt(0)) {
        after = after.charAt(0).toUpperCase() + after.slice(1)
    }
    else {
        after = after.toLowerCase()
    }
    return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");