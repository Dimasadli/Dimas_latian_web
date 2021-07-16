class SquaredString {
    constructor(huruf) {
        this._huruf = huruf;
    }

    static variable = "test"

    static contohMethodStatic() {
        console.log("Method static")
    }

    rot90Clock() {
        const huruf = this._huruf
        // your code
        let diagonal = this.diag1Sym(huruf);
        diagonal = diagonal.split('\n')
        let result = []
        for (let i = 0; i < diagonal.length; i++) {
            result.push(diagonal[i].split('').reverse().join(''))
        }
        return result.join('\n')
    }

    diag1Sym() {
        const huruf = this._huruf

        // your code
        let newHuruf = huruf.split('\n')
        let arr = []
        let result = []

        for (let a = 0; a < newHuruf.length; a++) {
            arr.push([])
        }

        for (var i = 0; i < newHuruf.length; i++) {
            for (var j = 0; j < newHuruf[i].length; j++) {
                arr[i].push(newHuruf[j][i])
            };
        };

        for (var i = 0; i < arr.length; i++) {
            result.push(arr[i].join(''))
        };

        return result.join('\n')
    }

    selfieAndDiag1() {
        const huruf = this._huruf

        // your code
        let diagonal = this.diag1Sym(huruf)
        diagonal = diagonal.split('\n')
        let result = []
        let newHuruf = huruf.split('\n')
        for (let i = 0; i < diagonal.length; i++) {
            result.push(newHuruf[i] + '|' + diagonal[i])
        }
        return result.join('\n')
    }

}

const ss = new SquaredString("abcd\nefgh\nijkl\nmnop")
console.log(SquaredString.variable)