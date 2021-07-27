function sumFibs(num) {
    let awal = 0;
    let next = 1;
    let result = next;
    let arr = []

    while (result <= num) {
        arr.push(result)
        result = awal + next;
        awal = next
        next = result
    }
    console.log(arr)
    let total = 0
    arr.forEach(el => {
        if (el % 2 !== 0) {
            total += el
        }
    })
    console.log(total)
}

sumFibs(75025);
