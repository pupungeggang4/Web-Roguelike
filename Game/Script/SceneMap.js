class SceneMap {
    static loop(game) {
        this.render(game)
    }

    static render(game) {
        Render.init(game.ctx)
        Render.drawImageUI(game.ctx, img.button.menu, UI.map.buttonMenu)
        Render.drawImageUI(game.ctx, img.button.info, UI.map.buttonInfo)
        Render.fillTextUI(game.ctx, `Floor:${game.adventure.floor}`, UI.map.textTitle)

        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                if (game.adventure.layout[i][j] > 0) {
                    let rect = [UI.map.elementStart[0] + UI.map.elementInterval[0] * j, UI.map.elementStart[1] + UI.map.elementInterval[1] * i, UI.map.elementSize[0], UI.map.elementSize[1]]
                    let type = ['', 'start', 'battle', 'event', 'shop', 'rest', 'boss']
                    Render.drawImageUI(game.ctx, img.icon[type[game.adventure.layout[i][j]]], rect)
                    Render.strokeRectUI(game.ctx, rect)
                    if (game.adventure.next === j) {
                        Render.drawImageUI(game.ctx, img.selectFrame80, rect)
                    }
                }
            }
        }

        if (game.state === 'info') {
            Render.renderPlayerInfo(game.ctx, game, game.player)
        }

        if (game.menu === true) {
            Render.renderMenu(game.ctx)
        }

        game.ctx.fillStyle = 'black'
    }

    static mouseUp(game, pos, button) {
        if (game.menu === false) {
            if (button === 0) {
                if (pointInsideRectUI(pos, UI.map.buttonMenu)) {
                    game.menu = true
                }

                if (game.state === '') {
                    this.handleCellClick(game, pos)
                    if (pointInsideRectUI(pos, UI.map.buttonInfo)) {
                        game.state = 'info'
                        game.playerInfoTab = 'profile'
                        game.playerDeckPage = 0
                        game.playerDescriptionIndex = -1
                    }
                } else if (game.state === 'info') {
                    if (pointInsideRectUI(pos, UI.map.buttonInfo) || pointInsideRectUI(pos, UI.map.info.buttonClose)) {
                        game.state = ''
                    } else if (pointInsideRectUI(pos, UI.map.info.tabProfile)) {
                        game.playerInfoTab = 'profile'
                    } else if (pointInsideRectUI(pos, UI.map.info.tabDeck)) {
                        game.playerInfoTab = 'deck'
                    }
                    if (game.playerInfoTab === 'profile') {
                        if (pointInsideRectUI(pos, UI.map.info.weapon)) {
                            game.playerDescriptionIndex = -1
                        }
                        for (let i = 0; i < 8; i++) {
                            if (pointInsideRectUI(pos, UI.map.info.equipment[i])) {
                                if (i < game.player.equipment.length) {
                                    game.playerDescriptionIndex = i
                                }
                            }
                        }
                        for (let i = 0; i < 4; i++) {
                            if (pointInsideRectUI(pos, UI.map.info.item[i])) {
                                if (i < game.player.item.length) {
                                    game.playerDescriptionIndex = i + 8
                                }
                            }
                        }
                    }
                    if (game.playerInfoTab === 'deck') {
                        this.handleInfoDeckClick(game, game.player, pos)
                    }
                }
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

    static handleCellClick(game, pos) {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 8; j++) {
                let rect = [UI.map.elementStart[0] + UI.map.elementInterval[0] * j, UI.map.elementStart[1] + UI.map.elementInterval[1] * i, UI.map.elementSize[0], UI.map.elementSize[1]]
                if (pointInsideRectUI(pos, rect)) {
                    if (game.adventure.next === j) {
                        if (game.adventure.layout[i][j] === 2) {
                            game.scene = 'battle'
                            game.state = ''
                        }
                    }
                }
            }
        }
    }

    static handleInfoDeckClick(game, player, pos) {
        let maxPage = Math.ceil(game.player.deck.length / 8) - 1
        if (pointInsideRectUI(pos, UI.map.info.buttonNext)) {
            if (game.playerDeckPage < maxPage) {
                game.playerDeckPage += 1
            }
        }

        if (pointInsideRectUI(pos, UI.map.info.buttonPrev)) {
            if (game.playerDeckPage > 0) {
                game.playerDeckPage -= 1
            }
        }
    }
}
