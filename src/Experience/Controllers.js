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
        
        this.t_geom = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -0.06), new THREE.Vector3( 0, 0, -0.06)]);
        this.t_line = new THREE.LineSegments( this.t_geom );
        this.t_line.material.color = new THREE.Color('white')
        this.t_line.name = 'rt_line';

        this.ui_geom = new THREE.PlaneGeometry(0.03, 0.03); 
        this.ui_ma = new THREE.MeshBasicMaterial( { color: 'white' } ); 
        this.trig = new THREE.Mesh( this.ui_geom, this.ui_ma ); 
        this.trig.position.set(0, 0, -0.06)
        this.trig.rotation.x -= Math.PI/2

        this.trigger = new THREE.Group()
        this.trigger.add(this.t_line)
        this.trigger.add(this.trig)

        this.r_connection = false
        this.l_connection = false


        const onSelectStart = function(){
            console.log('trigger pressed!')
            // audio.play();
        }

        this.controller1 = this.renderer.instance.xr.getController( 0 );
        this.controller1.addEventListener( 'selectstart', onSelectStart );
        // this.controller1.addEventListener( 'selectend', onSelectEnd );
        
        this.controller2 = this.renderer.instance.xr.getController( 1 );
        this.controller2.addEventListener( 'selectstart', onSelectStart );
        // var audio = new Audio('audio/common_voice_en_10.mp3');
        // audio.play();   


        this.controller2.gamepad = undefined
        this.controller1.gamepad = undefined
        // this.controller2.addEventListener( 'selectend', onSelectEnd );
        this.controller2.addEventListener( 'connected', ( event )=> {
            if(event.data.gamepad){
                this.r_connection = true
                this.controller2.gamepad = event.data.gamepad

            } 
        });

        this.controller1.addEventListener( 'connected', ( event )=> {
            if(event.data.gamepad){
                this.l_connection = true
                this.controller1.gamepad = event.data.gamepad

            } 
        });


        this.scene.add( this.controller1 );
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
        if(this.r_connection){
            this.trigger_end()
            this.trigger_start()
        }
        if(this.l_connection){
            this.trigger_end()
            this.trigger_start()
        }
    }
    trigger_start(){
        if(this.controller2.gamepad){
            if(this.controller2.gamepad.buttons[0].pressed){
                this.controller2.add(this.trigger)
            }
    
        } 
        if(this.controller1.gamepad){
            if(this.controller1.gamepad.buttons[0].pressed){
                    this.controller1.add(this.trigger)
            }
        } 
    }
    
    
    trigger_end(){
        if(this.controller2.gamepad){
            if(!this.controller2.gamepad.buttons[0].pressed){
                this.controller2.remove(this.trigger)
            }
    
        } 
        if(this.controller1.gamepad){
            if(!this.controller1.gamepad.buttons[0].pressed){
                this.controller1.remove(this.trigger)
            }
        }
    }
}