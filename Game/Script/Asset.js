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
    img.character[1].src = 'Image/Character1.png'
}
