// //sum of parts
let ls = [0, 1, 3, 6, 10];
function partsSums(ls) {
    // your code
    // cara satu
    let result = []
    for (let i = 0; i <= ls.length; i++) {
        result.push(ls.slice(i, ls.length))
    }
    console.log(result)
    return result.map(el => {
        return el.reduce((a, b) => a + b, 0)
    })
    /// cara dua
    // let total = 0
    // ls.forEach(el => {
    //     total += el
    // })
    // const maxTotal = total
    // const hasil = ls.map(el => {
    //     return total -= el
    // })
    // console.log(hasil)
}

console.log(partsSums(ls))