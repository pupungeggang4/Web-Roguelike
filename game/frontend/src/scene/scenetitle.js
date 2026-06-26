import {GameVar} from 'src/gamevar.js'

import {Render} from 'util/render.js'

import {Scene} from 'scene/scene.js'
import {SceneHandler} from 'scene/scenehandler.js'

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
    }

    mouseUp(gameVar, pos, button) {

    }
}
