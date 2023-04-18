import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Torus {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        const TorusGeometry = new THREE.TorusKnotGeometry( 0.5, 0.2, 200, 32 )
        const TorusMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
		const TorusKnot = new THREE.Mesh( TorusGeometry, TorusMaterial );
        TorusKnot.position.set( 0, 1, - 5 );
        this.scene.add( this.TorusKnot );
    }
    update(){
        // this.particles.rotation.x += 0.02
    }
}           