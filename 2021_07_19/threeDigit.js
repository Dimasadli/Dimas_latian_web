const max = 1000;

let maxProduct;
for(let i = 1; i < max; i++) {
    for(let j = i; j < max; j++) {
        const num = i * j;
        if(isPalindrome(num.toString()) && (!maxProduct || num > maxProduct)) {
            maxProduct = num;
        }
    }
}

console.log(maxProduct)

function isPalindrome(str) {
    const newStr = str.split('').reverse().join('')
    return newStr === str;
}