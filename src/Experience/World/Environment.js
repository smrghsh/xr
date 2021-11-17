import * as THREE from 'three'
import Experience from '../Experience.js'

export default class Environment
{
    constructor()
    {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.debug = this.experience.debug
        
        

        // this.setSunLight()
        this.setAmbientLight()
        // this.setEnvironmentMap()
    }
    setAmbientLight(){
        this.ambientLight = new THREE.AmbientLight('#ffffff', 2.0)
        this.scene.add(this.ambientLight)
    }

    // setSunLight()
    // {
    //     this.sunLight = new THREE.DirectionalLight('#ffffff', 4)
    //     this.sunLight.castShadow = true
    //     this.sunLight.shadow.camera.far = 15
    //     this.sunLight.shadow.mapSize.set(1024, 1024)
    //     this.sunLight.shadow.normalBias = 0.05
    //     this.sunLight.position.set(3.5, 2, 10.25)
    //     this.scene.add(this.sunLight)

    //     // Debug
    //     if(this.debug.active)
    //     {
    //         this.debugFolder
    //             .add(this.sunLight, 'intensity')
    //             .name('sunLightIntensity')
    //             .min(0)
    //             .max(10)
    //             .step(0.001)
            
    //         this.debugFolder
    //             .add(this.sunLight.position, 'x')
    //             .name('sunLightX')
    //             .min(- 5)
    //             .max(5)
    //             .step(0.001)
            
    //         this.debugFolder
    //             .add(this.sunLight.position, 'y')
    //             .name('sunLightY')
    //             .min(- 5)
    //             .max(5)
    //             .step(0.001)
            
    //         this.debugFolder
    //             .add(this.sunLight.position, 'z')
    //             .name('sunLightZ')
    //             .min(- 5)
    //             .max(5)
    //             .step(0.001)
    //     }
    // }

    // setEnvironmentMap()
    // {
    //     this.environmentMap = {}
    //     this.environmentMap.intensity = 9.4
    //     this.environmentMap.texture = this.resources.items.environmentMapTexture
    //     this.environmentMap.texture.encoding = THREE.sRGBEncoding
    //     this.scene.environment = this.environmentMap.texture
    //     this.environmentMap.updateMaterials = () =>
    //     {
    //         this.scene.traverse((child) =>
    //         {
    //             if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial)
    //             {
    //                 // console.log(child)
    //                 child.geometry.setAttribute('uv2', new THREE.BufferAttribute(child.geometry.attributes.uv.array, 2))
    //                 child.material.map = this.resources.items.iceColorTexture
    //                 child.material.aoMap = this.resources.items.iceAmbientOcclusionTexture
    //                 child.material.aoMapIntensity = 1
    //                 child.material.envMap = this.resources.items.iceHeightTexture
    //                 // displacement didn't work because I toggle wirefames to indicate dead cell state, increased subdivisions made dense wireframes
    //                 // child.material.displacementScale = 0.05
    //                 // child.material.displacementMap = this.resources.items.iceHeightTexture
    //                 child.material.metalnessMap = this.resources.items.iceMetalnessTexture
    //                 child.material.roughnessMap = this.resources.items.iceRoughnessTexture
    //                 child.material.normalMap = this.resources.items.iceNormalTexture
    //                 child.material.normalScale.set(0.2, 0.2)
    //                 // child.material.transparent = true
    //                 // child.material.alphaMap = this.resources.items.iceColorTexture

    //                 //fabric texture, unused
    //                 // child.material.map = this.resources.items.fabricColorTexture
    //                 // child.material.aoMap = this.resources.items.fabricAmbientOcclusionTexture
    //                 // child.material.aoMapIntensity = 1
    //                 // // child.material.envMap = this.resources.items.fabricHeightTexture
    //                 // // // child.material.displacementScale = 0.05
    //                 // // child.material.displacementMap = this.resources.items.fabricHeightTexture
    //                 // child.material.metalnessMap = this.resources.items.fabricMetalnessTexture
    //                 // child.material.roughnessMap = this.resources.items.fabricRoughnessTexture
    //                 // child.material.normalMap = this.resources.items.fabricNormalTexture


                    

    //                 child.material.envMapIntensity = this.environmentMap.intensity
    //                 child.material.needsUpdate = true
    //             }
    //         })
    //     }
    //     // this.environmentMap.updateMaterials()

    //     // Debug
    //     // if(this.debug.active)
    //     // {
    //     //     this.debugFolder
    //     //         .add(this.environmentMap, 'intensity')
    //     //         .name('envMapIntensity')
    //     //         .min(0)
    //     //         .max(4)
    //     //         .step(0.001)
    //     //         .onChange(this.environmentMap.updateMaterials)
    //     // }
    // }
}