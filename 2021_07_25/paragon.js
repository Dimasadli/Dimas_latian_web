const names = ["Arief", "Suharsono", "Ega", "Rifqi", "Redha", "Hari", "Arief", "Ega"]
let obj = {}
names.forEach(el => {
    if (!obj[el]) {
        obj[el] = 1
    }
    else {
        obj[el]++
    }
})
let names2 = []
for (const [key, value] of Object.entries(obj)) {
    if (value > 1) {
        names2.push(key)
    }
}

console.log(names2)

