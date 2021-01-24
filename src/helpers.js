import {
  Vector3,
} from "three";


export let params = {
  activationDistance : 24.0,
  useOrbitControls: false,
  showActivationSites: false,
  // useOrbitControls: false
};

export let wellShaderParams = {
  time: 0.0,
}

export let fogParams = {
  // 0x337d
  fogNearColor: 0xfc4848,
  fogHorizonColor: 0x7d,
  fogDensity: 0.0021,
  fogNoiseSpeed: 100,
  fogNoiseFreq: .0012,
  fogNoiseImpact: .5
};

export let waterParams = {
  alpha: .8,
  // sunDirection: new Vector3(),
  // sunColor: 0xffffff,
  waterColor: 0x001e0f,
  size: 2.8,
  distortionScale: 30
}

export let audioParams = {
  fftSize: 32
};

export function promisifyLoader ( loader, onProgress ) {

    function promiseLoader ( url ) {
  
      return new Promise( ( resolve, reject ) => {
  
        loader.load( url, resolve, onProgress, reject );
  
      } );
    }
  
    return {
      originalLoader: loader,
      load: promiseLoader,
    };
}

export function getGLTFPosition(gltf) {
  try {
    if(!gltf) {
      return new Vector3(0);
    }
    let position = gltf.position;
    if(!position) {
      return new Vector3(0);
    }
    if(position.x === 0 && position.y === 0 && position.z ===0) {
      return getGLTFPosition(gltf.children[0]);
    } else {
      return gltf.position;
    }
  }
  catch (e) {
    console.error('tried getting position from GLTF', e);
  }
}

export function lerp (start, end, amt){
  return (1-amt)*start+amt*end
}