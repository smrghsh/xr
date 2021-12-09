import * as THREE from 'three'
import Experience from '../Experience.js'
import Circles from './Circles.js'
import Environment from './Environment.js'
import Floor from './Floor.js'
import Hypercube from './Hypercube.js'
import Spectra from './Spectra.js'
import Stars from './Stars.js'
// import Sushi from './Sushi.js'
// import Test from './Test.js'

export default class World
{
    constructor()
    {
        this.experience = new Experience()
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.floor = new Floor()
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