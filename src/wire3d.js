// <wire-object shape="icosahedron|torusknot|octahedron|dodecahedron" speed="1"> — monochrome wireframe 3D accent.
// Fills its container; transparent background; stroke color follows the current theme's --fg-0 at --wire-opacity.
import * as THREE from 'three';

const GEOS = {
  icosahedron: () => new THREE.IcosahedronGeometry(1, 1),
  octahedron: () => new THREE.OctahedronGeometry(1, 0),
  dodecahedron: () => new THREE.DodecahedronGeometry(1, 0),
  torusknot: () => new THREE.TorusKnotGeometry(0.72, 0.24, 96, 12),
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
    const mesh = new THREE.LineSegments(new THREE.EdgesGeometry(GEOS[shape] ? GEOS[shape]() : GEOS.icosahedron(), 1), mat);
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
