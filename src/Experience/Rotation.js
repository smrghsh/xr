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

        const geometry = new THREE.BoxGeometry( .4, .4, .4 ); 
        const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
        this.cube = new THREE.Mesh( geometry, material ); 
        this.cube.position.z = -2;
        this.cube.position.y = 1;
        this.scene.add( this.cube );



        this.controller2 = this.renderer.instance.xr.getController( 1 );
        this.controller2.addEventListener( 'selectstart', ( event )=> {
            console.log("Enabling rotate: ", this.start_x, this.start_y)
            //this.start_x = this.controller2.rotation.x;
            //this.start_y = this.controller2.rotation.y;
            this.start_x = this.controller2.position.x;
            this.start_y = this.controller2.position.y;
            this.start_z = this.controller2.position.z;
            this.outOfRange = false;
            this.enable_rotate = true;
            console.log(this.controller2.position.distanceTo(this.cube.position));
        
        });
        this.controller2.addEventListener( 'selectend', ( event )=> {
            this.enable_rotate = false;
        });

    }

    update(){
        if(this.enable_rotate && this.controller2.position.distanceTo(this.cube.position) < 1 && this.outOfRange == false){
            /*
            let start_x_r = this.start_x - this.controller2.rotation.x
            let start_y_r = this.start_y - this.controller2.rotation.y
            this.cube.rotation.x += start_x_r * .4;
            this.cube.rotation.y += start_y_r * .4;
            this.start_x = this.controller2.rotation.x
            this.start_y = this.controller2.rotation.y
            */
            this.cube.position.x = this.controller2.position.x 
            this.cube.position.y = this.controller2.position.y
            this.cube.position.z = this.controller2.position.z
        } else if (this.enable_rotate && this.controller2.position.distanceTo(this.cube.position) > 1){
            this.outOfRange = true;
        }

    }

}
