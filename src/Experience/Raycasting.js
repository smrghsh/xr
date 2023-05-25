import * as THREE from 'three'
import Experience from './Experience.js'

export default class Raycaster
{
    constructor(controller)
    {
        this.experience = new Experience()

        this.geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 1 ) ] );

        this.line = new THREE.Line( this.geometry );
        this.line.scale.z = 5;  
        
        this.raycaster = new THREE.Raycaster();

        this.controller.add( this.line.clone() );




    }
}
//raycasting (native)//
// const geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 1 ) ] );



// 		const line = new THREE.Line( geometry );
// 		line.name = 'line';
// 		line.scale.z = 5;

// 		this.controller1.add( line.clone() );
// 		this.controller2.add( line.clone() );

// 		raycaster = new THREE.Raycaster();



