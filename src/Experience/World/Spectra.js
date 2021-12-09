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
        this.widthScale = 2
        this.waveHeight = 3
        this.spectrogramHeight = 2
        this.graphHeight = 0.8
        this.group = new THREE.Group()

        this.waveGeometry = new THREE.PlaneGeometry(this.width,this.graphHeight)

        this.waveMaterial = new THREE.MeshBasicMaterial({map: this.waveImage, side: THREE.DoubleSide})
        this.waveMesh = new THREE.Mesh(this.waveGeometry, this.waveMaterial)
        this.waveMesh.position.y += this.waveHeight
        this.waveMesh.scale.x *= this.widthScale 
        this.waveMesh.position.z -=3

        this.spectrogramMaterial = new THREE.MeshBasicMaterial({map: this.spectrogramImage, side: THREE.DoubleSide})
        this.spectrogramMesh = new THREE.Mesh(this.waveGeometry, this.spectrogramMaterial)
        this.spectrogramMesh.position.y += this.spectrogramHeight
        this.spectrogramMesh.scale.x *= this.widthScale 
        this.spectrogramMesh.position.z -= 3
        this.group.add(this.waveMesh)
        this.group.add(this.spectrogramMesh)


        this.font = this.resources.items.font
        console.log(this.font)
        const waveTitleGeometry = new THREE.TextGeometry( 'Waveform', {
            font: this.font,
            size: 50,
            height: 10,
            curveSegments: 12,
            bevelEnabled: true,
            bevelThickness: 0.5,
            bevelSize: 1,
            bevelOffset: 1,
            bevelSegments: 5
        } );
        const waveTitle = new THREE.Mesh(waveTitleGeometry,new THREE.MeshBasicMaterial({color: 'white'}))
        waveTitle.scale.x = 0.003
        waveTitle.scale.y = 0.003
        waveTitle.scale.z = 0.003
        waveTitle.position.x -= 2 + this.width/2 
        waveTitle.position.z -= 3
        waveTitle.position.y = this.waveHeight + this.graphHeight/2
        this.scene.add(waveTitle)
        this.scene.add(this.group)
    }
}