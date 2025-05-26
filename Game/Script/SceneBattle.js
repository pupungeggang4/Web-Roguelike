class SceneBattle {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.battle.fieldRect)
        game.battle.field.render(game, game.ctx)
        Render.strokeRectUI(game.ctx, UI.battle.expBar)
    }

    static mouseUp(game, pos, button) {

    }
}
