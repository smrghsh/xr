import * as THREE from "three";
import Experience from "../Experience.js";

export default class SamirCube {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;

    // add a red torus knot to the scene
    this.geometry = new THREE.BoxGeometry();
    this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    this.cube = new THREE.Mesh(this.geometry, this.material);
    this.scene.add(this.cube);
  }
  update() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
  }
}
