class Card {
    constructor() {
        this.ID = 0
        this.element = ''
        this.rarity = ''
        this.name = ''
        this.energy = 0
        this.action = []

        this.canvas = document.createElement('canvas')
        this.canvas.width = 160
        this.canvas.height = 240
        this.ctx = this.canvas.getContext('2d')
    }

    setData(ID) {
        let data = JSON.parse(JSON.stringify(dataCard[ID]))
        this.ID = ID
        this.element = data['element']
        this.rarity = data['rarity']
        this.name = data['name']
        this.action = data['action']
    }

    clone() {
        let card = new Card()
        let data = JSON.parse(JSON.stringify(this))
        card.ID = data.ID
        card.element = data.element
        card.rarity = data.rarity
        card.name = data.name
        card.action = data.action
        return card
    }
}