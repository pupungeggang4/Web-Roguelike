class Unitlike {
    constructor() {

    }
}

class Empty extends Unitlike {
    constructor() {
        super()
    }
}

class Unit extends Unitlike{
    constructor() {
        super()
        this.ID = 0
        this.coord = [0, 0]
        this.hp = 0
        this.hpMax = 0
        this.attack = 0
        this.action = []
    }
}
