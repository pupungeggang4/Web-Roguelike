import {Render} from 'util/render.js'

import {Scene} from 'scene/scene.js'
import {SceneTitle} from 'scene/scenetitle.js'

export class Game {
    constructor() {

    }

    run(gameVar) {
        gameVar.rect = gameVar.canvas.getBoundingClientRect()
        window.addEventListener('pointerup', (event) => this.pointerUp(event, gameVar), false)
        window.addEventListener('resize', (event) => {
            gameVar.rect = gameVar.canvas.getBoundingClientRect()
            console.log(gameVar.rect)
        }, false)

        this.scenes = {
            'title': new SceneTitle()
        }
        this.scene = this.scenes['title']
        this.scene.ready(gameVar)
        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    loop(gameVar) {
        if (gameVar.sceneChanged === true) {
            this.scene = this.scenes[gameVar.scene]
            gameVar.sceneChanged = false
        }

        this.scene.update(gameVar)
        Render.init(gameVar.ctx)
        Render.clearCanvas(gameVar.canvas, gameVar.ctx)
        this.scene.render(gameVar)

        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    pointerUp(event, gameVar) {

    }
}
