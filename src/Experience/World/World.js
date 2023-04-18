import * as THREE from 'three'
import Experience from '../Experience.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Spectra from './Spectra.js'
import Stars from './Stars.js'
import Torus from './Torus.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.floor = new Floor()
        this.torus = new Torus()
        // this.circles = new Circles()
        // this.hypercube = new Hypercube()
        // Wait for resources
        this.resources.on('ready', () =>
        {
            // Setup
            console.log('resources ready')
            // this.test = new Test()
            this.stars = new Stars()
            this.spectra = new Spectra()
            // this.sushi = new Sushi()
            
            this.environment = new Environment()
        })
    }
    update() {
        // this.circles.update()
    }
}