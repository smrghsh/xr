import * as THREE from 'three'
import Experience from './Experience.js'

export default class Rotation

// To do: compute bounding box and see if it intersects with controller
// Make it so that any object in group can be moved instead of hardcoded cube
// fix rotation: https://stackoverflow.com/questions/21539695/three-js-rotation-not-respecting-local-orientation

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

        this.cubeBB = new THREE.Box3().setFromObject(this.cube);



        this.controller2 = this.renderer.instance.xr.getController( 1 );
        this.controller2Grip = this.renderer.instance.xr.getControllerGrip(1);


        this.controller2.addEventListener( 'selectstart', ( event )=> {
            this.start_x = this.controller2.rotation.x;
            this.start_y = this.controller2.rotation.y;

            console.log("Enabling rotate: ", this.start_x, this.start_y)
            console.log('intersect cntrl & box: ', this.cubeBB.distanceToPoint(this.controller2.position))

            


            console.log('cube bb', this.cubeBB)

            this.startingCubePos = new THREE.Vector3(this.controller2.position.x, this.controller2.position.y, this.controller2.position.z);
            this.startingCubePos.sub(this.cube.position);
            console.log(this.startingCubePos)

            this.enable_rotate = true;
            console.log(this.controller2.position.distanceTo(this.cube.position));
        
        });
        this.controller2.addEventListener( 'selectend', ( event )=> {
            this.enable_rotate = false;
        });

    }

    update(){
        // Update BBs
        this.cubeBB.copy( this.cube.geometry.boundingBox ).applyMatrix4( this.cube.matrixWorld );

        //Check Distance & make sure trigger held
        if(this.enable_rotate && this.cubeBB.distanceToPoint(this.controller2.position) < 0.2){
            
            // Update rotation of object
            let start_x_r = this.start_x - this.controller2.rotation.x // rotation = starting rotation - cur rotation
            let start_y_r = this.start_y - this.controller2.rotation.y
            //this.cube.rotation.x += start_x_r * .6; // Set cube rotation to totation * .6
            //this.cube.rotation.y += start_y_r * .6;

            // Store the initial rotation of the cube
            const initialRotation = this.cube.rotation.clone();

            // Convert the initial rotation to a quaternion
            const initialQuaternion = new THREE.Quaternion().setFromEuler(initialRotation);

            // Update the cube's rotation based on the controller's rotation
            const controllerRotation = this.controller2Grip.rotation.clone();
            const controllerQuaternion = new THREE.Quaternion().setFromEuler(controllerRotation);
            const newQuaternion = initialQuaternion.multiply(controllerQuaternion);

            // Convert the new quaternion to Euler angles
            const newRotation = new THREE.Euler().setFromQuaternion(newQuaternion);

            // Apply the new rotation to the cube
            this.cube.rotation.copy(newRotation);
            
            this.start_x = this.controller2.rotation.x // Set starting rotation to cur rotation
            this.start_y = this.controller2.rotation.y
            
            // Update position of object (Controller position - starting cube position)
            this.cube.position.x = this.controller2.position.x - this.startingCubePos.x
            this.cube.position.y = this.controller2.position.y - this.startingCubePos.y
            this.cube.position.z = this.controller2.position.z - this.startingCubePos.z
        }

    }

}
