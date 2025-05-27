class Game {
    constructor() {
        imageLoad()
        this.saveData = this.saveInit()

        this.scene = 'title'
        this.state = ''
        this.stateClick = ''
        this.infoTab = ''

        this.canvas = document.getElementById('screen')
        this.ctx = this.canvas.getContext('2d')
        this.canvas.addEventListener('mouseup', (event) => this.mouseUp(event), false)

        this.selectedCharacter = -1
        this.adventure = {
            floor: 1,
            next: 1,
            layout: [
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0]
            ],
        }
        this.battle = new Battle()
        this.player = new PlayerAdventure()

        this.frameCurremt = performance.now()
        this.framePrevious = performance.now()
        this.delta = 16
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    loop() {
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = 16

        if (this.scene === 'title') {
            SceneTitle.loop(this)
        } else if (this.scene === 'characterselect') {
            SceneCharacterSelect.loop(this)
        } else if (this.scene === 'map') {
            SceneMap.loop(this)
        } else if (this.scene === 'battle') {
            SceneBattle.loop(this)
        } else if (this.scene === 'info') {
            SceneInfo.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    adventureInit() {
        this.adventure.floor = 1
        this.adventure.next = 1
        this.adventure.layout = [
            [0, 2, 0, 0, 2, 0, 0, 0],
            [0, 2, 0, 0, 2, 0, 0, 0],
            [1, 2, 0, 0, 2, 0, 0, 5],
            [0, 2, 0, 0, 2, 0, 0, 0],
            [0, 2, 0, 0, 2, 0, 0, 0]
        ]
        for (let i = 0; i < 5; i++) {
            this.adventure.layout[i][2] = Math.floor(Math.random() * 3) + 2
            this.adventure.layout[i][3] = Math.floor(Math.random() * 3) + 2
            this.adventure.layout[i][5] = Math.floor(Math.random() * 3) + 2
            this.adventure.layout[i][6] = Math.floor(Math.random() * 3) + 2
        }

        game.player.adventureInit(game.selectedCharacter)
    }

    mouseUp(event) {
        let targetRect = this.canvas.getBoundingClientRect()
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button
        
        if (this.scene === 'title') {
            SceneTitle.mouseUp(this, pos, button)
        } else if (this.scene === 'characterselect') {
            SceneCharacterSelect.mouseUp(this, pos, button)
        } else if (this.scene === 'map') {
            SceneMap.mouseUp(this, pos, button)
        } else if (this.scene === 'battle') {
            SceneBattle.mouseUp(this, pos, button)
        } else if (this.scene === 'info') {
            SceneInfo.mouseUp(this, pos, button)
        }
    }

    saveInit() {
        if (localStorage.getItem('pupungeggang4:WebRoguelike') === null) {
            localStorage.setItem('pupungeggang4:WebRoguelike', JSON.stringify(emptySave))
        }

        return JSON.parse(localStorage.getItem('pupungeggang4:WebRoguelike'))
    }

    saveData() {
        localStorage.setItem('pupungeggang4:WebRoguelike', JSON.stringify(game.saveData))
    }

    loadData() {
        return JSON.parse(localStorage.getItem('pupungeggang4:WebRoguelike'))
    }

    eraseData() {
        localStorage.setItem('pupungeggang4:WebRoguelike', JSON.stringify(emptySave))
        return JSON.parse(localStorage.getItem('pupungeggang4:WebRoguelike'))
    }
}
