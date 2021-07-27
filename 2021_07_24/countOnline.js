function countOnline(usersObj) {
    // Only change code below this line
    let total = 0

    for (let user in userObj) {
        if (userObj[user].online === true) {
            total++
        }
    }
    return total
    // Only change code above this line
}

const userObj = { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } }

console.log(countOnline(userObj))