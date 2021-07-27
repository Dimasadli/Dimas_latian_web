const names = ["Arief", "Suharsono", "Ega", "Rifqi", "Redha", "Hari", "Arief", "Ega"]

let set1 = new Set();
let arr = []
names.forEach(e => {
    if(set1.has(e)) {
        arr.push(e)
    } else {
        set1.add(e)
    }
})

console.log(arr)