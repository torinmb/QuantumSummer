import {
  PlaneBufferGeometry,
  RepeatWrapping,
  Vector3,
  TextureLoader
} from "three";

import { Water } from 'three/examples/jsm/objects/Water.js';
import { waterParams } from './helpers.js'
export let initWater = () => {
  let waterGeometry = new PlaneBufferGeometry( 10000, 10000 );
  let water = new Water( waterGeometry,
    {
      textureWidth: 1024,
      textureHeight: 1024,
      waterNormals: new TextureLoader().load( './models/textures/waternormals.jpg', ( texture ) => {
        console.log('loaded texture', )
        texture.wrapS = texture.wrapT = RepeatWrapping;
      }),
      alpha: .8,
      transparent: true,
      sunDirection: new Vector3(),
      sunColor: 0xffffff,
      waterColor: 0x001e0f,
      distortionScale: .7,
      size: 10000,
      fog: scene.fog !== undefined
    }
  );
  water.rotation.x = - Math.PI / 2;

  let gui = window.gui;

  let folder = gui.addFolder( 'Water' );
  folder.add(waterParams, 'distortionScale', 0.0, 80.0);
  folder.add(waterParams, 'size', 0.1, 10.0);
  folder.add(waterParams, 'alpha', 0.3, 1.0);
  water.position.set(15, -3, 75);
  return water;
}
