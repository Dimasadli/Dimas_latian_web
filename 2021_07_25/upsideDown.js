function solve(x, y) {
    let total = 0
    for (let i = x; i <= y; i++) {
        total = isUpsideDown(i) ? total + 1 : total
    }
    return total
};

function isUpsideDown(number) {
    const upsideable = '018'
    const numberable = '01869'
    for(let i = 0; i < number.toString().length; i++) {
        if(numberable.indexOf(number.toString()[i]) < 0) {
            return false
        }
    }
    if (number < 10 && upsideable.indexOf(number.toString()) < 0) {
        return false
    }
    const arrNumber = number.toString().split('');

    const newNumber = arrNumber.map(num => {
        if (num === '6') {
            return '9'
        } else if (num === '9') {
            return '6'
        }
        return num
    }).reverse().join('')

    return number.toString() === newNumber
}

console.log(solve(10, 100))

