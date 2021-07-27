function arrayDiff(a, b) {
    let set = new Set(b)
    if (a.length == 0) {
        return a
    }
    let arr = []
    for (let i = 0; i < a.length; i++) {
        if (!set.has(a[i])) {
            arr.push(a[i])
        }
    }
    console.log(arr)
}

arrayDiff([3, 4], [3])
