import {
  PerspectiveCamera,
  Plane,
  Raycaster,
  Vector2,
  Vector3,
  WebGLRenderer,
} from 'https://unpkg.com/three@0.120.0/build/three.module.js';

import { OrbitControls } from 'https://unpkg.com/three@0.120.0/examples/jsm/controls/OrbitControls.js';

/**
 * Three.js helper
 */
export default function useThree() {
  // default conf
  const conf = {
    canvas: null,
    antialias: true,
    alpha: false,
    camera_fov: 50,
    camera_pos: new Vector3(0, 0, 100),
    camera_ctrl: false,
    mouse_move: false,
    mouse_raycast: false,
    window_resize: true,
  };

  // size
  const size = {
    width: 0, height: 0,
    wWidth: 0, wHeight: 0,
    ratio: 0,
  };

  let afterResizeCallbacks = [];

  // mouse tracking
  const mouse = new Vector2();
  const mouseV3 = new Vector3();
  const mousePlane = new Plane(new Vector3(0, 0, 1), 0);
  const raycaster = new Raycaster();

  // returned object
  const obj = {
    conf,
    renderer: null,
    camera: null,
    cameraCtrl: null,
    size,
    mouse, mouseV3,
    init,
    dispose,
    setSize,
    onAfterResize,
  };

  /**
   * init three
   */
  function init(params) {
    if (params) {
      for (const [key, value] of Object.entries(params)) {
        conf[key] = value;
      }
    }

    obj.renderer = new WebGLRenderer({ canvas: conf.canvas, antialias: conf.antialias, alpha: conf.alpha });

    obj.camera = new PerspectiveCamera(conf.camera_fov);
    obj.camera.position.copy(conf.camera_pos);

    if (conf.camera_ctrl) {
      obj.cameraCtrl = new OrbitControls(obj.camera, obj.renderer.domElement);
      if (conf.camera_ctrl instanceof Object) {
        for (const [key, value] of Object.entries(conf.camera_ctrl)) {
          obj.cameraCtrl[key] = value;
        }
      }
    }

    if (conf.window_resize) {
      onResize();
      window.addEventListener('resize', onResize);
    }

    if (conf.mouse_move) {
      //obj.renderer.domElement.addEventListener('mousemove', onMousemove);
      //obj.renderer.domElement.addEventListener('mouseleave', onMouseleave);
      window.addEventListener('mousemove', onMousemove);
      window.body.addEventListener('mouseleave', onMouseleave);
    }

    return obj;
  };

  /**
   * remove listeners
   */
  function dispose() {
    window.removeEventListener('resize', onResize);
    window.removeEventListener('mousemove', onMousemove);
    window.removeEventListener('mouseleave', onMouseleave);
    console.log('dispose mouse');
  }

  /**
   * add after resize callback
   */
  function onAfterResize(callback) {
    afterResizeCallbacks.push(callback);
  }

  /**
   * mousemove listener
   */
  function onMousemove(e) {
    mouse.x = (e.clientX / size.width) * 2 - 1;
    mouse.y = -(e.clientY / size.height) * 2 + 1;
    updateMouseV3();
  }

  /**
   * mouseleave listener
   */
  function onMouseleave(e) {
    mouse.x = 0;
    mouse.y = 0;
    updateMouseV3();
  }

  /**
   * get 3d mouse position
   */
  function updateMouseV3() {
    if (conf.mouse_raycast) {
      const v3 = new Vector3();
      obj.camera.getWorldDirection(v3);
      mousePlane.normal.copy(v3.normalize());
      raycaster.setFromCamera(mouse, obj.camera);
      raycaster.ray.intersectPlane(mousePlane, mouseV3);
    }
  }

  /**
   * resize listener
   */
  function onResize() {
    setSize(window.innerWidth, window.innerHeight);
    afterResizeCallbacks.forEach(c => c());
  }

  /**
   * update renderer size and camera
   */
  function setSize(width, height) {
    size.width = width;
    size.height = height;
    size.ratio = width / height;

    obj.renderer.setSize(width, height, false);
    obj.camera.aspect = size.ratio;
    obj.camera.updateProjectionMatrix();

    const wsize = getCameraSize();
    size.wWidth = wsize[0]; size.wHeight = wsize[1];
  }

  /**
   * calculate camera visible area size
   */
  function getCameraSize() {
    const vFOV = (obj.camera.fov * Math.PI) / 180;
    const h = 2 * Math.tan(vFOV / 2) * Math.abs(obj.camera.position.z);
    const w = h * obj.camera.aspect;
    return [w, h];
  }

  return obj;
}