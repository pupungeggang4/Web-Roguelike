let img = {
    locked: new Image(),
    selectFrame: new Image(),
    icon: {
        hp: new Image(),
        energy: new Image(),
        start: new Image(),
        battle: new Image(),
        event: new Image(),
        shop: new Image(),
        rest: new Image(),
        boss: new Image(),
    },
    button: {
        prev: new Image(),
        next: new Image(),
        menu: new Image(),
        back: new Image(),
        info: new Image()
    },
    character: {
        1: new Image(),
    }
}

let audio = {

}

function imageLoad() {
    img.locked.src = 'Image/Locked.png'
    img.selectFrame.src = 'Image/SelectFrame.png'
    img.icon.hp.src = 'Image/IconHP.png'
    img.icon.energy.src = 'Image/IconEnergy.png'

    img.icon.start.src = 'Image/IconStart.png'
    img.icon.battle.src = 'Image/IconBattle.png'
    img.icon.event.src = 'Image/IconEvent.png'
    img.icon.shop.src = 'Image/IconShop.png'
    img.icon.rest.src = 'Image/IconRest.png'
    img.icon.boss.src = 'Image/IconBoss.png'

    img.button.prev.src = 'Image/ButtonPrev.png'
    img.button.next.src = 'Image/ButtonNext.png'
    img.button.menu.src = 'Image/ButtonMenu.png'
    img.button.back.src = 'Image/ButtonBack.png'
    img.button.info.src = 'Image/ButtonInfo.png'

    img.character[1].src = 'Image/Character1.png'
}
