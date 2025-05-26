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

        Render.strokeRectUI(game.ctx, UI.battle.right.info)
        Render.drawImageUI(game.ctx, img.icon.hp, UI.battle.right.hpIcon)
        Render.fillTextUI(game.ctx, '0/0', UI.battle.right.hpText)
        Render.strokeRectUI(game.ctx, UI.battle.right.hpBar)
        Render.drawImageUI(game.ctx, img.icon.energy, UI.battle.right.energyIcon)
        Render.fillTextUI(game.ctx, '0/0', UI.battle.right.energyText)
        Render.strokeRectUI(game.ctx, UI.battle.right.energyBar)
    }

    static mouseUp(game, pos, button) {

    }
}
