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
}
const farhan = new Person("Farhan", 94, 14, "L");
const rifqi = new Person("Rifqi", 12, 8, "Laki laki");

console.log(farhan.solvePalindrome())
console.log(farhan.spinNameWords())

