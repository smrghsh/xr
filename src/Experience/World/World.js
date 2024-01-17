import * as THREE from "three";
import Experience from "../Experience.js";
import Environment from "./Environment.js";
import Floor from "./Floor.js";
import Stars from "./Stars.js";
import SamirCube from "./SamirCube.js";
// import Hexagons from "./Hexagons.js";

export default class World {
  constructor() {
    this.experience = new Experience();
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.floor = new Floor();

    this.showingQuoteDust = true; // if not showing Quote Dust, then showing QuoteAmalgamate

    // Wait for resources
    this.ready = false;
    this.resources.on("ready", () => {
      // Setup
      console.log("resources ready");
      this.stars = new Stars();
      // this.hexagons = new Hexagons();
      this.environment = new Environment();
      this.samirCube = new SamirCube();
      this.ready = true;
    });
  }
  update() {
    if (this.ready) {
      this.stars.update();
      this.samirCube.update();
    }
  }
}
