import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Sushi {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.resource = this.resources.items.sushiModel

        this.model = this.resource.scene
        this.model.scale.set(1,1,1)
        this.scene.add(this.model)
        // this.sushiGeometry, this.sushiMaterial = ... import glb file
    }
}