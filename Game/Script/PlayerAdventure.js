class PlayerAdventure {
    constructor() {
        this.ID = 0
        this.level = 1
        this.exp = 0
        this.expMax = 50
        this.gold = 50

        this.hp = 60
        this.energy = 60
        this.attack = 0
        this.hardness = 0
        this.deck = []
        this.equipment = []
        this.weapon = null
        this.item = []
    }

    adventureInit(ID) {
        let data = JSON.parse(JSON.stringify(dataCharacter[ID]))
        this.ID = ID
        this.level = 1
        this.exp = 0
        this.expMax = 50
        this.attack = data['attack']
        this.hardness = data['hardness']
        this.hp = data['hp']
        this.energy = data['energy']

        this.deck = []
        for (let i = 0; i < data['start_deck'].length; i++) {
            let card = new Card()
            card.setData(data['start_deck'][i])
            this.deck.push(card)
        }

        this.equipment = []
        let tempEquipment = new Equipment()
        tempEquipment.setData(data['equipment'])
        this.equipment.push(tempEquipment)

        this.weapon = []
        let tempWeapon = new Weapon()
        tempWeapon.setData(data['weapon'])
        this.weapon = tempWeapon
        this.item = []
        let tempItem = new Item()
        tempItem.setData(1)
        this.item.push(tempItem)
    }
}
