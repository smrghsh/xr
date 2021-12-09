import * as THREE from 'three'
import moireVertexShader from '../../shaders/moire/vertex.glsl'
import moireFragmentShader from '../../shaders/moire/fragment.glsl'
import Experience from '../Experience.js'


export default class Stars {
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        const particlesGeometry = new THREE.BufferGeometry()
        const count = 7000
        const positions = new Float32Array(count*3)
        const color = new Float32Array(count*3)

        // positions.forEach((e,i)=>{positions[i] = Math.random()})
        for(let i = 0; i < count * 3; i++){
            // color[i] = Math.random()
            color[i] = 1
        }
        // for(let i = 0; i < count * 3; i++){
        //     positions[i] = (Math.random() - 0.5) * 10
        // }
        // function starposition(a,b){
        //     let r = Math.random()
        //     let r1 = Math.random()
        //     let r2 = Math.random()

        //     return ((Math.random() > 0.5)? 1 : -1) * ( (Math.random()*(b-a)) + a)
        // }
        console.log()
        for(let i = 0; i < count * 3; i+=3){
            let a = 1
            let b = 1.1
            let distance = ((Math.random()*(b-a)) + a)
            // let rot1 = Math.random()*(Math.PI)
            let rot1 = Math.acos((2*Math.random())-1.0)
            let rot2 = Math.random()*(2*Math.PI)
            positions[i] = Math.sin(rot1)*Math.cos(rot2)*distance
            positions[i+1] = Math.sin(rot1)*Math.sin(rot2)*distance
            positions[i+2] = Math.cos(rot1)*distance
        }
        // function FibSphere(nPoints){
        //     var goldenRatio = (1 + Math.sqrt(5)) * .5;
        //     var goldenAngle = (2.0 - goldenRatio) * (2.0*Math.PI);
    
        //     var vertices = [];
    
        //     for(var i = 0; i<nPoints; i++){
        //         var t = i/nPoints;
        //         var angle1 = Math.acos(1-2*t);
        //         var angle2 = goldenAngle*i;
    
        //         var x = Math.sin(angle1)*Math.cos(angle2);
        //         var y = Math.sin(angle1)*Math.sin(angle2);
        //         var z = Math.cos(angle1);
    
        //         vertices.push(x,y,z);
        //     }
    
        //     return vertices; // Returns vertex list [x0,y0,z0,x1,y1,z1,...]
    
        // }
        // positions = Float32Array()
        particlesGeometry.setAttribute('position',new THREE.BufferAttribute(positions,3))
        particlesGeometry.setAttribute('color',new THREE.BufferAttribute(color,3))
        const particlesMaterial = new THREE.ShaderMaterial({
            vertexShader: moireVertexShader,
            fragmentShader: moireFragmentShader,
            transparent: true,
        })
        particlesMaterial.color = new THREE.Color('white')
        particlesMaterial.vertexColors = true

        // particlesMaterial.map = particleTexture
        particlesMaterial.transparent = true
        // particlesMaterial.alphaMap = this.resources.items.star
        particlesMaterial.alphaTest = 0.001
        // particlesMaterial.depthTest = false
        particlesMaterial.depthWrite = false

        //this one is a bigger performance impact

        particlesMaterial.blending = THREE.AdditiveBlending
        // Points
        this.particles = new THREE.Points(particlesGeometry,particlesMaterial)
        this.particles.position.y += 1
        this.scene.add(this.particles)
    }
    update(){
        // this.particles.rotation.x += 0.02
        
    }
}