class SceneMap {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
        }
    }
}
