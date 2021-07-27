//no duplicate
// cara 1
function uniteUnique(...arr) {
    const arrBaru = arr.join(',').split(',')
    let arrUnik = []
    arrBaru.forEach(el => {
        if (arrUnik.indexOf(el) === -1) {
            arrUnik.push(el)
        }
    })
    return arrUnik.map(el => {
        return parseInt(el)
    })
}

// cara 2
function uniteUnique(...arr) {
    let arrBaru = arr.join(',').split(',')
    let set = new Set(arrBaru)
    const hasil = [...set].map(el => {
        return parseInt(el)
    })
    return hasil;
}

// cara 3
// function uniteUnique(...arr) {
//     const newArr = arr.join(',').split(',')
//     let obj = {}
//     newArr.forEach(el => {
//         if (!obj[el]) {
//             obj[el] = 1
//         }
//         else {
//             obj[el]++
//         }
//     })
//     for (const [key, value] of Object.entries(obj)) {
//         console.log(key)
//     }

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])

