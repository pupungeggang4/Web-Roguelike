class Render {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.strokeStyle = 'black'
        ctx.lineWidth = 2
        ctx.fillStyle = 'white'
        ctx.clearRect(0, 0, 1280, 720)
        ctx.fillRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    static renderPlayerInfo(ctx, game, player) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.map.info.rect)
        Render.strokeRectUI(ctx, UI.map.info.rect)
        ctx.fillStyle = 'black'
        Render.strokeRectUI(ctx, UI.map.info.tabProfile)
        Render.strokeRectUI(ctx, UI.map.info.tabDeck)

        if (game.playerInfoTab === 'profile') {
            Render.fillTextUI(ctx, 'Name', UI.map.info.textName)
            Render.strokeRectUI(ctx, UI.map.info.portrait)
            Render.fillTextUI(ctx, `Lv.${player.level}`, UI.map.info.textLevel)
            Render.fillTextUI(ctx, `Exp:${player.exp}/${player.expMax}`, UI.map.info.textExp)
            Render.fillTextUI(ctx, `Gold:${player.gold}`, UI.map.info.textGold)

            Render.fillTextUI(ctx, `Equipment`, UI.map.info.textEquipment)
            for (let i = 0; i < 8; i++) {
                Render.strokeRectUI(ctx, UI.map.info.equipment[i])
            }

            Render.fillTextUI(ctx, `Item`, UI.map.info.textItem)
            for (let i = 0; i < 4; i++) {
                Render.strokeRectUI(ctx, UI.map.info.item[i])
            }
        } else if (game.playerInfoTab === 'deck') {
            Render.fillTextUI(ctx, `Card`, UI.map.info.textCard)
            Render.drawImageUI(ctx, img.button.prev, UI.map.info.buttonPrev)
            Render.drawImageUI(ctx, img.button.next, UI.map.info.buttonNext)
            for (let i = 0; i < 8; i++) {
                Render.strokeRectUI(ctx, UI.map.info.card[i])
                if (i < player.deck.length) {
                    player.deck[i].render(ctx, UI.map.info.card[i])
                }
            }
        }

        Render.strokeRectUI(ctx, UI.map.info.buttonClose)
    }

    static renderBattleRight(ctx, player) {
        Render.strokeRectUI(ctx, UI.battle.right.info)
        Render.drawImageUI(ctx, img.icon.hp, UI.battle.right.hpIcon)
        Render.fillTextUI(ctx, '0/0', UI.battle.right.hpText)
        Render.strokeRectUI(ctx, UI.battle.right.hpBar)
        Render.drawImageUI(ctx, img.icon.energy, UI.battle.right.energyIcon)
        Render.fillTextUI(ctx, '0/0', UI.battle.right.energyText)
        Render.strokeRectUI(ctx, UI.battle.right.energyBar)

        for (let i = 0; i < 4; i++) {
            Render.strokeRectUI(ctx, UI.battle.right.item[i])
        }
        for (let i = 0; i < 8; i++) {
            Render.strokeRectUI(ctx, UI.battle.right.equipment[i])
        }

        Render.strokeRectUI(ctx, UI.battle.right.baseAttack)
        for (let i = 0; i < 10; i++) {
            Render.strokeRectUI(ctx, UI.battle.right.card[i])
        }
        Render.strokeRectUI(ctx, UI.battle.right.cardBack)
    }

    static renderMenu(ctx) {
        ctx.fillStyle = 'white'
        Render.fillRectUI(ctx, UI.menu.rect)
        Render.strokeRectUI(ctx, UI.menu.rect)
        ctx.fillStyle = 'black'

        Render.fillTextUI(ctx, 'Paused', UI.menu.textPaused)
        Render.strokeRectUI(ctx, UI.menu.buttonResume)
        Render.fillTextUI(ctx, 'Resume', UI.menu.textResume)
        Render.strokeRectUI(ctx, UI.menu.buttonGiveUp)
        Render.fillTextUI(ctx, 'Give Up', UI.menu.textGiveUp)
    }

    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    static drawImageUI(ctx, img, pos) {
        ctx.drawImage(img, pos[0], pos[1])
    }
}
