// let str = ''
// for (let a = 0; a < 4; a++) {
//     for (let b = 0; b <= a; b++) {
//         str += '*'
//     }
//     str += '\n'
// }

// for (let i = 5; i >= 0; i--) {
//     for (let j = 0; j < i; j++) {
//         str += '*'
//     }
//     str += '\n'
// }
// console.log(str)

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
// let step = ''
// let result
// for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//         if (j == i) {
//             step += '#'
//         }
//         else {
//             step += ' '
//         }
//     }
//     step += '\n'
// }


// for (let i = 4; i > 0; i--) {
//     for (let j = 0; j <= 4; j++) {
//         if (j === i) {
//             step += '#'
//         }
//         else {
//             step += ' '

//         }
//     }
//     step += '\n'
// }
// console.log(step)

// console.log(1 < 1)

// let s = ''
// for (let i = 0; i < 5; i++) {
//     for (let j = 0; j < 5; j++) {
//         if (i === 5 - 1 - j) {
//             s += '^'
//         }
//         else {
//             s += ' '
//         }
//     }
//     // s += '\n'
// }
// console.log(s)


// var array = ["ABCD", "EFGH", "IJKL"];

// var Ylength = array.length;
// var Xlength = array[0].length;
// var maxLength = Math.max(Xlength, Ylength);
// console.log(maxLength)
// var temp;
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
// for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array.length; j++) {
//         console.log(array[i][j])
//         // console.log('\n')
//     }
//     console.log("\n")
// }

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
// function whatIsInAName(collection, source) {
//     var arr = [];
//     // Only change code below this line
//     let keys = Object.keys(source)
//     const hasil = collection.filter(obj => {
//         let temp = []
//         keys.every(key => {
//             if (obj[key]===source[key]){
//                 console.log(obj[key])
//             }
//         })
//         // return obj
//     })

//     // Only change code above this line
//     // console.log(hasil);
// }


// console.log(whatIsInAName([
//     { "apple": 1, "bat": 2 },
//     { "bat": 2 },
//     { "apple": 1, "bat": 2, "cookie": 2 }],
//     { "apple": 1, "bat": 2 }))


// baru 2D
// let huruf = [[1, 2, 3, 4], 'efgh', 'ijkl', 'mnop']
// let arr = []
// let result = []
// for (let a = 0; a < huruf.length; a++) {
//     arr.push([])
// }

// for (var i = 0; i < huruf.length; i++) {
//     for (var j = 0; j < huruf[i].length; j++) {
//         arr[i].push(huruf[j][i])
//     };
// };
// console.log(arr)

// for (var i = 0; i < arr.length; i++) {
//     result.push(arr[i].join(''))
// };

// console.log(result)





// let arr2 = []
// let arr3 = []
// let arr4 = []
// for (let i = 0, j = 0; i < huruf.length; i++) {
//     arr.push(huruf[i][j])
// }
// arr = arr.join('')
// for (let i = 0, j = 1; i < huruf.length; i++) {
//     arr2.push(huruf[i][j])
// }
// arr2 = arr2.join('')
// for (let i = 0, j = 2; i < huruf.length; i++) {
//     arr3.push(huruf[i][j])
// }
// arr3 = arr3.join('')

// for (let i = 0, j = 3; i < huruf.length; i++) {
//     arr4.push(huruf[i][j])
// }
// arr4 = arr4.join('')
// let result = arr + ' ' + arr2 + ' ' + arr3 + ' ' + arr4
// console.log(result.split(' '))


// unpas 
// let arr = ['Dimas', 'Samid', 'Anas']
// function tambahPenumpang(nama, arr) {

//     if (arr.length == 0) {
//         arr.push(nama)
//         return arr
//     }
//     else {
//         for (let i = 0; i < arr.length; i++) {
//             if (arr[i] === undefined) {
//                 arr[i] = nama
//                 return arr
//             }
//             else if (i == arr.length - 1) {
//                 arr.push(nama)
//                 return arr
//             }
//         }

//     }
// }

// console.log(tambahPenumpang('Ajay', arr))


// let arr = [10, 11, 1998, 2000, 13]
// for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//         console.log(arr[i] + arr[j])
//     }
// }

//codewars
// function transpose(matrix) {
//     let arr = []
//     for (var i = 0; i < matrix[0].length; i++) {
//         arr.push([])
//     }
//     for (let a = 0; a < matrix.length; a++) {
//         for (let b = 0; b < matrix[a].length; b++) {
//             arr[a][b] = matrix[b]
//         }
//     }
//     console.log(arr)
// }


// console.log(transpose([[1, 2, 3], [4, 5, 6]]))



// let huruf = 'abcd\nefgh\nijkl\nmnop'

// function rot(huruf) {
//     // your code
//     huruf = huruf.split('\n')
//     ////// cara mudah ***
//     // let result = huruf.reverse().join('\n')
//     // console.log(result)

//     ////// cara susah ***
//     let arr = []
//     for (let a = 0; a < huruf[0].length; a++) {
//         arr.push([])
//     }

//     for (let i = 0; i < huruf.length; i++) {
//         for (let j = 0; j < huruf[i].length; j++) {
//             arr[i].push(huruf[huruf.length - 1 - i][huruf[j].length - 1 - j])
//         }
//     }
//     let result = []
//     for (let i in arr) {
//         result.push(arr[i].join(''))
//     }
//     return result.join('\n')
// }

// function selfieAndRot(huruf) {
//     // your code
//     let rotational = rot(huruf)
//     rotational = rotational.split('\n')
//     let newHuruf = huruf.split('\n')
//     let result1 = []
//     let result2 = []
//     let dot = ''
//     for (let i = 0; i < newHuruf.length; i++) {
//         dot += '.'
//     }
//     for (let i in newHuruf) {
//         result1.push(newHuruf[i] + dot)
//         result2.push(dot + rotational[i])
//     }
//     console.log(result1.concat(result2).join('\n'))
// }
// selfieAndRot(huruf)



// function selfieAndRot(strng) {
//     // your code
// }
// function oper(fct, s) {
//     // your code
// }

// function rot90Clock(huruf) {
//     // your code
//     let diagonal = diag1Sym(huruf);
//     diagonal = diagonal.split('\n')
//     let result = []
//     for (let i = 0; i < diagonal.length; i++) {
//         result.push(diagonal[i].split('').reverse().join(''))
//     }
//     return result.join('\n')
// }


// function diag1Sym(huruf) {
//     // your code
//     let newHuruf = huruf.split('\n')
//     let arr = []
//     let result = []

//     for (let a = 0; a < newHuruf.length; a++) {
//         arr.push([])
//     }

//     for (var i = 0; i < newHuruf.length; i++) {
//         for (var j = 0; j < newHuruf[i].length; j++) {
//             arr[i].push(newHuruf[j][i])
//         };
//     };

//     for (var i = 0; i < arr.length; i++) {
//         result.push(arr[i].join(''))
//     };

//     return result.join('\n')
// }

// function selfieAndDiag1(huruf) {
//     // your code
//     let diagonal = diag1Sym(huruf)
//     diagonal = diagonal.split('\n')
//     let result = []
//     let newHuruf = huruf.split('\n')
//     for (let i = 0; i < diagonal.length; i++) {
//         result.push(newHuruf[i] + '|' + diagonal[i])
//     }
//     return result.join('\n')
// }

// console.log(selfieAndDiag1(huruf))


// let s = "abcd\nefgh\nijkl\nmnop"


// function diag2Sym(strng) {
//     // your code
//     strng = strng.split('\n')
//     let arr = []
//     for (let i = 0; i < strng.length; i++) {
//         arr.push([])
//     }

//     for (let a = 0; a < strng.length; a++) {
//         for (let b = 0; b < strng[a].length; b++) {
//             arr[a].push(strng[strng[a].length - 1 - b][strng.length - 1 - a])

//         }
//     }
//     let result = []
//     arr.forEach(el => {
//         result.push(el.join(''))
//     })
//     return result.join('\n')

// }


/// longest consecutive alphabet
const str = 'tdfdffddffsdsfffffsdsdsddddd';
const findConsecutiveCount = (str = '') => {
    // let res = '';
    // let count = 1;
    // let arr = []
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === str[i + 1]) {
    //         count++
    //     } else {
    //         if (arr.every(v => v < count)) {
    //             res = str[i] + count
    //         }
    //         arr.push(count)
    //         count = 1
    //     }
    // }
    // return !res ? ['', 0] : [res.slice(0, 1), res.slice(1) * 1];
    let max = 0
    let currentMax = 1
    let temp = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            currentMax++
        }
        else {
            max = Math.max(max, currentMax)
            currentMax = 1
        }
    }
    return max
};
console.log(findConsecutiveCount(str));




/// codewars
// const arr = ["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"];
// const num = 2;

// cara 1 
// function longestConsec(strarr, k) {
//     if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
//     let longStr = '';
//     let newStr = '';
//     for (let i = 0; i < strarr.length; i++) {
//         newStr = strarr.slice(i, i + k);
//         console.log(newStr)
//         if (newStr.join('').length > longStr.length) {
//             longStr = newStr.join('');
//         }
//     }
//     return longStr;
// }
// console.log(longestConsec(arr, num));

