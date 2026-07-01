import {UI} from '../ui.js'

import {GameVar} from '../gamevar.js'

import {Render} from '../util/render.js'
import {Util} from '../util/util.js'

import {Scene} from './scene.js'
import {SceneHandler} from './scenehandler.js'

export class SceneSelect extends Scene {
    constructor() {
        super()
        this.selectedCharacter = -1
    }

    ready(gameVar) {
        this.selectedCharacter = -1
    }

    update(gameVar) {

    }

    render(gameVar) {
        let ctx = gameVar.ctx
        Render.fillTextUI(ctx, 'Select character', UI.select.textTitle)
        Render.strokeRectUI(ctx, UI.select.buttonBack)

        for (let i = 0; i < 6; i++) {
            let col = i % 3
            let row = (i - col) / 3
            let rect = [UI.select.buttonCharacter[0] + UI.select.buttonCharacter[4] * col, UI.select.buttonCharacter[1] + UI.select.buttonCharacter[5] * row, UI.select.buttonCharacter[2], UI.select.buttonCharacter[3]]
            Render.strokeRectUI(ctx, rect)
        }

        Render.strokeRectUI(ctx, UI.select.areaDescription)
        Render.strokeRectUI(ctx, UI.select.buttonStart)
        Render.fillTextUI(ctx, 'Start', UI.select.textStart)
    }

    mouseUp(gameVar, pos, button) {
        if (button === 0) {
            if (Util.pointInsideRectUI(pos, UI.select.buttonBack)) {
                SceneHandler.changeSceneTo(gameVar, 'title')
            }
            for (let i = 0; i < 6; i++) {
                let col = i % 3
                let row = (i - col) / 3
                let rect = [UI.select.buttonCharacter[0] + UI.select.buttonCharacter[4] * col, UI.select.buttonCharacter[1] + UI.select.buttonCharacter[5] * row, UI.select.buttonCharacter[2], UI.select.buttonCharacter[3]]

                if (Util.pointInsideRectUI(pos, rect)) {
                    this.selectedCharacter = i
                }
            }
            if (Util.pointInsideRectUI(pos, UI.select.buttonStart)) {
                if (this.selectedCharacter >= 0) {
                    SceneHandler.changeSceneTo(gameVar, 'map')
                }
            }
        }
    }
}
