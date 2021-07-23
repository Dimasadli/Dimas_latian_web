function groupByCommas(n) {
    const stringN = n.toString();
    let result = []
    for (let i = stringN.length; i > 0; i -= 3) {
        const a = i-3 < 0 ? 0 : i-3
        result.push(stringN.slice(a, i))
    }
    console.log(result.reverse().join(','))
}

const n = 1000000019898
groupByCommas(n)