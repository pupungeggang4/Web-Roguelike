class SceneCharacterSelect {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.characterSelect.buttonBack)

        for (let i = 0; i < 6; i++) {
            Render.strokeRectUI(game.ctx, UI.characterSelect.buttonCharacter[i])
        }
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.characterSelect.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }

            for (let i = 0; i < 6; i++) {
                if (pointInsideRectUI(pos, UI.characterSelect.buttonCharacter[i])) {
                    game.scene = 'map'
                    game.state = ''
                    game.adventureInit()
                }
            }
        }
    }
}
