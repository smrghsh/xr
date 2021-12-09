import * as THREE from 'three'
import Experience from '../Experience.js'
import invertVertexShader from '../../shaders/invert/vertex.glsl'
import invertFragmentShader from '../../shaders/invert/fragment.glsl'
import heatmapVertexShader from '../../shaders/heatmap/vertex.glsl'
import heatmapFragmentShader from '../../shaders/heatmap/fragment.glsl'

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
        this.waveHeight = 2.8
        this.spectrogramHeight = 1.5
        this.graphTitleBottomSpace = 0.08
        this.graphHeight = 0.9
        this.group = new THREE.Group()
        this.white = new THREE.MeshBasicMaterial({color: 'white'})
        this.waveGeometry = new THREE.PlaneGeometry(this.width,this.graphHeight,300,300)

        this.waveMaterial = new THREE.MeshBasicMaterial({map: this.waveImage, side: THREE.DoubleSide})
        this.invertMaterial = new THREE.ShaderMaterial({
            uniforms: {
                texture1: { type: "t", value: this.waveImage }
            },
            vertexShader: invertVertexShader,
            fragmentShader: invertFragmentShader
        })
        this.waveMesh = new THREE.Mesh(this.waveGeometry, this.invertMaterial)
        this.waveMesh.position.y += this.waveHeight
        this.waveMesh.scale.x *= this.widthScale 
        this.waveMesh.position.z -= this.depth

        this.spectrogramMaterial = new THREE.MeshBasicMaterial({map: this.spectrogramImage, side: THREE.DoubleSide})
        this.heatmapMaterial = new THREE.ShaderMaterial({
            uniforms: {
                texture1: { type: "t", value: this.spectrogramImage }
            },
            vertexShader: heatmapVertexShader,
            fragmentShader: heatmapFragmentShader
        })
        this.spectrogramMesh = new THREE.Mesh(this.waveGeometry, this.heatmapMaterial)
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
        
        
        const filenameGeo = new THREE.TextGeometry( 'common_voice_en_10.mp3', {
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
        const filenameTitle = new THREE.Mesh(filenameGeo,this.white)
        filenameTitle.scale.x = 0.0055
        filenameTitle.scale.y = 0.0055
        filenameTitle.scale.z = 0.0055
        filenameTitle.position.y = this.waveHeight + 0.85
        filenameTitle.position.z -= this.depth
        filenameTitle.position.x -= 1.6
        this.group.add(filenameTitle)

        const metadataGeo = new THREE.TextGeometry( 'METADATA\nsize: 17.2KB\nsource: Mozilla Common Voice\ngender: male', {
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
        const metadataTitle = new THREE.Mesh(metadataGeo,this.white)
        metadataTitle.scale.x = 0.003
        metadataTitle.scale.y = 0.003
        metadataTitle.scale.z = 0.003
        metadataTitle.position.y = this.waveHeight + 0.5
        metadataTitle.position.z -= this.depth - 2
        metadataTitle.position.x -= 4
        metadataTitle.rotation.y += Math.PI/4
        this.group.add(metadataTitle)
        
        const acousticPropString = "ACOUSTIC PROPERTIES\npitch mean: 128.12Hz\npitch max: 235.64Hz\npitch min: 109Hz\nF1 mean: 612.75 Hz\nF2 mean: 1657.43Hz"
        const acousticGeo = new THREE.TextGeometry( acousticPropString, {
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
        const acousticTitle = new THREE.Mesh(acousticGeo,this.white)
        acousticTitle.scale.x = 0.003
        acousticTitle.scale.y = 0.003
        acousticTitle.scale.z = 0.003
        acousticTitle.position.y = this.spectrogramHeight + 0.5
        acousticTitle.position.z -= this.depth - 2
        acousticTitle.position.x -= 4
        acousticTitle.rotation.y += Math.PI/4
        this.group.add(acousticTitle)
        
        const wordsPropString = "words (en)\n\"The boy looked out at the horizon\""
        const wordsGeo = new THREE.TextGeometry( wordsPropString, {
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
        const wordsTitle = new THREE.Mesh(wordsGeo,this.white)
       wordsTitle.scale.x = 0.003
       wordsTitle.scale.y = 0.003
       wordsTitle.scale.z = 0.003
       wordsTitle.position.x -= this.leftAlign + this.width/2 
       wordsTitle.position.z -= 3
       wordsTitle.position.y = .7
        this.group.add(wordsTitle)
        this.scene.add(this.group)
    }
}