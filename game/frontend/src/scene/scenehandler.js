import {GameVar} from 'src/gamevar.js'

export class SceneHandler {
    static changeSceneTo(gameVar, str) {
        gameVar.scene = str
        gameVar.sceneChanged = true
    }
}
