import * as THREE from 'three'
import Experience from './Experience.js'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import { Controller } from 'lil-gui';

//Samantha

export default class Controllers
{
    constructor()
    {
        this.experience = new Experience()
        this.canvas = this.experience.canvas
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.renderer = this.experience.renderer
        
        this.geom = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 1 ) ] );
        this.line = new THREE.LineSegments( this.geom );
        this.line.material.color = new THREE.Color('red')
        this.line.name = 'line';
        this.line.scale.z = 5;

        this.line2 = new THREE.LineSegments( this.geom );
        this.line2.material.color = new THREE.Color('white')
        this.line2.name = 'line2';
        this.line2.scale.z = 5;



        this.connection = false

        this.controller1 = this.renderer.instance.xr.getController( 0 );
        // var audio = new Audio('audio/common_voice_en_10.mp3');
        // audio.play();   
        const onSelectStart = function(){
            console.log('trigger pressed!')
            // audio.play();
        }

        this.controller1.addEventListener( 'selectstart', onSelectStart );
        // this.controller1.addEventListener( 'selectend', onSelectEnd );
        this.scene.add( this.controller1 );
        
        this.controller2 = this.renderer.instance.xr.getController( 1 );
        this.controller2.addEventListener( 'selectstart', onSelectStart );
        this.controller2.gamepad = undefined
        // this.controller2.addEventListener( 'selectend', onSelectEnd );
        this.controller2.addEventListener( 'connected', ( event )=> {
            if(event.data.gamepad){
                this.connection = true
                console.log("not null V")
                this.controller2.gamepad = event.data.gamepad
                console.log(this.controller2.gamepad)
                console.log("bababoowie")
                this.button_end()
                this.button_start()
            } 
        });

        this.scene.add( this.controller2 );
        

        this.controllerModelFactory = new XRControllerModelFactory()

        this.controllerGrip1 = this.renderer.instance.xr.getControllerGrip( 0 )
        this.controllerGrip1.add( this.controllerModelFactory.createControllerModel( this.controllerGrip1 ) )
        this.scene.add( this.controllerGrip1 )

        this.controllerGrip2 = this.renderer.instance.xr.getControllerGrip( 1 )
        this.controllerGrip2.add( this.controllerModelFactory.createControllerModel( this.controllerGrip2 ) )
        this.scene.add( this.controllerGrip2 )



    }

    setInstance()
    {

    }

    resize()
    {
    }

    update()
    {
        if(this.connection){
            this.controller2.add(this.line2)
            this.button_end()
            this.button_start()
        }
    }
    button_start(){
        if(this.controller2.gamepad){
            console.log("start")
            for(let i = 0; i< this.controller2.gamepad.buttons.length; i++){
                if(this.controller2.gamepad.buttons[i].pressed){
                    this.controller2.add(this.line)
                }
            }
    
        }
    }
    
    button_end(){
        if(this.controller2.gamepad){
            console.log("end")
            for(let i = 0; i< this.controller2.gamepad.buttons.length; i++){
                if(!this.controller2.gamepad.buttons[i].pressed){
                    this.controller2.remove(this.line)
                }
            }
    
        }
    }
}