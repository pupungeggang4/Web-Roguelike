import {GameVar} from '../gamevar.js'

import {Render} from '../util/render.js'

import {Scene} from './scene.js'
import {SceneHandler} from './scenehandler.js'

export class SceneTitle extends Scene {
    constructor() {
        super()
    }

    ready(gameVar) {

    }

    update(gameVar) {

    }

    render(gameVar) {
        let ctx = gameVar.ctx
        ctx.fillRect(0, 0, 80, 80)
        ctx.fillText("123", 100, 100)
    }

    mouseUp(gameVar, pos, button) {

    }
}
