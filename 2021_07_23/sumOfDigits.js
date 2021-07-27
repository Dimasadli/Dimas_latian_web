


///cara 1
// function digital_root(n) {
//     // ...
//     let a;
//     while (!a || a > 9) {
//         a = !a ? n : sumInt(a)
//     }
//     return a
// }

// function sumInt(n) {
//     n = n.toString()
//     let strSpl = n.split('')
//     let total = 0
//     strSpl.forEach(e => {
//         total += parseInt(e)
//     })
//     return total
// }

// cara 2
let n = 1531
// function digital_root(n) {
//     if (n < 10) {
//         return n
//     }
//     n = n.toString()
//     let strSpl = n.split('')
//     let total = 0
//     strSpl.forEach(e => {
//         total += parseInt(e)
//     })
//     return digital_root(total)
// }

/// cara 3
function digital_root(n) {
    if (n < 10) {
        return n
    }
    n = n.toString()
    while (n > 9) {
        n = n.split('').reduce((a, b) => {
            return parseInt(a) + parseInt(b)
        })
    }
    return n
}



console.log(digital_root(n))