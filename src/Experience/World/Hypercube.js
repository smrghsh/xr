import * as THREE from 'three'
import { CubeReflectionMapping } from 'three'
import Experience from '../Experience.js'


export default class Hypercube {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.minSize = 0.1
        this.maxSize = 1.0

        this.spacing = 0.01

        this.group = new THREE.Group()

        for(var r = this.minSize; r < this.maxSize; r += this.spacing){
            const cubeGeometry = new THREE.BoxGeometry(r,r,r)
            const material = new THREE.MeshBasicMaterial({color:Math.random() * 0xffffff, wireframe:true})
            const cube = new THREE.Mesh(cubeGeometry,material)
            cube.r = r;
            this.group.add(cube)
        }
        this.scene.add(this.group)

    }
    update(){

    }
    wub(time){
        this.group.traverse((child) =>
        {
            // if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
            if(child instanceof THREE.Mesh)
            {
                if (child.r < this.maxSize/2){
                    child.scale.z = Math.cos(child.r * (Math.PI/this.maxSize) + time / 1000);
                child.scale.x = Math.cos(child.r * (Math.PI/this.maxSize) + time / 1000);
                child.scale.y = Math.cos(child.r * (Math.PI/this.maxSize) + time / 1000);
                }
                
            }
        })

    }

}