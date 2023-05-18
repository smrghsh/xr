import * as THREE from "three";
import Experience from "./Experience.js";
import { XRControllerModelFactory } from "three/examples/jsm/webxr/XRControllerModelFactory.js";
// import { OculusHandModel } from 'three/addons/webxr/OculusHandModel.js';
// import { OculusHandPointerModel } from 'three/addons/webxr/OculusHandPointerModel.js';
import { XRHandModelFactory } from "three/examples/jsm/webxr/XRHandModelFactory.js";

export default class Hands {
  constructor() {
    this.experience = new Experience();
    this.canvas = this.experience.canvas;
    this.sizes = this.experience.sizes;
    this.scene = this.experience.scene;
    this.renderer = this.experience.renderer;
    this.handModelFactory = new XRHandModelFactory();

    this.hand1 = this.renderer.instance.xr.getHand(0);
    this.hand1.userData.currentHandModel = 0;
    this.scene.add(this.hand1);

    this.hleft = this.handModelFactory.createHandModel(this.hand1, "boxes");
    this.hand1.add(this.hleft);
    this.hand1.addEventListener("pinchend", function () {});

    //hand2

    this.hand2 = this.renderer.instance.xr.getHand(1);
    this.hand2.userData.currentHandModel = 0;
    this.scene.add(this.hand2);

    this.hright = this.handModelFactory.createHandModel(this.hand2, "boxes");
    this.hand2.add(this.hright);
    this.hand2.addEventListener("pinchend", function () {});
  }

  setInstance() {}

  resize() {}

  update() {}
}
