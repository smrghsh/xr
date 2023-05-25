import * as THREE from 'three'
import Experience from './Experience.js'
import { createText } from 'three/examples/jsm/webxr/Text2D.js';

// import Raycasting from './Raycasting.js'
// import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';

//Samantha
console.log("listen")
export default class Menu
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.menuGeometry = new THREE.PlaneGeometry( 2, 3 );
		    this.menuMaterial = new THREE.MeshPhongMaterial( {
			// opacity: 50,
            color: 'green', 
            // side: THREE.DoubleSide,
            // wireframe:true,
			// transparent: true,
		} );
        
        this.menuMesh = new THREE.Mesh(this.menuGeometry, this.menuMaterial );
        this.menuMesh.position.set( 2, 1, - 2 );
        this.menuMesh.rotation.y = - Math.PI / 12;


        this.buttongeometry = new THREE.BoxGeometry( 1.5, 0.5, 0.1);
        this.buttonmaterial = new THREE.MeshPhongMaterial( { color: 'blue' } );
        this.buttonMesh = new THREE.Mesh( this.buttongeometry, this.buttonmaterial );
        this.buttonMesh.castShadow = true;
        this.buttonMesh.receiveShadow = true;
        this.buttonMesh.position.set(0,0,0)

        this.navyButtonText = createText( 'navy', 0.4 );
		this.buttonMesh.add( this.navyButtonText );
		this.navyButtonText.position.set( 0, 0, 0.051 );

        this.menuMesh.add( this.buttonMesh )

        this.buttonMesh2 = new THREE.Mesh( this.buttongeometry, this.buttonmaterial );

        this.purpleButtonText = createText( 'purple', 0.4 );
		this.buttonMesh2.add( this.purpleButtonText );
		this.purpleButtonText.position.set( 0, 0, 0.051 );
        this.buttonMesh2.position.set(0,-.75,0)
        this.menuMesh.add( this.buttonMesh2 )

        this.buttonMesh3 = new THREE.Mesh( this.buttongeometry, this.buttonmaterial );
        
        this.limeButtonText = createText( 'lime green', 0.25 );
		this.buttonMesh3.add( this.limeButtonText );
		this.limeButtonText.position.set( 0, 0, 0.051 );
        
        
        this.buttonMesh3.position.set(0,.75,0)
        this.menuMesh.add( this.buttonMesh3 )
        
        this.scene.add( this.menuMesh );
    
        this.tkGeometry = new THREE.TorusKnotGeometry( 0.5, 0.2, 200, 32 );
        this.tkMaterial = new THREE.MeshPhongMaterial( { color: 0xffffff } );
        this.tkMaterial.metalness = 0.8;
        this.torusKnot = new THREE.Mesh( this.tkGeometry, this.tkMaterial );
        this.torusKnot.position.set( 0, 1, - 2 );
        this.scene.add( this.torusKnot );


        this.geometry = new THREE.SphereGeometry(1, 32, 32)
        
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)

    }

    setInstance()
    {
    }

    resize()
    {
    }

    update()
    {
    }
}