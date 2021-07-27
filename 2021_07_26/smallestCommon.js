// function smallestCommons(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i; j < arr.length; j++) {
//             arr[i] * arr[i] = arr[j] * arr[j]
//         }
//     }
// }


// smallestCommons([1, 5]);


let people = [
    { name: 'Dimas', age: 25 },
    { name: 'Anas', age: 45 },
    { name: 'Sajid', age: 55 },
    { name: 'Adli', age: 55 },
    { name: 'Ghost' },
]

const result = people.reduce((group, person) => {
    const umur = person.age
    if (!group[umur]) group[umur] = []
    group[umur].push(person)
    return group
}, {})

console.log(result)