class Weapon {
    constructor() {
        this.ID = 0
        this.name = ''
        this.element = ''
        this.rarity = ''
        this.energy = 0
        this.effect = []
        this.description = ''

        this.canvas = document.createElement('canvas')
        this.canvas.width = 80
        this.canvas.height = 80
        this.ctx = this.canvas.getContext('2d')
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataWeapon[ID]))
        let dataD = JSON.parse(JSON.stringify(dataWeaponD[ID]))
        this.ID = ID
        this.name = data['name']
        this.element = data['element']
        this.rarity = data['rarity']
        this.energy = data['energy']
        this.effect = data['effect']
        this.description = dataD['description']
    }

    render(ctx, pos) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.drawImage(img.weapon[this.ID], 0, 0)
        Render.drawImageUI(ctx, this.canvas, pos)
    }
}
