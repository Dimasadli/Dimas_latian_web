// function translatePigLatin(str) {
//     const vowel = 'aiueo'
//     let i = 0;

//     let firstVowel = str[i]
//     while (vowel.indexOf(str[i]) < 0) {
//         i++
//         firstVowel = str[i]
//     }
//     let last = str.slice(0, i)
//     let first = str.slice(i, str.length)
//     if (i === 0) {
//         return first + last + 'way'
//     }
//     return first + last + 'ay'
// }

function firstVowel(str) {
    const newStr = str.split(' ')
    let index = 0
    for (let i = 0; i < newStr.length; i++) {
        index = newStr[i].match(/[aiueo]/).index
    }
    // const hasil = newStr.map(el => {
    //     if (index === 0) {
    //         return el
    //     }
    //     else {
    //         return el.slice(index) + '-' + el.slice(0, index) + 'ay'
    //     }
    // })
    // return hasil.join(' ')
}
console.log(translatePigLatin('Pig Latin'))

// function pigLatin(str) {
//     let firstPosition = firstVowel(str)
//     if (firstPosition > 0) {
//         return str.slice(firstPosition, str.length) + str.slice(0, firstPosition) + 'ay'
//     }
//     else {
//         return str + 'way'
//     }
// }


// console.log(pigLatin("consonant"))