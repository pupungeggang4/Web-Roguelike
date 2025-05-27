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

    static renderBattleRight(ctx, player) {
        Render.strokeRectUI(ctx, UI.battle.right.info)
        Render.drawImageUI(ctx, img.icon.hp, UI.battle.right.hpIcon)
        Render.fillTextUI(ctx, '0/0', UI.battle.right.hpText)
        Render.strokeRectUI(ctx, UI.battle.right.hpBar)
        Render.drawImageUI(ctx, img.icon.energy, UI.battle.right.energyIcon)
        Render.fillTextUI(ctx, '0/0', UI.battle.right.energyText)
        Render.strokeRectUI(ctx, UI.battle.right.energyBar)

        for (let i = 0; i < 3; i++) {
            Render.strokeRectUI(ctx, UI.battle.right.item[i])
        }
        for (let i = 0; i < 9; i++) {
            Render.strokeRectUI(ctx, UI.battle.right.equipment[i])
        }

        Render.strokeRectUI(ctx, UI.battle.right.baseAttack)
        for (let i = 0; i < 10; i++) {
            Render.strokeRectUI(ctx, UI.battle.right.card[i])
        }
        Render.strokeRectUI(ctx, UI.battle.right.cardBack)
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
