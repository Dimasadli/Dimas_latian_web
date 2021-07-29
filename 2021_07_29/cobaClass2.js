class Animal {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    eat() {
        return `${this.name} is eating`
    }
}

class Wolf extends Animal {
    constructor(name, age, flaw = 10) {
        super(name, age)
        this.flaw = flaw
    }
    leading() {
        return `${this.name} is fighting with is ${this.flaw}, after that ${super.eat()}`
    }
}
