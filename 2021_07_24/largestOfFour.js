function largestOfFour(arr) {
    let hasil = []
    arr.forEach(el => {
        hasil.push(Math.max(...el))
    })
    console.log(hasil)
    return arr;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);