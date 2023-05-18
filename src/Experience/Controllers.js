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
        // this.controller2.addEventListener( 'selectend', onSelectEnd );
        this.scene.add( this.controller2 );
        
        

        this.controllerModelFactory = new XRControllerModelFactory()

        this.controllerGrip1 = this.renderer.instance.xr.getControllerGrip( 0 )
        this.controllerGrip1.add( this.controllerModelFactory.createControllerModel( this.controllerGrip1 ) )
        this.scene.add( this.controllerGrip1 )

        this.controllerGrip2 = this.renderer.instance.xr.getControllerGrip( 1 )
        this.controllerGrip2.add( this.controllerModelFactory.createControllerModel( this.controllerGrip2 ) )
        this.scene.add( this.controllerGrip2 )
       
       
        const geom = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 1 ) ] );
        const geom2 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, -0.06), new THREE.Vector3( 0, 0, -0.06)]);
        const geom3 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( -0.07, 0, -0.02), new THREE.Vector3(-0.07, 0, -0.02)]);
        const geom4 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(-0.07, 0, 0.03), new THREE.Vector3(-0.07, 0, 0.03)]);
        const geom5 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(0.05, 0, -0.04), new THREE.Vector3(0.05, 0, -0.04)]);
        const geom6 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(0.07, 0, 0.01), new THREE.Vector3(0.07, 0, 0.01)]);
        const geom7 = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3(0.05, 0, 0.06), new THREE.Vector3(0.05, 0, 0.06)]);
       
        let line = new THREE.LineSegments( geom );
        line.material.color = new THREE.Color('red')
        line.name = 'line';
        line.scale.z = 5;
        
        let line2 = new THREE.Line( geom2 );
        line2.material.color = new THREE.Color('white')
        line2.name = 'line2';
        
        let line3 = new THREE.Line( geom3 );
        line3.material.color = new THREE.Color('white')
        line3.name = 'line3';
        
        let line4 = new THREE.Line( geom4 );
        line4.material.color = new THREE.Color('white')
        line4.name = 'line4';
        
        let line5 = new THREE.Line( geom5 );
        line5.material.color = new THREE.Color('white')
        line5.name = 'line5';
        
        let line6 = new THREE.Line( geom6 );
        line6.material.color = new THREE.Color('white')
        line6.name = 'line6';
        
        let line7 = new THREE.Line( geom7 );
        line7.material.color = new THREE.Color('white')
        line7.name = 'line7';

        this.controller1.add( line2.clone() );
        this.controller1.add( line3.clone() );
        this.controller1.add( line4.clone() );
        this.controller1.add( line5.clone() );
        this.controller1.add( line6.clone() );
        this.controller1.add( line7.clone() );

        let ge = new THREE.PlaneGeometry(0.03, 0.03); 
        let ma = new THREE.MeshBasicMaterial( { color: 'white' } ); 
        let rtrig = new THREE.Mesh( ge, ma ); 
        let rsq = new THREE.Mesh( ge, ma ); 
        let sp3 = new THREE.Mesh( ge, ma ); 
        let sp4 = new THREE.Mesh( ge, ma ); 
        let sp5 = new THREE.Mesh( ge, ma ); 
        let sp6 = new THREE.Mesh( ge, ma ); 
        
        
        let ltrig = new THREE.Mesh( ge, ma ); 
        let lsq = new THREE.Mesh( ge, ma ); 
        let sp9 = new THREE.Mesh( ge, ma ); 
        let sp10 = new THREE.Mesh( ge, ma ); 
        let sp11 = new THREE.Mesh( ge, ma ); 
        let sp12 = new THREE.Mesh( ge, ma ); 

        rtrig.position.set(0, 0, -0.06)
        rtrig.rotation.x -= Math.PI/2
        
        rsq.position.set(0.07, 0, -0.02)
        rsq.rotation.x -= Math.PI/2
        
        sp3.position.set(0.07, 0, 0.03)
        sp3.rotation.x -= Math.PI/2
        
        sp4.position.set(-0.05, 0, -0.04)
        sp4.rotation.x -= Math.PI/2
        
        sp5.position.set(-0.07, 0, 0.01)
        sp5.rotation.x -= Math.PI/2
        
        sp6.position.set(-0.05, 0, 0.06)
        sp6.rotation.x -= Math.PI/2
        
        
        
        ltrig.position.set(0, 0, -0.06)
        ltrig.rotation.x -= Math.PI/2
        
        lsq.position.set(-0.07, 0, -0.02)
        lsq.rotation.x -= Math.PI/2
        
        sp9.position.set(-0.07, 0, 0.03)
        sp9.rotation.x -= Math.PI/2
        
        sp10.position.set(0.05, 0, -0.04)
        sp10.rotation.x -= Math.PI/2
        
        sp11.position.set(0.07, 0, 0.01)
        sp11.rotation.x -= Math.PI/2
        
        sp12.position.set(0.05, 0, 0.06)
        sp12.rotation.x -= Math.PI/2
        
        
        this.controller2.add(sp3.clone())
        this.controller2.add(sp4.clone())
        this.controller2.add(sp5.clone())
        this.controller2.add(sp6.clone())
        
        
        this.controller1.add(ltrig.clone())
        this.controller1.add(lsq.clone())
        this.controller1.add(sp9.clone())
        this.controller1.add(sp10.clone())
        this.controller1.add(sp11.clone())
        this.controller1.add(sp12.clone())

        this.controller2.addEventListener( 'connected', ( event )=> {
            this.controller2.gamepad = event.data.gamepad
        });

        this.c2_prims = [rtrig, rsq, rsq, rsq, rsq, rsq, rsq]

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
    button_start(){
        if(this.controller2.gamepad){
            console.log("start")
            for(let i = 0; i< this.controller2.gamepad.buttons.length; i++){
                if(this.controller2.gamepad.buttons[i].pressed){
                    this.controller2.add(this.c2_prims[i])
                }
            }
    
        }
    }
    
    button_end(){
        if(this.controller2.gamepad){
            console.log("end")
            for(let i = 0; i< this.controller2.gamepad.buttons.length; i++){
                if(!this.controller2.gamepad.buttons[i].pressed){
                    this.controller2.remove(this.c2_prims[i])
                }
            }
    
        }
    }
}