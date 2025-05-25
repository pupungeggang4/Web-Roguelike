class SceneMap {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.map.buttonBack)
        Render.fillTextUI(game.ctx, 'Select', UI.map.textTitle)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.map.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }
        }
    }
}
