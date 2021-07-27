// let str = 'Hello'
// function wave(str) {
//     // Code here
//     let result = []
//     for (let i = 0; i < str.length; i++) {
//         result.push(str)
//     }
//     for (let i = 0; i < result.length; i++) {
//         let temp = result[i].split('')
//         for (let j = 0; j < result.length; j++) {
//             if (i === j) {
//                 temp[i] = temp[i].toUpperCase()
//                 result[i] = temp.join('')
//             }
//         }
//     }
//     return result
// }
// wave(str)

// function partlist(arr) {
//     // your code
//     let arr1 = []
//     let arr2 = []

// return arr.map((el, idx) => {
//     console.log(([arr.slice(0, idx).join(' '), arr.slice(idx).join(' ')]).slice(1))
// })
// return arr.map((v, i) => [arr.slice(0, i).join(' '), arr.slice(i).join(' ')]).slice(1)

//     for (let i = 0; i < arr.length - 1; i++) {
//         arr2.push([arr.slice(1 + i, arr.length).join(' ')])
//     }
//     for (let i = 1; i < arr.length; i++) {
//         arr1.push([arr.slice(0, i).join(' ')])
//         // console.log(arr1)
//     }

//     // console.log(arr1)

//     return arr1.map((el, idx) => {
//         return [el.join(''), arr2[idx].join('')]
//     })


// }
// console.log(partlist(["I", "wish", "I", "hadn't", "come"]))


//cari faktor 
// let contoh = 100000000000

// function getTotalX(a, b) {
//     // Write your code here

// }

// function faktor(n) {
//     let arr = []
//     for (let i = 2; i < contoh; i += 1) {
//         if (n % i === 0) {
//             arr.push(i)
//         }
//     }
//     return arr
// }
// const hasil1 = faktor(contoh)
// console.log(hasil1)


// function faktor2(n) {
//     let akar = Math.floor(Math.sqrt(n))
//     let arr = []
//     for (let i = 2; i <= akar; i++) {
//         if (n % i === 0) {
//             arr.push(i)
//             if (n / i !== i) {
//                 arr.push(n / i)
//             }
//         }
//     }
//     return arr
// }

// const hasil2 = faktor2(contoh)

// console.log(hasil2)


/// direction
let arr = ["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"];

function dirReduc(arr) {
    // ...
    let obj = {}
    arr.forEach(el => {
        if (!obj[el]) {
            obj[el] = 1
        }
        else {
            obj[el]++
        }
    })
    for (const [key, value] of Object.entries(obj)) {
        if (value <= 1) {
            console.log(key)
        }
    }
}

dirReduc(arr)


/// sum of digits
// let n = 16

// function digital_root(n) {
//     // ...
//     let num = n.toString()
//     num = num.split('')

// }
// digital_root(n)



