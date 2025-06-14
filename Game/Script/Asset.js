let img = {
    locked: new Image(),
    selectFrame: new Image(),
    selectFrame80: new Image(),

    icon: {
        hp: new Image(),
        energy: new Image(),
        start: new Image(),
        battle: new Image(),
        event: new Image(),
        shop: new Image(),
        rest: new Image(),
        boss: new Image(),

        profile: new Image(),
        card: new Image(),
        equipment: new Image(),
        weapon: new Image(),
        item: new Image(),
    },
    button: {
        prev: new Image(),
        next: new Image(),
        menu: new Image(),
        back: new Image(),
        info: new Image(),
        close: new Image(),
    },
    character: {
        1: new Image(),
    },
    weapon: {
        1: new Image(),
    },
    equipment: {
        101: new Image(),
    },
    item: {
        1: new Image(),
    },
    card: {
        1: new Image(),
        2: new Image(),
    }
}

let audio = {

}

function imageLoad() {
    img.locked.src = 'Image/Locked.png'
    img.selectFrame.src = 'Image/SelectFrame.png'
    img.selectFrame80.src = 'Image/SelectFrame80.png'

    img.icon.hp.src = 'Image/Icon/IconHP.png'
    img.icon.energy.src = 'Image/Icon/IconEnergy.png'
    img.icon.profile.src = 'Image/Icon/IconProfile.png'
    img.icon.start.src = 'Image/Icon/IconStart.png'
    img.icon.battle.src = 'Image/Icon/IconBattle.png'
    img.icon.event.src = 'Image/Icon/IconEvent.png'
    img.icon.shop.src = 'Image/Icon/IconShop.png'
    img.icon.rest.src = 'Image/Icon/IconRest.png'
    img.icon.boss.src = 'Image/Icon/IconBoss.png'
    img.icon.card.src = 'Image/Icon/IconCard.png'
    img.icon.equipment.src = 'Image/Icon/IconEquipment.png'
    img.icon.weapon.src = 'Image/Icon/IconWeapon.png'
    img.icon.item.src = 'Image/Icon/IconItem.png'

    img.button.prev.src = 'Image/Button/ButtonPrev.png'
    img.button.next.src = 'Image/Button/ButtonNext.png'
    img.button.menu.src = 'Image/Button/ButtonMenu.png'
    img.button.back.src = 'Image/Button/ButtonBack.png'
    img.button.info.src = 'Image/Button/ButtonInfo.png'
    img.button.close.src = 'Image/Button/ButtonClose.png'

    img.character[1].src = 'Image/Character1.png'

    img.weapon[1].src = 'Image/Weapon/Weapon001.png'

    img.equipment[101].src = 'Image/Equipment/Equipment101.png'

    img.item[1].src = 'Image/Item/Item001.png'

    img.card[1].src = 'Image/Card/Card001.png'
    img.card[2].src = 'Image/Card/Card002.png'
}
