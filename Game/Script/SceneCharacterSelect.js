class SceneCharacterSelect {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.strokeRectUI(game.ctx, UI.characterSelect.buttonBack)

        Render.fillTextUI(game.ctx, 'Select Character', UI.characterSelect.textTitle)
        for (let i = 0; i < 6; i++) {
            Render.strokeRectUI(game.ctx, UI.characterSelect.buttonCharacter[i])
            if (game.saveData['unlocked'][i] === false) {
                Render.drawImageUI(game.ctx, img.locked, UI.characterSelect.buttonCharacter[i])
            }
        }

        Render.strokeRectUI(game.ctx, UI.characterSelect.descriptionBox)
        Render.strokeRectUI(game.ctx, UI.characterSelect.buttonStart)
        Render.fillTextUI(game.ctx, `Start`, UI.characterSelect.textStart)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.characterSelect.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }

            for (let i = 0; i < 6; i++) {
                if (pointInsideRectUI(pos, UI.characterSelect.buttonCharacter[i])) {
                    if (game.saveData['unlocked'][i] === true) {
                        game.selectedCharacter = i
                    }
                }
            }

            if (pointInsideRectUI(pos, UI.characterSelect.buttonStart)) {
                if (game.selectedCharacter != -1) {
                    game.scene = 'map'
                    game.state = ''
                    game.adventureInit()
                }
            }
        }
    }
}
