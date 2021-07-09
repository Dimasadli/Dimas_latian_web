let str = ''
for (let a = 0; a < 4; a++) {
    for (let b = 0; b <= a; b++) {
        str += '*'
    }
    str += '\n'
}

for (let i = 5; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
        str += '*'
    }
    str += '\n'
}
console.log(str)

// let arr = [['java', 'hiu', 'bali'], ['css', 'babon', 'kalimantan'], ['html', 'babi', 'papua']];
// let baru = ''
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         // console.log(arr[i], arr[j])
//     }
// }

// let arr = [1, 2, 4, 5, 6, 7, 8, 9]
// let k = 10

// function nomer3(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length; j++) {
//             console.log(arr[j] + arr[i])
//         }
//     }
// }



// nomer3(arr, k)

//staircase
let step = ''
let result
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (j == i) {
            step += '#'
        }
        else {
            step += ' '
        }
    }
    step += '\n'
}


for (let i = 4; i > 0; i--) {
    for (let j = 0; j <= 4; j++) {
        if (j === i) {
            step += '#'
        }
        else {
            step += ' '

        }
    }
    step += '\n'
}
console.log(step)

// console.log(1 < 1)

let s = ''
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (i === 5 - 1 - j) {
            s += '^'
        }
        else {
            s += ' '
        }
    }
    // s += '\n'
}
console.log(s)


var array = ["ABCD", "EFGH", "IJKL"];

var Ylength = array.length;
var Xlength = array[0].length;
var maxLength = Math.max(Xlength, Ylength);
console.log(maxLength)
var temp;
// for (var k = 0; k <= 2 * (maxLength - 1); ++k) {
//     temp = []
//     for (var y = Ylength - 1; y >= 0; --y) {
//         var x = k - y;
//         if (x >= 0 && x < Xlength) {
//             temp.push(array[y][x]);
//         }
//     }
//     if (temp.length > 0) {
//         document.body.innerHTML += temp.join('') + '<br>';
//     }
// }
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
        console.log(array[i][j])
        // console.log('\n')
    }
    console.log("\n")
}

// alert('Tebak angka dari 1-10:')

// let comp = Math.floor(Math.random() * 11);
// let player = prompt('Masukkan angka magic anda')
// let tanya = true
// let hasil = ''

// while (tanya) {
//     for (let i = 2; i >= 0; i--) {
//         if (player == comp && i <= 3)
//     }
// }

