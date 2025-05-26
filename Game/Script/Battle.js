class Battle {
    constructor() {
        this.player = new PlayerBattle()
        this.field = new Field()
    }
}

class Field {
    constructor() {
        this.cell = []
        for (let i = 0; i < 9; i++) {
            let temp = []
            for (let j = 0; j < 9; j++) {
                temp.push(new Empty())
            }
            this.cell.push(temp)
        }

        this.canvas = document.createElement('canvas')
        this.canvas.width = 576
        this.canvas.height = 576
        this.ctx = this.canvas.getContext('2d')
    }

    render() {
        
    }
}
