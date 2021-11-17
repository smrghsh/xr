import * as THREE from 'three'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Stars from './Stars.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.floor = new Floor()
       
        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            console.log('resources ready')
            this.stars = new Stars()
            this.environment = new Environment()
        })
    }
    update() {
    }
}