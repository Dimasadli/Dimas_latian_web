const decodeMorse = function (morseCode) {
    //your code here
    var MORSE_CODE = {
        "-----": "0",
        ".----": "1",
        "..---": "2",
        "...--": "3",
        "....-": "4",
        ".....": "5",
        "-....": "6",
        "--...": "7",
        "---..": "8",
        "----.": "9",
        ".-": "A",
        "-...": "B",
        "-.-.": "C",
        "-..": "D",
        ".": "E",
        "..-.": "F",
        "--.": "G",
        "....": "H",
        "..": "I",
        ".---": "J",
        "-.-": "K",
        ".-..": "L",
        "--": "M",
        "-.": "N",
        "---": "O",
        ".--.": "P",
        "--.-": "Q",
        ".-.": "R",
        "...": "S",
        "-": "T",
        "..-": "U",
        "...-": "V",
        ".--": "W",
        "-..-": "X",
        "-.--": "Y",
        "--..": "Z",
        "-.-.--": "!",
        ".-.-.-": ".",
        "--..--": ","
    };
    // return morseCode
    //     .split("   ") // get word code 3 spaces apart
    //     .map(word => word
    //         .split(" ") // get character code 1 spaces apart
    //         .map(character => MORSE_CODE[character]) // decode Morse code character
    //         .join('')
    //     )
    //     .join(' ') // add spaces between words 
    //     .trim()
    return morseCode.split('  ')
        .map(arr => {
            return arr.split(' ').map(el => {
                return MORSE_CODE[el]
            }).join('')
        }).join(' ')
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))