import * as THREE from 'three'
import Experience from './Experience.js'

export default class Raycaster
{
    constructor(controller)
    {
        this.experience = new Experience()

        this.geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 1 ) ] );

        this.line = new THREE.Line( this.geometry );
        this.line.scale.z = 5;  
        
        this.raycaster = new THREE.Raycaster();

        this.controller.add( this.line.clone() );
        this.tempMatrix = new THREE.Matrix4();

        this.intersected = []
    }
    getIntersections(controller) {

        controller.updateMatrixWorld();

        tempMatrix.identity().extractRotation( controller.matrixWorld );

        raycaster.ray.origin.setFromMatrixPosition( controller.matrixWorld );
        raycaster.ray.direction.set( 0, 0, - 1 ).applyMatrix4( tempMatrix );

        return raycaster.intersectObjects( group.children, false );
    }
    intersectObjects( controller ) {

        // Do not highlight in mobile-ar

        if ( controller.userData.targetRayMode === 'screen' ) return;

        // Do not highlight when already selected

        if ( controller.userData.selected !== undefined ) return;

        const line = controller.getObjectByName( 'line' );
        const intersections = getIntersections( controller );

        if ( intersections.length > 0 ) {

            const intersection = intersections[ 0 ];

            const object = intersection.object;
            object.material.emissive.r = 1;
            intersected.push( object );

            line.scale.z = intersection.distance;

        } else {

            line.scale.z = 5;

        }
    }
    cleanIntersected() {

        while ( intersected.length ) {

            const object = intersected.pop();
            object.material.emissive.r = 0;

        }

    }


}
//raycasting (native)//
// const geometry = new THREE.BufferGeometry().setFromPoints( [ new THREE.Vector3( 0, 0, 0 ), new THREE.Vector3( 0, 0, - 1 ) ] );



// 		const line = new THREE.Line( geometry );
// 		line.name = 'line';
// 		line.scale.z = 5;

// 		this.controller1.add( line.clone() );
// 		this.controller2.add( line.clone() );

// 		raycaster = new THREE.Raycaster();



