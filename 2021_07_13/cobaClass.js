class Person {
    constructor(nama, umur, jumlahKaki, jenisKelamin) {
        this.nama = nama;
        this.umur = umur;
        this.jumlahKaki = jumlahKaki;
        this.jenisKelamin = jenisKelamin;
        const namaLocal = nama
    }
    _spinNameWords() {
        console.log(`call spinword`)
        return this.nama.split('').reverse().join('')
    }
    solvePalindrome(sentence) {
        const spinnedWord = this._spinNameWords()
        return sentence === spinnedWord
    }
}

const farhan = new Person("Farhan", 94, 14, "L");
const rifqi = new Person("Rifqi", 12, 8, "Laki laki");


console.log(farhan.solvePalindrome('nahraF'))
console.log(farhan._spinNameWords())

class Color {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.rgbToHsl();
    }
    innerRGB() {
        const { r, g, b } = this;
        return (`${r} , ${g} , ${b}`)
    }
    rgb() {
        const rgb = this.innerRGB()
        return `rgb${rgb}`
    }
    rgba(a = 1.0) {
        return `rgba${this.innerRGB(), a}`
    }
    hex() {
        const { r, g, b } = this;
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    hsl() {
        const { h, s, l } = this
        return `hsl(${h},${s}%,${l}%)`
    }
    rgbToHsl() {
        let { r, g, b } = this
        r /= 255, g /= 255, b /= 255;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var h, s, l = (max + min) / 2;
        if (max == min) {
            h = s = 0; // achromatic
        } else {
            var d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        this.h = h
        this.s = s
        this.l = l
    }
}

const color1 = new Color(100, 30, 50, ['Dimas', 'Anas'])

console.log(color1)
console.log(color1.rgb())
console.log(color1.hex())
console.log(color1.hsl())

