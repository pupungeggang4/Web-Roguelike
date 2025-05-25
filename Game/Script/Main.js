window.onload = main
window.onerror = errorHandle
window.oncontextmenu = rightClick

let game

function main() {
    game = new Game()
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        console.log(`${err} ${url} ${line}:${col}`)
        cancelAnimationFrame(game.gameLoop)
    }
}

function rightClick() {
    return false
}
