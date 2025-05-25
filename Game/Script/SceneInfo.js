class SceneInfo {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.info.buttonBack)
        Render.fillTextUI(game.ctx, 'Found', UI.info.textTitle)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.info.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }
        }
    }
}
