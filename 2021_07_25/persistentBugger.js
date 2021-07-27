// function persistence(num) {
//     var times = 0;
//     num = num.toString();
//     while (num.length > 1) {
//         times++;
//         num = num.split('').map(Number).reduce((a, b) => a * b).toString();
//     }
//     return times;
// }

function persistence(num) {
    let obj = {}
    const numStr = num.toString()
    numStr.split('').forEach(el => {
        if (!obj[el]) {
            obj[el] = 1
        }
        else {
            obj[el]++
        }
    })
    let currentValue = 1
    let hasil;
    for (const [key, value] of Object.entries(obj)) {
        if (value > currentValue) {
            currentValue = value
            hasil = key
        }
    }
    return hasil
}


console.log(persistence(23124124124))

