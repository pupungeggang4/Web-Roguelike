class Weapon {
    constructor() {
        this.ID = 0
        this.name = ''
        this.element = ''
        this.rarity = ''
        this.energy = 0
        this.effect = []
        this.description = ''
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
}
