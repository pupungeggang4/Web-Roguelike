import {GameVar} from 'src/gamevar.js'
import {Game} from 'src/game.js'

window.onload = main
document.getElementById('screen').oncontextmenu = (event) => {
    event.preventDefault()
    return false
}

function main() {
    let game
    let gameVar
    try {
        gameVar = new GameVar()
        game = new Game()
        game.run(gameVar)
    } catch (e) {
        console.log(e)
        if (gameVar.gameLoop) {
            cancelAnimationFrame(gameVar.gameLoop)
        }
    }
}
