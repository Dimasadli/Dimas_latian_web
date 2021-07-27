function order(words) {
    // ...
    let arr = []
    let newWord = words.split(' ')
    let num = '123456789'
    newWord.forEach(el => {
        let index;
        el.split('').forEach(char => {
            if (num.indexOf(char) > -1) {
                index = num.indexOf(char)
                console.log(index)
            }
        })
        arr[index] = el
    })
    //     return arr.join(' ')
}
console.log(order("is2 Thi1s T4est 3a"))

