import * as THREE from 'three'
import Experience from './Experience.js'
import { XRControllerModelFactory } from 'three/examples/jsm/webxr/XRControllerModelFactory.js';
import { OculusHandModel } from 'three/addons/webxr/OculusHandModel.js';
import { OculusHandPointerModel } from 'three/addons/webxr/OculusHandPointerModel.js';

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
        var audio = new Audio('audio/common_voice_en_10.mp3');
        // audio.play();   
        const onSelectStart = function(){
            audio.play();
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

        this.canvas.hand1 = renderer.xr.getHand( 0 );
        this.canvas.hand1.add( new OculusHandModel( this.canvas.hand1 ) );
        this.handPointer1 = new OculusHandPointerModel( this.canvas.hand1, this.controller1 );
        this.canvas.hand1.add( this.handPointer1 );

        this.scene.add( this.canvas.hand1 );


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