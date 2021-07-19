const contohStr = 'tdfdffddffsdsffffffsdsdsddddd';

function longestChar(str) {
    let max = 0;
    let currentMax;
    let tempChar = []
    for(let i = 1; i < str.length; i++) {
        if(str[i-1] === str[i]) {
            if(!tempChar) {
                tempChar = str[i]
            }

            if(!currentMax) {
                currentMax = 2;
            } else {
                currentMax++
            }

            if(currentMax > max) {
                max = currentMax
                tempChar = [str[i]]
            } else if(currentMax === max) {
                tempChar.push(str[i])
            }
        } else {
            currentMax = 0;
        }
    }

    return [max, tempChar]
}

console.log(longestChar(contohStr))