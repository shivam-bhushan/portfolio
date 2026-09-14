// <wire-object shape="icosahedron|torusknot|octahedron|dodecahedron|keyboard|controller|figure" speed="1"> — monochrome wireframe 3D accent.
// Fills its container; transparent background; stroke color follows the current theme's --fg-0 at --wire-opacity.
import * as THREE from 'three';

// Composite shapes are arrays of pre-transformed edge geometries (one per part).
function part(list, geo, { p = [0, 0, 0], r = [0, 0, 0], s } = {}) {
  if (s) geo.scale(...s);
  geo.rotateX(r[0]); geo.rotateY(r[1]); geo.rotateZ(r[2]);
  geo.translate(...p);
  list.push(new THREE.EdgesGeometry(geo, 12));
  geo.dispose();
}

function keyboard() {
  const parts = [];
  const box = (w, h, d, opt) => part(parts, new THREE.BoxGeometry(w, h, d), opt);
  box(2.0, 0.14, 0.92);
  const key = 0.135, gap = 0.185, rows = [-0.29, -0.105, 0.08];
  for (const z of rows)
    for (let c = 0; c < 10; c++) box(key, 0.08, key, { p: [(c - 4.5) * gap, 0.1, z] });
  // bottom row: two modifiers, spacebar, two modifiers
  const zb = 0.265;
  box(key, 0.08, key, { p: [-4.5 * gap, 0.1, zb] });
  box(key, 0.08, key, { p: [-3.5 * gap, 0.1, zb] });
  box(0.98, 0.08, key, { p: [0, 0.1, zb] });
  box(key, 0.08, key, { p: [3.5 * gap, 0.1, zb] });
  box(key, 0.08, key, { p: [4.5 * gap, 0.1, zb] });
  return parts;
}

function controller() {
  const parts = [];
  // body + angled grips
  part(parts, new THREE.BoxGeometry(1.5, 0.3, 0.62));
  part(parts, new THREE.CylinderGeometry(0.17, 0.21, 0.62, 6), { p: [-0.62, -0.18, 0.22], r: [Math.PI / 2.6, 0, -0.35] });
  part(parts, new THREE.CylinderGeometry(0.17, 0.21, 0.62, 6), { p: [0.62, -0.18, 0.22], r: [Math.PI / 2.6, 0, 0.35] });
  // thumbsticks
  part(parts, new THREE.CylinderGeometry(0.09, 0.07, 0.14, 8), { p: [-0.28, 0.2, 0.12] });
  part(parts, new THREE.CylinderGeometry(0.09, 0.07, 0.14, 8), { p: [0.28, 0.2, 0.12] });
  // d-pad cross
  part(parts, new THREE.BoxGeometry(0.3, 0.07, 0.1), { p: [-0.55, 0.17, -0.12] });
  part(parts, new THREE.BoxGeometry(0.1, 0.07, 0.3), { p: [-0.55, 0.17, -0.12] });
  // face buttons (diamond)
  for (const [dx, dz] of [[0, -0.1], [0, 0.1], [-0.1, 0], [0.1, 0]])
    part(parts, new THREE.CylinderGeometry(0.055, 0.055, 0.06, 8), { p: [0.55 + dx, 0.17, -0.12 + dz] });
  return parts;
}

function figure() {
  const parts = [];
  const box = (w, h, d, opt) => part(parts, new THREE.BoxGeometry(w, h, d), opt);
  part(parts, new THREE.IcosahedronGeometry(0.17, 0), { p: [0, 0.66, 0] });
  box(0.44, 0.5, 0.22, { p: [0, 0.24, 0] });          // torso
  box(0.36, 0.16, 0.2, { p: [0, -0.12, 0] });          // hips
  box(0.12, 0.48, 0.12, { p: [-0.32, 0.22, 0], r: [0, 0, 0.18] });  // arms
  box(0.12, 0.48, 0.12, { p: [0.32, 0.22, 0], r: [0, 0, -0.18] });
  box(0.14, 0.56, 0.14, { p: [-0.12, -0.5, 0] });      // legs
  box(0.14, 0.56, 0.14, { p: [0.12, -0.5, 0] });
  box(0.16, 0.08, 0.24, { p: [-0.12, -0.82, 0.05] });  // feet
  box(0.16, 0.08, 0.24, { p: [0.12, -0.82, 0.05] });
  return parts;
}

const GEOS = {
  icosahedron: () => new THREE.IcosahedronGeometry(1, 1),
  octahedron: () => new THREE.OctahedronGeometry(1, 0),
  dodecahedron: () => new THREE.DodecahedronGeometry(1, 0),
  torusknot: () => new THREE.TorusKnotGeometry(0.72, 0.24, 96, 12),
  keyboard,
  controller,
  figure,
};

class WireObject extends HTMLElement {
  connectedCallback() {
    if (this._init) return;
    this._init = true;
    this.style.display = 'block';
    const shape = this.getAttribute('shape') || 'icosahedron';
    const speed = parseFloat(this.getAttribute('speed') || '1');
    const scene = new THREE.Scene();
    const cam = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
    cam.position.z = 3.6;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    this.appendChild(renderer.domElement);
    renderer.domElement.style.cssText = 'width:100%;height:100%;display:block';
    const mat = new THREE.LineBasicMaterial({ transparent: true });
    const built = (GEOS[shape] || GEOS.icosahedron)();
    const mesh = new THREE.Group();
    for (const g of Array.isArray(built) ? built : [new THREE.EdgesGeometry(built, 1)]) {
      mesh.add(new THREE.LineSegments(g, mat));
    }
    scene.add(mesh);
    const syncColor = () => {
      const cs = getComputedStyle(this);
      mat.color.set(new THREE.Color(cs.getPropertyValue('--fg-0').trim() || '#1c1b19'));
      mat.opacity = parseFloat(cs.getPropertyValue('--wire-opacity')) || 0.35;
    };
    syncColor();
    new MutationObserver(syncColor).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    const resize = () => {
      const w = this.clientWidth || 300, h = this.clientHeight || 300;
      renderer.setSize(w, h, false);
      cam.aspect = w / h;
      cam.updateProjectionMatrix();
    };
    new ResizeObserver(resize).observe(this);
    resize();
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let visible = true;
    new IntersectionObserver((e) => { visible = e[0].isIntersecting; }).observe(this);
    mesh.rotation.set(0.4, 0.2, 0.1);
    const tick = (t) => {
      requestAnimationFrame(tick);
      if (!visible) return;
      if (!still) {
        mesh.rotation.y = t * 0.00012 * speed;
        mesh.rotation.x = 0.35 + Math.sin(t * 0.00008 * speed) * 0.15;
      }
      renderer.render(scene, cam);
    };
    requestAnimationFrame(tick);
  }
}

if (!customElements.get('wire-object')) {
  customElements.define('wire-object', WireObject);
}
