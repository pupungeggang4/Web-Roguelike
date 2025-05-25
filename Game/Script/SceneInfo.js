class SceneInfo {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.Info.buttonBack)
        Render.fillTextUI(game.ctx, 'Found', UI.Info.textTitle)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.Info.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }
        }
    }
}
