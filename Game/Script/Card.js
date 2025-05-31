class Card {
    constructor() {
        this.ID = 0
        this.element = ''
        this.rarity = ''
        this.name = ''
        this.energy = 0
        this.action = []
        this.description = ''

        this.canvas = document.createElement('canvas')
        this.canvas.width = 200
        this.canvas.height = 240
        this.ctx = this.canvas.getContext('2d')
        this.ctx.lineWidth = 2
        this.ctx.textBaseline = 'top'
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        let dataD = JSON.parse(JSON.stringify(dataCardD[ID]))
        this.ID = ID
        this.element = data['element']
        this.rarity = data['rarity']
        this.name = data['name']
        this.energy = data['energy']
        this.action = data['action']
        this.description = dataD['description']
    }

    clone() {
        let card = new Card()
        let data = JSON.parse(JSON.stringify(this))
        card.ID = data.ID
        card.element = data.element
        card.rarity = data.rarity
        card.energy = data.energy
        card.name = data.name
        card.action = data.action
        return card
    }

    render(ctx, pos) {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.ctx.strokeRect(1, 1, 198, 238)
        Render.strokeRectUI(this.ctx, UI.card.energyRect)
        this.ctx.font = '32px neodgm'
        Render.fillTextUI(this.ctx, this.energy, UI.card.textEnergy)
        Render.strokeRectUI(this.ctx, UI.card.image)
        this.ctx.font = '20px neodgm'
        Render.fillTextUI(this.ctx, this.name, UI.card.textName)
        Render.fillTextUI(this.ctx, this.description, UI.card.textStart)

        ctx.drawImage(this.canvas, pos[0], pos[1])
    }
}
