const str = require('./testcase')

const topic = str.split('\n')

function acmTeam(topic) {
    // Write your code here
    let max;
    let teams = 0;
    const decimalTopic = topic.map(s => parseInt(s, 2))
    // for (let i = 0; i < decimalTopic.length - 1; i++) {
    //     for (let j = i + 1; j < decimalTopic.length; j++) {
    //         const know = decimalTopic[i] | decimalTopic[j];
    //         console.log(know)
    //         const coveredTopic = know.toString(2).replace('0', '').length
    //         if (!max || coveredTopic > max) {
    //             max = coveredTopic
    //             teams = 1;
    //         } else if (coveredTopic === max) {
    //             teams++
    //         }
    //     }
    // }
    // return [max, teams]
    return decimalTopic
}

console.log(acmTeam(topic))