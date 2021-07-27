const number = 13195


function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
}

function faktor2(n) {
    let akar = Math.floor(Math.sqrt(n))
    let arr = []
    for (let i = 2; i <= akar; i++) {
        if (n % i === 0) {
            arr.push(i)
            if (n / i !== i) {
                arr.push(n / i)
            }
        }
    }
    return arr
}

// const arrHasil = faktor2(600851475143)
// let arr = []
// arrHasil.forEach(el => {
//     if (isPrime(el)) {
//         arr.push(el)
//     }
// })
// console.log(arr)

const arrHasil2 = faktor2(number).filter(isPrime)
console.log(Math.max(...arrHasil2))



