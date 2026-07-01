import {Render} from './util/render.js'

import {Scene} from './scene/scene.js'
import {SceneTitle} from './scene/scenetitle.js'
import {SceneSelect} from './scene/sceneselect.js'
import {SceneMap} from './scene/scenemap.js'
import {SceneBattle} from './scene/scenebattle.js'

export class Game {
    constructor() {

    }

    run(gameVar) {
        gameVar.rect = gameVar.canvas.getBoundingClientRect()
        window.addEventListener('pointerup', (event) => this.pointerUp(event, gameVar), false)
        window.addEventListener('resize', (event) => {
            gameVar.rect = gameVar.canvas.getBoundingClientRect()
        }, false)

        this.scenes = {
            'title': new SceneTitle(), 'select': new SceneSelect(),
            'map': new SceneMap(), 'battle': new SceneBattle()
        }
        this.scene = this.scenes['title']
        this.scene.ready(gameVar)
        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    loop(gameVar) {
        if (gameVar.sceneChanged === true) {
            this.scene = this.scenes[gameVar.scene]
            this.scene.ready(gameVar)
            gameVar.sceneChanged = false
        }

        this.scene.update(gameVar)
        Render.init(gameVar.ctx)
        Render.clearCanvas(gameVar.canvas, gameVar.ctx)
        this.scene.render(gameVar)

        gameVar.gameLoop = requestAnimationFrame(() => this.loop(gameVar))
    }

    pointerUp(event, gameVar) {
        let pos = {
            x: (event.clientX - gameVar.rect.left) / gameVar.rect.width * gameVar.canvas.width,
            y: (event.clientY - gameVar.rect.top) / gameVar.rect.height * gameVar.canvas.height
        }
        let button = event.button

        this.scene.pointerUp(gameVar, pos, button)
    }
}
