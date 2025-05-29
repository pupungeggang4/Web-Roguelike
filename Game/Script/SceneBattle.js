class SceneBattle {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.battle.buttonMenu)
        Render.strokeRectUI(game.ctx, UI.battle.fieldBorder)
        Render.strokeRectUI(game.ctx, UI.battle.fieldRect)
        game.battle.field.render(game, game.ctx)
        Render.strokeRectUI(game.ctx, UI.battle.expBar)

        Render.renderBattleRight(game.ctx, game.battle.player)

        if (game.menu === true) {
            Render.renderMenu(game.ctx)
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (game.menu === false) {
                if (pointInsideRectUI(pos, UI.battle.buttonMenu)) {
                    game.menu = true
                }
            } else if (game.menu === true) {
                if (pointInsideRectUI(pos, UI.menu.buttonResume)) {
                    game.menu = false
                } else if (pointInsideRectUI(pos, UI.menu.buttonGiveUp)) {
                    game.menu = false
                    game.scene = 'title'
                    game.state = ''
                }
            }
        }
    }
}
