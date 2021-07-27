let a = [2, 4]
let b = [16, 32, 96]


function getTotalX(a, b) {
    // Write your code here
    let kumpulanFaktor = []
    a.forEach(el => {
        kumpulanFaktor = kumpulanFaktor.concat(faktor2(el))
    })

    b.forEach(el => {
        kumpulanFaktor = kumpulanFaktor.concat(faktor2(el))
    })

    let set = new Set(kumpulanFaktor)
    let arr = [...set].filter(el => {
        return el >= a[a.length - 1] && el <= b[0]
    })
    let total = 0;
    arr.forEach(el => {
        let bool = true
        a.forEach(el_a => {
            if (el % el_a !== 0) {
                bool = false
            }
        })
        b.forEach(el_b => {
            if (el_b % el !== 0) {
                bool = false
            }
        })
        if (bool) {
            total++
        }
    })
    return total
}

function faktor2(n) {

    let akar = Math.floor(Math.sqrt(n))
    let arr = []
    for (let i = 1; i <= akar; i++) {
        if (n % i === 0) {
            arr.push(i)
            if (n / i !== i) {
                arr.push(n / i)
            }
        }
    }
    return arr
}
