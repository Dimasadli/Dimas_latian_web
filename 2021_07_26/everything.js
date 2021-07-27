function truthCheck(collection, pre) {
    let setBaru = new Set()

    collection.forEach(el => {
        console.log(el.pre)
        if (!setBaru.has(el[pre])) {
            setBaru.add(el[pre])
        }
    })
    console.log(setBaru)
    if (setBaru.has(undefined) || setBaru.has(null) || setBaru.has('') || setBaru.has(NaN) || setBaru.has(0)) {
        return false
    }
    return true
}
console.log(truthCheck([{ "user": "Tinky-Winky", "sex": "male", "age": 0 }, { "user": "Dipsy", "sex": "male", "age": 3 }, { "user": "Laa-Laa", "sex": "female", "age": 5 }, { "user": "Po", "sex": "female", "age": 4 }], "age"));