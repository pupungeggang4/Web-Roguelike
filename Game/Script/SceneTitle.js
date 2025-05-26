class SceneTitle {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.fillTextUI(game.ctx, 'Roguelike', UI.title.textTitle)
        Render.strokeRectUI(game.ctx, UI.title.buttonStart)
        Render.fillTextUI(game.ctx, 'Start Game', UI.title.textStart)
        Render.strokeRectUI(game.ctx, UI.title.buttonInfo)
        Render.fillTextUI(game.ctx, 'Info', UI.title.textInfo)
        Render.strokeRectUI(game.ctx, UI.title.buttonErase)
        Render.fillTextUI(game.ctx, 'Erase Data', UI.title.textErase)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.title.buttonStart)) {
                game.scene = 'characterselect'
                game.state = ''
            } else if (pointInsideRectUI(pos, UI.title.buttonInfo)) {
                game.scene = 'info'
                game.state = ''
                game.infoTab = ''
            } else if (pointInsideRectUI(pos, UI.title.buttonErase)) {
                game.saveData = game.eraseData()
            }
        }
    }
}
