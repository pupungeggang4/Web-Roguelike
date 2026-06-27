import {UI} from '../ui.js'

import {GameVar} from '../gamevar.js'

import {Render} from '../util/render.js'
import {Util} from '../util/util.js'

import {Scene} from './scene.js'
import {SceneHandler} from './scenehandler.js'

export class SceneSelect extends Scene {
    constructor() {
        super()
    }

    ready(gameVar) {

    }

    update(gameVar) {

    }

    render(gameVar) {
        let ctx = gameVar.ctx
        Render.fillTextUI(ctx, 'Select character', UI.select.textTitle)
        Render.strokeRectUI(ctx, UI.select.buttonBack)
    }

    mouseUp(gameVar, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.select.buttonBack)) {
                SceneHandler.changeSceneTo(gameVar, 'title')
            }
        }
    }
}
