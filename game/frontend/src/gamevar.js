export class GameVar {
    constructor() {
        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.rect = null

        this.scene = 'title'
        this.sceneChanged = false
        this.state = ''
        this.menu = false
        this.gameLoop = null
    }
}
