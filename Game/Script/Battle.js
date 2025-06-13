class Battle {
    constructor() {
        this.player = new PlayerBattle()
        this.field = new Field()
    }
}

class Field {
    constructor() {
        this.cell = []
        for (let i = 0; i < 7; i++) {
            let temp = []
            for (let j = 0; j < 7; j++) {
                temp.push(new Empty())
            }
            this.cell.push(temp)
        }

        this.cellSize = 80
        this.canvas = document.createElement('canvas')
        this.canvas.width = 560
        this.canvas.height = 560
        this.ctx = this.canvas.getContext('2d')
    }

    render(game, ctx) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        for (let i = 0; i < 7; i++) {
            for (let j = 0; j < 7; j++) {
                this.ctx.strokeRect(this.cellSize * j, this.cellSize * i, this.cellSize, this.cellSize)
        
            }
        }
        ctx.drawImage(this.canvas, UI.battle.fieldStart[0], UI.battle.fieldStart[1])
    }
}
