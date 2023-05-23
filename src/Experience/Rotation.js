import * as THREE from 'three'
import Experience from './Experience.js'

export default class Rotation
{
    constructor()
    {
        this.experience = new Experience();
        this.renderer = this.experience.renderer
        let enable_rotate = false;
        let start_x;
        let start_y;

        const geometry = new THREE.BoxGeometry( 1, 1, 1 ); 
        const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
        this.cube = new THREE.Mesh( geometry, material ); 
        scene.add( this.cube );



        this.controller2 = this.renderer.instance.xr.getController( 1 );
        this.controller2.addEventListener( 'selectstart', ( event )=> {
            console.log("Enabling rotate: ", start_x, start_y)
            start_x = this.controller2.rotation.x;
            start_y = this.controller2.rotation.y;
            enable_rotate = true;
        
        });
    }

    update(){
        if(enable_rotate){
            start_x_r = start_x - this.controller2.rotation.x
            start_y_r = start_y - this.controller2.rotation.y
            this.cube.rotation.x += start_x_r * .4;
            this.cube.rotation.y += start_y_r * .4;
            start_x = this.controller2.rotation.x
            start_y = this.controller2.rotation.y
        }

    }

}
