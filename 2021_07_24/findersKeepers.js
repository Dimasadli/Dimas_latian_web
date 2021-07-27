function findElement(arr, func) {
    let num = 0;
    arr.forEach(el => {
        if (el % 2 === 0) {
            console.log(el)
        }
    })
}

findElement([1, 2, 3, 4], num => num % 2 === 0);