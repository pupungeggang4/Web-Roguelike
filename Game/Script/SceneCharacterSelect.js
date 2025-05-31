class SceneCharacterSelect {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.drawImageUI(game.ctx, img.button.back, UI.characterSelect.buttonBack)

        Render.fillTextUI(game.ctx, 'Select Character', UI.characterSelect.textTitle)
        for (let i = 0; i < 9; i++) {
            Render.strokeRectUI(game.ctx, UI.characterSelect.buttonCharacter[i])
            if (game.saveData['unlocked'][i + 1] === false) {
                Render.drawImageUI(game.ctx, img.locked, UI.characterSelect.buttonCharacter[i])
            }
        }
        Render.drawImageUI(game.ctx, img.character[1], UI.characterSelect.buttonCharacter[0])
        if (game.selectedCharacter != -1) {
            Render.drawImageUI(game.ctx, img.selectFrame, UI.characterSelect.buttonCharacter[game.selectedCharacter])
        }

        Render.strokeRectUI(game.ctx, UI.characterSelect.descriptionBox)

        if (game.selectedCharacter != -1) {
            Render.fillTextUI(game.ctx, `${dataCharacterD[game.selectedCharacter + 1]['name']}`, UI.characterSelect.textName)
            Render.fillTextUI(game.ctx, `HP:${dataCharacter[game.selectedCharacter + 1]['hp']}`, UI.characterSelect.textHP)
            Render.fillTextUI(game.ctx, `Energy:${dataCharacter[game.selectedCharacter + 1]['energy']}`, UI.characterSelect.textEnergy)
            Render.fillTextUI(game.ctx, `Attack:${dataCharacter[game.selectedCharacter + 1]['attack']}`, UI.characterSelect.textAttack)
            Render.fillTextUI(game.ctx, `Hardness:${dataCharacter[game.selectedCharacter + 1]['hardness']}`, UI.characterSelect.textHardness)
        }
        Render.strokeRectUI(game.ctx, UI.characterSelect.buttonStart)
        Render.fillTextUI(game.ctx, `Start`, UI.characterSelect.textStart)
    }

    static mouseUp(game, pos, button) {
        if (button === 0) {
            if (pointInsideRectUI(pos, UI.characterSelect.buttonBack)) {
                game.scene = 'title'
                game.state = ''
            }

            for (let i = 0; i < 9; i++) {
                if (pointInsideRectUI(pos, UI.characterSelect.buttonCharacter[i])) {
                    if (game.saveData['unlocked'][i + 1] === true) {
                        game.selectedCharacter = i
                    }
                }
            }

            if (pointInsideRectUI(pos, UI.characterSelect.buttonStart)) {
                if (game.selectedCharacter != -1) {
                    game.scene = 'map'
                    game.state = ''
                    game.adventureInit(game)
                }
            }
        }
    }
}
