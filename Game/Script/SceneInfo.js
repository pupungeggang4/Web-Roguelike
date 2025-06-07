class SceneInfo {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.drawImageUI(game.ctx, img.button.back, UI.info.buttonBack)
        Render.fillTextUI(game.ctx, 'You Found...', UI.info.textTitle)

        Render.strokeRectUI(game.ctx, UI.info.tabCard)
        Render.drawImageUI(game.ctx, img.icon.card, UI.info.iconCard)
        Render.strokeRectUI(game.ctx, UI.info.tabEquipment)
        Render.drawImageUI(game.ctx, img.icon.equipment, UI.info.iconEquipment)
        Render.strokeRectUI(game.ctx, UI.info.tabWeapon)
        Render.drawImageUI(game.ctx, img.icon.weapon, UI.info.iconWeapon)
        Render.strokeRectUI(game.ctx, UI.info.tabItem)
        Render.drawImageUI(game.ctx, img.icon.item, UI.info.iconItem)

        Render.renderInfo(game, game.ctx)
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
