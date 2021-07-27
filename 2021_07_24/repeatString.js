function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return ''
    }
    let hasil = ''
    for (let i = 0; i < num; i++) {
        hasil += str
    }
    return hasil
}

console.log(repeatStringNumTimes("abc", -1));