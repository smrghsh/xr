import * as THREE from 'three'
import Experience from './Experience.js'

export default class Rotation
{
    constructor()
    {
        this.experience = new Experience();
        this.renderer = this.experience.renderer
        this.scene = this.experience.scene
        this.enable_rotate = false;
        this.start_x;
        this.start_y;

        const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
        const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
        this.cube = new THREE.Mesh( geometry, material ); 
        this.scene.add( this.cube );



        this.controller2 = this.renderer.instance.xr.getController( 1 );
        this.controller2.addEventListener( 'selectstart', ( event )=> {
            console.log("Enabling rotate: ", this.start_x, this.start_y)
            this.start_x = this.controller2.rotation.x;
            this.start_y = this.controller2.rotation.y;
            this.enable_rotate = true;
        
        });
        this.controller2.addEventListener( 'selectend', ( event )=> {
            this.enable_rotate = false;
        });

    }

    update(){
        if(this.enable_rotate){
            let start_x_r = this.start_x - this.controller2.rotation.x
            let start_y_r = this.start_y - this.controller2.rotation.y
            this.cube.rotation.x += start_x_r * .4;
            this.cube.rotation.y += start_y_r * .4;
            this.start_x = this.controller2.rotation.x
            this.start_y = this.controller2.rotation.y
        }

    }

}
