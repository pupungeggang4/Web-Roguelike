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
        } else if (this.scene === 'map') {
            SceneMap.loop(this)
        } else if (this.scene === 'battle') {

        } else if (this.scene === 'info') {

        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
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
        } else if (this.scene === 'map') {
            SceneMap.mouseUp(this, pos, button)
        } else if (this.scene === 'battle') {

        } else if (this.scene === 'info') {

        }
    }

    saveInit() {
        if (localStorage.getItem('pupungeggang4:WebRoguelike') === null) {
            localStorage.setItem('pupungeggang4:WebRoguelike', JSON.parse(JSON.stringify(emptySave)))
        }

        return JSON.parse(JSON.stringify(localStorage.getItem('pupungeggang4:WebRoguelike')))
    }

    saveData() {

    }

    loadData() {

    }

    eraseData() {
        localStorage.setItem('pupungeggang4:WebRoguelike', JSON.parse(JSON.stringify(emptySave)))
        return JSON.parse(JSON.stringify(localStorage.getItem('pupungeggang4:WebRoguelike')))
    }
}
