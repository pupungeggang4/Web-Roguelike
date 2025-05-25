class SceneMap {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.map.buttonBack)
        Render.fillTextUI(game.ctx, 'Select', UI.map.textTitle)

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                if (game.adventure.layout[i][j] > 0) {
                    let rect = [UI.map.elementStart[0] + UI.map.elementInterval[0] * j, UI.map.elementStart[1] + UI.map.elementInterval[1] * i, UI.map.elementSize[0], UI.map.elementSize[1]]
                    let color = ['white', 'white', 'orange', 'blue', 'green', 'black']
                    game.ctx.fillStyle = color[game.adventure.layout[i][j]]
                    Render.fillRectUI(game.ctx, rect)
                    Render.strokeRectUI(game.ctx, rect)
                }
            }
        }

        game.ctx.fillStyle = 'black'
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.map.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }

            if (game.state === '') {
                this.handleCellClick(game, pos)
            }
        }
    }

    static handleCellClick(game, pos) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                let rect = [UI.map.elementStart[0] + UI.map.elementInterval[0] * j, UI.map.elementStart[1] + UI.map.elementInterval[1] * i, UI.map.elementSize[0], UI.map.elementSize[1]]
                if (pointInsideRectUI(pos, rect)) {
                    if (game.adventure.next === j) {
                        if (game.adventure.layout[i][j] === 2) {
                            game.scene = 'battle'
                            game.state = 'start'
                        }
                    }
                }
            }
        }
    }
}
