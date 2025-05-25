class SceneMap {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.Map.buttonBack)
        Render.fillTextUI(game.ctx, 'Select', UI.Map.textTitle)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.Map.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }
        }
    }
}
