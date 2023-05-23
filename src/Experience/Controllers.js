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
       
       
        this.ui_geom = new THREE.PlaneGeometry(0.03, 0.03); 
        this.ui_ma = new THREE.MeshBasicMaterial( { color: 'white' } ); 
       
        this.trig = new THREE.Mesh( this.ui_geom, this.ui_ma ); 
        this.trig.position.set(0, 0, -0.06)
        this.trig.rotation.x -= Math.PI/2

        this.rs = new THREE.Mesh( this.ui_geom, this.ui_ma ); 
        this.rs.position.set(-0.05, 0, -0.06)
        this.rs.rotation.x -= Math.PI/2

        this.ls = new THREE.Mesh( this.ui_geom, this.ui_ma ); 
        this.ls.position.set(0.05, 0, -0.06)
        this.ls.rotation.x -= Math.PI/2

        this.bp = new THREE.Mesh( this.ui_geom, this.ui_ma ); 
        this.bp.position.set(-0.07, 0, 0)
        this.bp.rotation.x -= Math.PI/2

        this.ap = new THREE.Mesh( this.ui_geom, this.ui_ma ); 
        this.ap.position.set(-0.07, 0, 0.06)
        this.ap.rotation.x -= Math.PI/2

        this.t_geom = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -0.06), new THREE.Vector3( 0, 0, -0.06)]);
        this.t_line = new THREE.LineSegments( this.t_geom );
        this.t_line.material.color = new THREE.Color('white')
        this.t_line.name = 'rt_line';

        this.rs_geom = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -0.05, 0, -0.06), new THREE.Vector3( -0.05, 0, -0.06)]);
        this.rs_line = new THREE.LineSegments( this.rs_geom );
        this.rs_line.material.color = new THREE.Color('white')
        this.rs_line.name = 'rs_line';

        this.ls_geom = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0.05, 0, -0.06), new THREE.Vector3( 0.05, 0, -0.06)]);
        this.ls_line = new THREE.LineSegments( this.ls_geom );
        this.ls_line.material.color = new THREE.Color('white')
        this.ls_line.name = 'ls_line';

        this.b_geom = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(-0.07, 0, 0), new THREE.Vector3(-0.07, 0, 0)]);
        this.b_line = new THREE.LineSegments( this.b_geom );
        this.b_line.material.color = new THREE.Color('white')
        this.b_line.name = 'a_line';

        this.a_geom = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(-0.07, 0, 0.06), new THREE.Vector3(-0.07, 0, 0.06)]);
        this.a_line = new THREE.LineSegments( this.a_geom );
        this.a_line.material.color = new THREE.Color('white')
        this.a_line.name = 'a_line';


        this.l_trigger = new THREE.Group()
        this.l_trigger.add(this.t_line.clone())
        this.l_trigger.add(this.trig.clone())

        this.r_trigger = new THREE.Group()
        this.r_trigger.add(this.t_line.clone())
        this.r_trigger.add(this.trig.clone())

        this.rsq = new THREE.Group()
        this.rsq.add(this.rs_line.clone())
        this.rsq.add(this.rs.clone())

        this.lsq = new THREE.Group()
        this.lsq.add(this.ls_line.clone())
        this.lsq.add(this.ls.clone())

        this.b = new THREE.Group()
        this.b.add(this.b_line.clone())
        this.b.add(this.bp.clone())

        this.a = new THREE.Group()
        this.a.add(this.a_line.clone())
        this.a.add(this.ap.clone())

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
        this.trigger_end()
        this.trigger_start()
        this.squeeze_end()
        this.squeeze_start()
        this.abxy_end()
        this.abxy_start()

    }
    trigger_start(){
        if(this.controller2.gamepad){
            if(this.controller2.gamepad.buttons[0].pressed){
                this.controller2.add(this.r_trigger)
            }
    
        } 
        if(this.controller1.gamepad){
            if(this.controller1.gamepad.buttons[0].pressed){
                    this.controller1.add(this.l_trigger)
            }
        } 
    }
    
    
    trigger_end(){
        if(this.controller2.gamepad){
            if(!this.controller2.gamepad.buttons[0].pressed){
                this.controller2.remove(this.r_trigger)
            }
    
        } 
        if(this.controller1.gamepad){
            if(!this.controller1.gamepad.buttons[0].pressed){
                this.controller1.remove(this.l_trigger)
            }
        }
    }
    squeeze_end(){
        if(this.controller2.gamepad){
            if(!this.controller2.gamepad.buttons[1].pressed){
                this.controller2.remove(this.rsq)
            }    
        } 
        if(this.controller1.gamepad){
            if(!this.controller1.gamepad.buttons[1].pressed){
                this.controller1.remove(this.lsq)
            }    
        } 
    }
    squeeze_start(){
        if(this.controller2.gamepad){
            if(this.controller2.gamepad.buttons[1].pressed){
                this.controller2.add(this.rsq)
            }    
        } 
        if(this.controller1.gamepad){
            if(this.controller1.gamepad.buttons[1].pressed){
                this.controller1.add(this.lsq)
            }    
        } 
    }
    abxy_end(){
        if(this.controller2.gamepad){
            if(!this.controller2.gamepad.buttons[4].pressed){
                this.controller2.remove(this.b)
            }    
            if(!this.controller2.gamepad.buttons[5].pressed){
                this.controller2.remove(this.a)
            }
        } 
        // if(this.controller1.gamepad){
        //     if(!this.controller1.gamepad.buttons[1].pressed){
        //         this.controller1.remove(this.lsq)
        //     }    
        // } 
    }
    abxy_start(){
        if(this.controller2.gamepad){
            if(this.controller2.gamepad.buttons[4].pressed){
                this.controller2.add(this.b)
            }  
            if(this.controller2.gamepad.buttons[5].pressed){
                this.controller2.add(this.a)
            }     
        } 
        // if(this.controller1.gamepad){
        //     if(!this.controller1.gamepad.buttons[1].pressed){
        //         this.controller1.remove(this.lsq)
        //     }    
        // } 
    }
}