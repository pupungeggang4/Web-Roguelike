class PlayerAdventure {
    constructor() {
        this.level = 1
        this.exp = 0
        this.expMax = 50
        this.gold = 50

        this.hp = 60
        this.energy = 60
        this.attack = 0
        this.hardness = 0
        this.deck = []
    }

    adventureInit(ID) {
        let data = JSON.parse(JSON.stringify(dataCharacter[ID]))
        this.level = 1
        this.exp = 0
        this.expMax = 50
        this.attack = data['attack']
        this.hardness = data['hardness']
        this.hp = data['hp']
        this.energy = data['energy']
    }
}
