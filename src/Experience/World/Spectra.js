import * as THREE from 'three'
import Experience from '../Experience.js'


export default class Spectra{
    constructor(){
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.waveImage = this.resources.items.wave1
        this.spectrogramImage = this.resources.items.spectrogram1
        console.log(this.resources)
        console.log(this.spectrogramImage)
        this.width = 1.564

        this.waveGeometry = new THREE.PlaneGeometry(this.width,0.8)

        this.waveMaterial = new THREE.MeshBasicMaterial({map: this.waveImage, side: THREE.DoubleSide})
        this.waveMesh = new THREE.Mesh(this.waveGeometry, this.waveMaterial)
        this.waveMesh.position.y += 3
        this.waveMesh.scale.x *= 2
        this.waveMesh.position.z -=3

        this.spectrogramMaterial = new THREE.MeshBasicMaterial({map: this.spectrogramImage, side: THREE.DoubleSide})
        this.spectrogramMesh = new THREE.Mesh(this.waveGeometry, this.spectrogramMaterial)
        this.spectrogramMesh.position.y += 2
        this.spectrogramMesh.scale.x *= 2
        this.spectrogramMesh.position.z -=3
        this.scene.add(this.waveMesh)
        this.scene.add(this.spectrogramMesh)
    }
}