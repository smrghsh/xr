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
        this.depth = 3
        this.widthScale = 2
        this.waveHeight = 3.5
        this.spectrogramHeight = 2
        this.graphTitleBottomSpace = 0.1
        this.graphHeight = 0.7
        this.group = new THREE.Group()
        this.white = new THREE.MeshBasicMaterial({color: 'white'})
        this.waveGeometry = new THREE.PlaneGeometry(this.width,this.graphHeight)

        this.waveMaterial = new THREE.MeshBasicMaterial({map: this.waveImage, side: THREE.DoubleSide})
        this.waveMesh = new THREE.Mesh(this.waveGeometry, this.waveMaterial)
        this.waveMesh.position.y += this.waveHeight
        this.waveMesh.scale.x *= this.widthScale 
        this.waveMesh.position.z -= this.depth

        this.spectrogramMaterial = new THREE.MeshBasicMaterial({map: this.spectrogramImage, side: THREE.DoubleSide})
        this.spectrogramMesh = new THREE.Mesh(this.waveGeometry, this.spectrogramMaterial)
        this.spectrogramMesh.position.y += this.spectrogramHeight
        this.spectrogramMesh.scale.x *= this.widthScale 
        this.spectrogramMesh.position.z -= this.depth
        this.group.add(this.waveMesh)
        this.group.add(this.spectrogramMesh)


        this.font = this.resources.items.font
        console.log(this.font)
        const waveTitleGeometry = new THREE.TextGeometry( 'waveform', {
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
        const spectrogramTitleGeometry = new THREE.TextGeometry( 'spectrogram', {
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
        this.leftAlign = 0.8
        const waveTitle = new THREE.Mesh(waveTitleGeometry,new THREE.MeshBasicMaterial({color: 'white'}))
        waveTitle.scale.x = 0.003
        waveTitle.scale.y = 0.003
        waveTitle.scale.z = 0.003
        waveTitle.position.x -= this.leftAlign + this.width/2 
        waveTitle.position.z -= 3
        waveTitle.position.y = this.waveHeight + this.graphTitleBottomSpace+ this.graphHeight/2



        this.group.add(waveTitle)
        const spectrogramTitle = new THREE.Mesh(spectrogramTitleGeometry,new THREE.MeshBasicMaterial({color: 'white'}))
        spectrogramTitle.scale.x = 0.003
        spectrogramTitle.scale.y = 0.003
        spectrogramTitle.scale.z = 0.003
        spectrogramTitle.position.x -= this.leftAlign + this.width/2 
        spectrogramTitle.position.z -= 3
        spectrogramTitle.position.y = this.spectrogramHeight + this.graphTitleBottomSpace+ this.graphHeight/2
        this.group.add(spectrogramTitle)



        this.timeLabel = new THREE.Group()
        for(var i = 0.1; i < this.width*2; i+= 0.1){
            const tickGeo = new THREE.BoxGeometry(0.01,0.02,0.02)
            const white = new THREE.MeshBasicMaterial({color:'white'})
            const tick = new THREE.Mesh(tickGeo,white)
            tick.position.x = (-1 * (this.leftAlign + this.width/2)) + i
            tick.position.z -= this.depth
            tick.position.y = this.waveHeight - this.graphHeight/2
            const tick2 = new THREE.Mesh(tickGeo,white)
            tick2.position.x = (-1 * (this.leftAlign + this.width/2)) + i
            tick2.position.z -= this.depth
            tick2.position.y = this.spectrogramHeight - this.graphHeight/2
            this.timeLabel.add(tick)
            this.timeLabel.add(tick2)
        }
        const timeTitleGeometry = new THREE.TextGeometry( 'time (s)', {
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
        const timeTitle = new THREE.Mesh(timeTitleGeometry,this.white)
        timeTitle.scale.x = 0.001
        timeTitle.scale.y = 0.001
        timeTitle.scale.z = 0.001
        timeTitle.position.y = this.waveHeight - this.graphHeight/2 - 0.1
        timeTitle.position.x -= 0.1
        timeTitle.position.z -= this.depth
        this.timeLabel.add(timeTitle)

        const timeTitle2 = new THREE.Mesh(timeTitleGeometry,this.white)
        timeTitle2.scale.x = 0.001
        timeTitle2.scale.y = 0.001
        timeTitle2.scale.z = 0.001
        timeTitle2.position.y = this.spectrogramHeight - this.graphHeight/2 - 0.1
        timeTitle2.position.x -= 0.1
        timeTitle2.position.z -= this.depth
        this.timeLabel.add(timeTitle2)

        this.group.add(this.timeLabel)


        this.hzLabel = new THREE.Group()

        for(var i = 0; i < this.graphHeight; i+= this.graphHeight/10){
            const hTickGeo = new THREE.BoxGeometry(0.02,0.01,0.02)
            const hTick = new THREE.Mesh(hTickGeo, this.white)
            hTick.position.x =  (-1 * (this.leftAlign + this.width/2))
            hTick.position.z -= this.depth
            hTick.position.y = this.spectrogramHeight - this.graphHeight/2 + i
            this.hzLabel.add(hTick)
        }
        const maxHZGeometry = new THREE.TextGeometry( '5000', {
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
        const minHZGeometry = new THREE.TextGeometry( '0', {
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
        const hzTitleGeo = new THREE.TextGeometry( 'frequency (Hz)', {
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
        const maxHZ = new THREE.Mesh(maxHZGeometry,this.white)
        maxHZ.scale.x = 0.00085
        maxHZ.scale.y = 0.00085
        maxHZ.scale.z = 0.00085
        maxHZ.position.y = this.spectrogramHeight + this.graphHeight/2 - 0.02
        maxHZ.position.x -= this.width + 0.18
        maxHZ.position.z -= this.depth
        this.hzLabel.add(maxHZ)

        const hzTitle = new THREE.Mesh(hzTitleGeo,this.white)
        hzTitle.scale.x = 0.0008
        hzTitle.scale.y = 0.0008
        hzTitle.scale.z = 0.0008
        hzTitle.position.y = this.spectrogramHeight - 0.02
        hzTitle.position.x -= this.width + 0.2 + 0.25
        hzTitle.position.z -= this.depth
        this.hzLabel.add(hzTitle)

        
        const minHZ = new THREE.Mesh(minHZGeometry,this.white)
        minHZ.scale.x = 0.00085
        minHZ.scale.y = 0.00085
        minHZ.scale.z = 0.00085
        minHZ.position.y = this.spectrogramHeight - this.graphHeight/2 - 0.02
        minHZ.position.x -= this.width + 0.08
        minHZ.position.z -= this.depth
        this.hzLabel.add(minHZ)

        this.group.add(this.hzLabel)
        this.scene.add(this.group)
    }
}