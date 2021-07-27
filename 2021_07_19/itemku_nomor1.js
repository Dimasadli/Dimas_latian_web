

const contohArr = [
    "Enter uid1234 Muzi",
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
]

function itemku1(contohArr) {
    let user = {} // key = id, value = name
    let result = []
    contohArr.forEach(step => {
        const [command, id, ...name] = step.split(' ');
        if (command === "Enter") {
            result.push(id + " came in")
            user[id] = name
        } else if (command === "Leave") {
            result.push(id + " has left")
        } else if (command === "Change") {
            user[id] = name;
        }
    })
    return result = result.map(e => {
        const [id, ...text] = e.split(' ')
        return user[id] + " " + text
    })
}

console.log(itemku1(contohArr))
