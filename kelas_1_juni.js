// // while loop
// let i = 0
// let str = ["a", "b", "c", "d"]
// let tujuan = ""
// while(tujuan !== "c") {
//     tujuan = str[i]
//     i++
//     console.log(tujuan)
// }

/// Latian While Youtube
// let angkot = 1
// while (angkot <= 10) {
//     console.log(`Angkot No. ${angkot} beroperasi dengan baik`)
//     angkot++
// }



// function isPrime(num) {
//     for (let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if (num % i === 0) return false;
//     return num > 1;
// }

// // TODO: cari 20 bilangan pertama prima dalam array
// let result = []
// let i = 2
// while (result.length <= 20) {
//     if (isPrime(i)) {
//         result.push(i)
//     }
//     i++
// }
// console.log(result)



// console.log(result)

// TODO: buat function 
// function factorial(num) {
//     let result = 1
//     if (num === 0) {
//         return 1
//     }
//     if (num < 0) {
//         return null
//     }
//     while (num >= 1) {
//         result = result * num
//         num = num - 1
//     }
//     return result
// }

// console.log(factorial(6))

// function factorial2(num) {
//     let total = 1
//     for (let i = i; i <= total; i++) {
//         total *= i
//     }
//     return total
// }

// console.log(factorial(6))

// function coba(a, b) {
//     let str = ''
//     for (let i = a; i <= b; i++) {
//         str += i
//     }
//     return str
// }

// console.log(coba(5, 8))

// ------------------------------------------

// Data type SET
// let dataSet = new Set()

// // add data
// dataSet.add(4)
// dataSet.add(8)
// dataSet.add("String nih")

// // read data
// dataSet.has(4) //true
// dataSet.has(9) //false

// var arr = [4, 8, "string nih", 4, 6, 8, 8, 8, 8, 10]
// arr.push(4)
// dataSet.add(4)

// let dataUnikDariArray = new Set(arr)

// let SMA = {}
// const mahasiswa = [6, 6, 6, 6, 2, 2, 1, 7, 8, 9, 4, 2, 2, 6, 8]
// mahasiswa.forEach(e => {
//     if (!SMA[e]) {
//         SMA[e] = 1
//     } else {
//         SMA[e] += 1
//     }
// })

// const div = document.querySelector('div')
// div.innerHTML = ` <form class=action="/gos" method="GET">
//     <label for="">HAI</label>
//     <input type="text" name="username" id="">
//     <label for="">Dimas</label>
//     <input type="text" name="comment" id="">
//     </form>`

let arr = [1, 2, 0, -1, -1]
// arr = arr.join('')
