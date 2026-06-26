export class Game {
    constructor() {

    }

    run(gameVar) {
        gameVar.rect = gameVar.canvas.getBoundingClientRect()
        window.addEventListener('pointerup', (event) => this.pointerUp(event, gameVar), false)
        window.addEventListener('resize', (event) => {
            gameVar.rect = gameVar.canvas.getBoundingClientRect()
            console.log(gameVar.rect)
        }, false)
        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    loop(gameVar) {
        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    pointerUp(event, gameVar) {

    }
}
