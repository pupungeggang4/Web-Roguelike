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

        this.cellSize = 64
        this.canvas = document.createElement('canvas')
        this.canvas.width = 576
        this.canvas.height = 576
        this.ctx = this.canvas.getContext('2d')
    }

    render(game, ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                this.ctx.strokeRect(this.cellSize * j, this.cellSize * i, this.cellSize, this.cellSize)
        
            }
        }
        ctx.drawImage(this.canvas, UI.battle.fieldStart[0], UI.battle.fieldStart[1])
    }
}
