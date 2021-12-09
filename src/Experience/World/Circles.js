import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Circles{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene

        this.amtCircles = 20;
        
        const minRadius = 0.3;
        const maxRadius = 3;
        this.maxRadius = maxRadius;
        const spacing = 0.1;
        this.group = new THREE.Group()
        for(var radius = minRadius; radius < maxRadius; radius += spacing){
            const circleGeometry = new THREE.CircleGeometry(radius,100)
            const material = new THREE.MeshBasicMaterial({color:Math.random() * 0xffffff, wireframe:true})
            const circle = new THREE.Mesh(circleGeometry,material);
            circle.radius = radius;
            // circle.position.y = radius;
            this.group.add(circle)
        }
        this.scene.add(this.group)


    }
    update(){
        // this.group.children.forEach( (circle, i)=>{
        //     circle.position.z = i/this.amtCircles;

        // })
        
    }
    undulate(time){
        this.group.traverse((child) =>
        {
            // if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
            if(child instanceof THREE.Mesh)
            {
                child.position.z = Math.sin(child.radius * (Math.PI/this.maxRadius) + time / 1000);
            }
        })
    }
}