import {UI} from '../ui.js'

import {GameVar} from '../gamevar.js'

import {Render} from '../util/render.js'
import {Util} from '../util/util.js'

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
        Render.fillTextUI(ctx, "Roguelike Game", UI.title.textTitle)
        Render.strokeRectUI(ctx, UI.title.buttonStart)
        Render.fillTextUI(ctx, "Start Game", UI.title.textStart)
        Render.strokeRectUI(ctx, UI.title.buttonCollection)
        Render.fillTextUI(ctx, "Collection", UI.title.textCollection)
        Render.strokeRectUI(ctx, UI.title.buttonErase)
        Render.fillTextUI(ctx, "Erase Data", UI.title.textErase)
    }

    mouseUp(gameVar, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.title.buttonStart)) {
                SceneHandler.changeSceneTo(gameVar, 'select')
            }
        }
    }
}
