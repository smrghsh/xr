import * as THREE from 'three'
import Debug from './Utils/Debug.js'
import Sizes from "./Utils/Sizes.js"
import Time from './Utils/Time.js'
import Resources from './Utils/Resources.js'
import Camera from './Camera.js'
import Renderer from './Renderer.js'
import World from './World/World.js'
import sources from './sources.js'
import { VRButton } from 'three/examples/jsm/webxr/VRButton.js'
import Controllers from './Controllers.js'

/* Samantha's import */
import { createText } from 'three/examples/jsm/webxr/Text2D.js';

console.log("new")
let instance = null

export default class Experience
{
    constructor(canvas){
        if (instance){
            return instance
        }
        instance = this
        // Global access
        window.experience = this
        this.canvas = canvas
        this.debug = new Debug()
        this.sampleBoolean = true
        this.sampleNumber = 5

        this.parameters = {
            
        }
        this.material = new THREE.MeshBasicMaterial({color: 'red'})

        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('experience')
            this.debugObject = {
                sampleBoolean: this.sampleBoolean,
                sampleNumber: this.sampleNumber,
                color: 0xff0000
            }
            this.debugFolder.add(this.debugObject, 'sampleBoolean').onChange( value =>{
                this.sampleBoolean = value
                console.log(this.sampleBoolean)
            })
            this.debugFolder.add(this.debugObject, 'sampleNumber').min(0.5).max(15).onChange( value =>{
                this.sampleNumber = value
                console.log(this.sampleNumber)
            })
            this.debugFolder.add(this.debugObject, 'color').onChange( () =>{
                this.material.color.set(this.color)
            })
        }

        this.sizes = new Sizes()
        this.time = new Time()
        this.lastUpdated = this.time.current
        this.scene = new THREE.Scene()

        /*SAMANTHA'S EDITS*/

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
        this.torusKnot.position.set( 0, 5, - 2 );
        this.scene.add( this.torusKnot );


        this.geometry = new THREE.SphereGeometry(1, 32, 32)
        
        this.mesh = new THREE.Mesh(this.geometry, this.material)
        this.scene.add(this.mesh)

        /*END OF SAMANTHA'S EDITS*/

        this.resources = new Resources(sources)
        this.world = new World()
        this.camera = new Camera()
        this.renderer = new Renderer()

        this.renderer.instance.xr.enabled = true;
        document.body.appendChild( VRButton.createButton( this.renderer.instance ) );
        this.renderer.instance.setAnimationLoop( ()=> {
            // tick();
            this.renderer.instance.render( this.scene, this.camera.instance );
        });


        this.controllers = new Controllers()


        this.mouse = new THREE.Vector2()
        this.INTERSECTED = null
        window.addEventListener('mousemove', (event) =>
        {
            this.mouse.x = event.clientX / this.sizes.width * 2 - 1
            this.mouse.y = - (event.clientY / this.sizes.height) * 2 + 1
        })
        window.addEventListener('click', () =>
        {
            if(this.INTERSECTED)
            {
                // do something here if there is something in this.INTERSECTED
            }
        })
        this.sizes.on('resize', ()=>
        {
            this.resize()
            this.camera.resize()
            this.renderer.resize()
        })
        this.time.on('tick', ()=>
        {
            this.update()
        })
        
        

    }

    resize()
    {
        console.log('resized occured')
        this.camera.resize()
    }
    update()
    {
        this.camera.update()
        // this.renderer.update()
        this.world.update()
        // this.world.circles.undulate(this.time.elapsed)
        // this.world.hypercube.wub(this.time.elapsed)
        //https://github.com/mrdoob/three.js/blob/master/examples/webgl_interactive_cubes.html
        
        //change this to be controller if controller is active
        // this.controllers.raycaster.setFromCamera( this.mouse, this.camera.instance );
        this.intersects = this.controllers.raycasting.raycaster.intersectObjects( this.menuMesh, true);
        console.log(this.intersects)
        
        
        if ( this.intersects.length > 0 ) {
            if ( this.INTERSECTED != intersects[ 0 ].object ) {
                // if ( this.INTERSECTED ) this.INTERSECTED.material.color.setHex( this.INTERSECTED.currentHex );
                // this.INTERSECTED = intersects[ 0 ].object;
                // this.INTERSECTED.currentHex = this.INTERSECTED.material.color.getHex();
                // this.INTERSECTED.material.color.setHex( 0xff0000 );
                console.log('ahhhhhh',this.INTERSECTED)

            }
        } else {

            // if ( this.INTERSECTED ) this.INTERSECTED.material.color.setHex( this.INTERSECTED.currentHex );
            // console.log('nahhhh')

            // this.INTERSECTED = null;

        }
    }
    destroy()
    {
        this.sizes.off('resize')
        this.time.off('tick')

        // Traverse the whole scene
        this.scene.traverse((child) =>
        {
            // Test if it's a mesh
            if(child instanceof THREE.Mesh)
            {
                child.geometry.dispose()

                // Loop through the material properties
                for(const key in child.material)
                {
                    const value = child.material[key]

                    // Test if there is a dispose function
                    if(value && typeof value.dispose === 'function')
                    {
                        value.dispose()
                    }
                }
            }
        })
        this.camera.controls.dispose()
        this.renderer.instance.dispose()
        if(this.debug.active)
        {
            this.debug.ui.destroy()
        }
            
    }
}