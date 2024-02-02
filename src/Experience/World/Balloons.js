import * as THREE from "three";
import Experience from "../Experience.js";
import wasm from "vite-plugin-wasm";
import RAPIER from "@dimforge/rapier3d";

export default class Balloons {
  constructor() {
    this.experience = new Experience();
    this.scene = this.experience.scene;
    this.resources = this.experience.resources;
    this.group = new THREE.Group();
    this.scene.add(this.group);
    this.gravity = { x: 0.0, y: -9.81, z: 0.0 };
    this.world = new RAPIER.World(this.gravity);

    // Create the ground
    this.groundColliderDesc = RAPIER.ColliderDesc.cuboid(10.0, 0.1, 10.0);
    this.world.createCollider(this.groundColliderDesc);

    // Create a dynamic rigid-body.
    this.rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic().setTranslation(
      0.0,
      10.0,
      -3.0
    );
    this.rigidBody = this.world.createRigidBody(this.rigidBodyDesc);

    // Create a cuboid collider attached to the dynamic rigidBody.
    this.colliderDesc = RAPIER.ColliderDesc.ball(0.5, 0.5, 0.5)
      .setDensity(1.3)
      .setFriction(0.8)
      .setRestitution(0.8);
    this.collider = this.world.createCollider(
      this.colliderDesc,
      this.rigidBody
    );
    this.createBalloons();
  }
  createBalloons() {
    // balloon is a mesh composed of a reflective material and a sphere geometry
    this.balloon = new THREE.Mesh(
      new THREE.SphereGeometry(0.5, 16, 16),
      new THREE.MeshStandardMaterial({
        color: 0xff0000,
        metalness: 0.3,
        roughness: 0.4,
      })
    );
    this.balloon.scale.set(0.5, 0.5, 0.5);
    let position = this.rigidBody.translation();
    this.balloon.position.x = position.x;
    this.balloon.position.y = position.y;
    this.balloon.position.z = position.z;

    this.group.add(this.balloon);
  }

  update() {
    this.world.step();

    // Get and print the rigid-body's position.
    let position = this.rigidBody.translation();
    console.log("Rigid-body position: ", position.x, position.y, position.z);

    // Update the balloon's position
    this.balloon.position.x = position.x;
    this.balloon.position.y = position.y;
    this.balloon.position.z = position.z;
  }
}
1;
