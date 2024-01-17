import * as THREE from "three";
import Experience from "../Experience.js";
export default class Mouse extends THREE.Vector2 {
  constructor() {
    super();
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    window.addEventListener("mousemove", (event) => {
      this.x = (event.clientX / this.sizes.width) * 2 - 1;
      this.y = -(event.clientY / this.sizes.height) * 2 + 1;
    });
  }
}
