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
        Render.drawImageUI(ctx, img.icon.profile, UI.map.info.iconProfile)
        Render.strokeRectUI(ctx, UI.map.info.tabDeck)
        Render.drawImageUI(ctx, img.icon.card, UI.map.info.iconDeck)

        if (game.playerInfoTab === 'profile') {
            Render.fillTextUI(ctx, 'Name', UI.map.info.textName)
            Render.strokeRectUI(ctx, UI.map.info.portrait)
            Render.fillTextUI(ctx, `Lv.${player.level}`, UI.map.info.textLevel)
            Render.fillTextUI(ctx, `Exp: ${player.exp}/${player.expMax}`, UI.map.info.textExp)
            Render.fillTextUI(ctx, `Gold: ${player.gold}`, UI.map.info.textGold)
            Render.fillTextUI(ctx, `HP: ${player.hp}`, UI.map.info.textHP)
            Render.fillTextUI(ctx, `Energy: ${player.energy}`, UI.map.info.textEnergy)
            Render.fillTextUI(ctx, `Attack: ${player.attack}`, UI.map.info.textAttack)
            Render.fillTextUI(ctx, `Hardness: ${player.hardness}`, UI.map.info.textHardness)

            Render.fillTextUI(ctx, `Weapon`, UI.map.info.textWeapon)
            Render.strokeRectUI(ctx, UI.map.info.weapon)
            Render.strokeRectUI(ctx, UI.map.info.descriptionRect)

            ctx.font = '20px neodgm'
            if (game.playerDescriptionIndex === -1) {
                let w = player.weapon.description
                for (let i = 0; i < w.length; i++) {
                    let p = [UI.map.info.descriptionStart[0], UI.map.info.descriptionStart[1] + UI.map.info.descriptionInterval[1] * i]
                    Render.fillTextUI(ctx, `${w[i]}`, p)
                }
            }
            ctx.font = '32px neodgm'

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
                let index = game.playerDeckPage * 8 + i
                Render.strokeRectUI(ctx, UI.map.info.card[i])
                if (index < player.deck.length) {
                    player.deck[index].render(ctx, UI.map.info.card[i])
                }
            }
        }

        Render.drawImageUI(ctx, img.button.close, UI.map.info.buttonClose)
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

    static renderInfo(game, ctx) {
        Render.drawImageUI(ctx, img.button.prev, UI.info.buttonPrev)
        Render.drawImageUI(ctx, img.button.next, UI.info.buttonNext)

        if (game.infoTab === 'card') {
            for (let i = 0; i < 10; i++) {
                Render.strokeRectUI(ctx, UI.info.card[i])
            }
            game.cardList[1].render(game.ctx, UI.info.card[0])
            game.cardList[2].render(game.ctx, UI.info.card[1])

        } else if (game.infoTab === 'weapon') {

        } else if (game.infoTab === 'equipment') {
            
        } else if (game.infoTab === 'item') {

        }
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
