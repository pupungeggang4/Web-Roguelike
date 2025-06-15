const dataCard = {
    1: {'ID': 1, 'name': 'attack', 'element': 'normal', 'rarity': 'basic', 'type': 'attack', 'energy': 1, 'effect': []},
    2: {'ID': 2, 'name': 'guard', 'element': 'normal', 'rarity': 'basic', 'type': 'util', 'energy': 1, 'effect': []},
    101: {'ID': 101, 'name': 'charge', 'element': 'fire', 'rarity': 'basic', 'type': 'util', 'energy': 0, 'effect': []},
    102: {'ID': 102, 'name': 'draw', 'element': 'fire', 'rarity': 'basic', 'type': 'util', 'energy': 1, 'effect': []}
}

const dataWeapon = {
    1: {'ID': 1, 'name': 'sword', 'element': 'normal', 'rarity': 'basic', 'energy': 0, 'effect': []}
}

const dataEquipment = {
    101: {'ID': 101, 'name': 'energy', 'element': 'fire', 'rarity': 'basic', 'effect': []}
}

const dataItem = {
    1: {'ID': 1, 'name': 'heal potion', 'element': 'normal', 'rarity': 'common', 'effect': []}
}

const dataUnit = {

}

const dataCharacter = {
    1: {'element': 'fire', 'attack': 0, 'hardness': 0, 'hp': 60, 'energy': 5, 'start_deck': [1, 1, 1, 1, 2, 2, 2, 2, 101, 102], 'equipment': 101, 'weapon': 1},
    2: {'element': 'water', 'attack': 0, 'hardness': 0, 'hp': 70, 'energy': 4, 'start_deck': [1, 1, 1, 1, 2, 2, 2, 2]},
    3: {'element': 'wind', 'attack': 0, 'hardness': 0, 'hp': 70, 'energy': 4, 'start_deck': [1, 1, 1, 1, 2, 2, 2, 2]},
    4: {'element': 'earth', 'attack': 0, 'hardness': 1, 'hp': 60, 'energy': 4, 'start_deck': [1, 1, 1, 1, 2, 2, 2, 2]},
    5: {'element': 'light', 'attack': 0, 'hardness': 0, 'hp': 70, 'energy': 4, 'start_deck': [1, 1, 1, 1, 2, 2, 2, 2]},
    6: {'element': 'dark', 'attack': 1, 'hardness': 0, 'hp': 60, 'energy': 4, 'start_deck': [1, 1, 1, 1, 2, 2, 2, 2]},
    7: {'element': 'all', 'attack': 0, 'hardness': 0, 'hp': 60, 'energy': 4, 'start_deck': [1, 1, 1, 1, 2, 2, 2, 2]},
    8: {'element': 'all', 'attack': 0, 'hardness': 0, 'hp': 60, 'energy': 4, 'start_deck': [1, 1, 1, 1, 2, 2, 2, 2]},
    9: {'element': 'all', 'attack': 0, 'hardness': 0, 'hp': 60, 'energy': 4, 'start_deck': [1, 1, 1, 1, 2, 2, 2, 2]},
}

const dataCharacterD = {
    1: {'name': 'fire', 'description': []},
    2: {'name': 'water', 'description': []},
    3: {'name': 'wind', 'description': []},
    4: {'name': 'earth', 'description': []},
    5: {'name': 'light', 'description': []},
    6: {'name': 'dark', 'description': []},
    7: {'name': 'all', 'description': []},
    8: {'name': 'all', 'description': []},
    9: {'name': 'all', 'description': []}
}
