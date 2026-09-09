import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeDWorkspace: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [webglFailed, setWebglFailed] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Track everything we allocate so cleanup can dispose it reliably.
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const textures: THREE.Texture[] = [];
    const track = <T extends THREE.BufferGeometry | THREE.Material | THREE.Texture>(x: T): T => {
      if ((x as THREE.BufferGeometry).isBufferGeometry) geometries.push(x as THREE.BufferGeometry);
      else if ((x as THREE.Material).isMaterial) materials.push(x as THREE.Material);
      else if ((x as THREE.Texture).isTexture) textures.push(x as THREE.Texture);
      return x;
    };

    // ============================================================
    // Scene + Camera
    // ============================================================
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0b1220);

    const width = container.clientWidth || 1;
    const height = container.clientHeight || 1;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 1, 7);
    camera.lookAt(0, 0, 0);

    // ============================================================
    // Renderer (opaque so we can clearly see rendering works)
    // ============================================================
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: false,
        antialias: true,
        powerPreference: 'high-performance',
      });
    } catch (err) {
      console.error('WebGL renderer creation failed:', err);
      setWebglFailed(true);
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.domElement.style.display = 'block';
    container.appendChild(renderer.domElement);

    // Root group so mouse parallax + idle sway move the whole scene together.
    const world = new THREE.Group();
    scene.add(world);

    // ============================================================
    // Lighting (soft ambient + shadow-casting key + colored fills)
    // ============================================================
    scene.add(new THREE.AmbientLight(0xffffff, 0.55));

    const hemi = new THREE.HemisphereLight(0xbcd0ff, 0x0b1220, 0.5);
    scene.add(hemi);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(4, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.near = 0.5;
    keyLight.shadow.camera.far = 30;
    keyLight.shadow.camera.left = -6;
    keyLight.shadow.camera.right = 6;
    keyLight.shadow.camera.top = 6;
    keyLight.shadow.camera.bottom = -6;
    keyLight.shadow.bias = -0.0004;
    scene.add(keyLight);

    const indigoFill = new THREE.PointLight(0x6366f1, 40, 30);
    indigoFill.position.set(-5, 3, 3);
    scene.add(indigoFill);

    const emeraldFill = new THREE.PointLight(0x10b981, 28, 30);
    emeraldFill.position.set(4, -2, 4);
    scene.add(emeraldFill);

    // ============================================================
    // Shadow-catching floor (subtle, same hue as background)
    // ============================================================
    const floorGeo = track(new THREE.PlaneGeometry(40, 40));
    const floorMat = track(new THREE.MeshStandardMaterial({ color: 0x0c1526, roughness: 1, metalness: 0 }));
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.35;
    floor.receiveShadow = true;
    world.add(floor);

    // ============================================================
    // 1. Modern laptop (centered)
    // ============================================================
    const laptop = new THREE.Group();
    laptop.position.set(0, -0.35, 0);
    laptop.rotation.set(0.12, -0.28, 0);
    world.add(laptop);

    const chassisMat = track(new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.65, roughness: 0.35 }));
    const bezelMat = track(new THREE.MeshStandardMaterial({ color: 0x0f172a, metalness: 0.8, roughness: 0.25 }));

    // Base
    const baseGeo = track(new THREE.BoxGeometry(2.3, 0.12, 1.55));
    const base = new THREE.Mesh(baseGeo, chassisMat);
    base.castShadow = true;
    base.receiveShadow = true;
    laptop.add(base);

    // Keyboard deck
    const deckGeo = track(new THREE.BoxGeometry(2.0, 0.02, 0.8));
    const deckMat = track(new THREE.MeshStandardMaterial({ color: 0x111c30, roughness: 0.7, metalness: 0.2 }));
    const deck = new THREE.Mesh(deckGeo, deckMat);
    deck.position.set(0, 0.07, -0.2);
    deck.receiveShadow = true;
    laptop.add(deck);

    // Trackpad
    const padGeo = track(new THREE.BoxGeometry(0.7, 0.012, 0.45));
    const padMat = track(new THREE.MeshStandardMaterial({ color: 0x1f2b45, roughness: 0.5, metalness: 0.3 }));
    const pad = new THREE.Mesh(padGeo, padMat);
    pad.position.set(0, 0.07, 0.45);
    laptop.add(pad);

    // Lid group (hinged at back edge, tilted up toward the camera)
    const lid = new THREE.Group();
    lid.position.set(0, 0.06, -0.75);
    lid.rotation.x = -Math.PI * 0.46; // stand the screen up
    laptop.add(lid);

    const lidGeo = track(new THREE.BoxGeometry(2.3, 1.45, 0.06));
    lidGeo.translate(0, 0.72, 0);
    const lidMesh = new THREE.Mesh(lidGeo, bezelMat);
    lidMesh.castShadow = true;
    lid.add(lidMesh);

    // ---- Dashboard drawn on a 2D canvas, used only as a texture source ----
    // (getContext('2d') is not a WebGL context and this is not the renderer canvas)
    const dash = document.createElement('canvas');
    dash.width = 1024;
    dash.height = 640;
    const g = dash.getContext('2d');
    if (g) {
      // screen background
      g.fillStyle = '#0a1526';
      g.fillRect(0, 0, 1024, 640);

      // header bar
      g.fillStyle = '#111f38';
      g.fillRect(0, 0, 1024, 84);
      const dots = ['#ef4444', '#f59e0b', '#10b981'];
      dots.forEach((c, i) => {
        g.fillStyle = c;
        g.beginPath();
        g.arc(40 + i * 34, 42, 10, 0, Math.PI * 2);
        g.fill();
      });
      g.fillStyle = '#e2e8f0';
      g.font = 'bold 30px Arial, sans-serif';
      g.fillText('Analytics Dashboard', 170, 53);
      g.fillStyle = '#38bdf8';
      g.font = '22px Arial, sans-serif';
      g.fillText('● live', 900, 52);

      // KPI cards
      const cards: [string, string, string][] = [
        ['REVENUE', '$6.30M', '#6366f1'],
        ['GROWTH', '+31%', '#10b981'],
        ['MODELS', '12', '#38bdf8'],
      ];
      cards.forEach(([label, value, color], i) => {
        const x = 40 + i * 320;
        g.fillStyle = '#111f38';
        g.fillRect(x, 110, 288, 120);
        g.fillStyle = color;
        g.fillRect(x, 110, 8, 120);
        g.fillStyle = '#94a3b8';
        g.font = '20px Arial, sans-serif';
        g.fillText(label, x + 28, 152);
        g.fillStyle = '#ffffff';
        g.font = 'bold 46px Arial, sans-serif';
        g.fillText(value, x + 28, 205);
      });

      // bar chart
      const bars = [120, 175, 140, 210, 190, 245, 220, 270];
      bars.forEach((h, i) => {
        g.fillStyle = i === 5 ? '#10b981' : '#6366f1';
        g.fillRect(60 + i * 66, 560 - h, 44, h);
      });

      // line/area chart on the right
      g.strokeStyle = '#38bdf8';
      g.lineWidth = 4;
      g.beginPath();
      const pts = [560, 520, 540, 470, 490, 420, 400, 360];
      pts.forEach((y, i) => {
        const x = 610 + i * 52;
        if (i === 0) g.moveTo(x, y);
        else g.lineTo(x, y);
      });
      g.stroke();
      g.fillStyle = 'rgba(56,189,248,0.18)';
      g.lineTo(610 + (pts.length - 1) * 52, 560);
      g.lineTo(610, 560);
      g.closePath();
      g.fill();

      // terminal strip
      g.fillStyle = '#050b18';
      g.fillRect(40, 588, 944, 34);
      g.fillStyle = '#22d3ee';
      g.font = '18px monospace';
      g.fillText('> python train.py  |  mongo: connected  |  sql: 8 queries', 56, 611);
    }
    const dashTex = track(new THREE.CanvasTexture(dash));
    dashTex.colorSpace = THREE.SRGBColorSpace;
    const screenGeo = track(new THREE.PlaneGeometry(2.14, 1.34));
    screenGeo.translate(0, 0.72, 0.035);
    const screenMat = track(new THREE.MeshBasicMaterial({ map: dashTex }));
    const screen = new THREE.Mesh(screenGeo, screenMat);
    lid.add(screen);

    // ============================================================
    // 2. Floating database cylinder beside the laptop
    // ============================================================
    const db = new THREE.Group();
    db.position.set(1.4, 0.2, 0);
    world.add(db);

    const dbMat = track(new THREE.MeshStandardMaterial({ color: 0x1e3a8a, metalness: 0.5, roughness: 0.3 }));
    const bandMat = track(new THREE.MeshStandardMaterial({ color: 0x38bdf8, emissive: 0x0ea5e9, emissiveIntensity: 0.6, roughness: 0.4 }));
    for (let i = 0; i < 3; i++) {
      const platterGeo = track(new THREE.CylinderGeometry(0.42, 0.42, 0.18, 40));
      const platter = new THREE.Mesh(platterGeo, dbMat);
      platter.position.y = (i - 1) * 0.3;
      platter.castShadow = true;
      db.add(platter);

      const bandGeo = track(new THREE.TorusGeometry(0.43, 0.02, 12, 40));
      bandGeo.rotateX(Math.PI / 2);
      const band = new THREE.Mesh(bandGeo, bandMat);
      band.position.y = (i - 1) * 0.3 + 0.09;
      db.add(band);
    }

    // ============================================================
    // 3. Small floating tech/analytics nodes (Python, SQL, MongoDB, analytics)
    // ============================================================
    type Node = { mesh: THREE.Mesh; baseY: number; spin: number; floatSpeed: number; phase: number };
    const nodes: Node[] = [];

    const makeNode = (
      geo: THREE.BufferGeometry,
      color: number,
      emissive: number,
      pos: [number, number, number],
      spin: number,
      floatSpeed: number
    ) => {
      track(geo);
      const mat = track(new THREE.MeshStandardMaterial({ color, emissive, emissiveIntensity: 0.35, metalness: 0.4, roughness: 0.3 }));
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(pos[0], pos[1], pos[2]);
      mesh.castShadow = true;
      world.add(mesh);
      nodes.push({ mesh, baseY: pos[1], spin, floatSpeed, phase: Math.random() * Math.PI * 2 });
    };

    // Python — icosahedron (sky blue)
    makeNode(new THREE.IcosahedronGeometry(0.3, 0), 0x38bdf8, 0x0ea5e9, [-1.45, 1.35, 0.2], 0.5, 1.3);
    // SQL — cube (indigo)
    makeNode(new THREE.BoxGeometry(0.42, 0.42, 0.42), 0x6366f1, 0x4338ca, [-1.5, 0.1, 0.4], 0.6, 1.6);
    // MongoDB — capsule (emerald)
    makeNode(new THREE.CapsuleGeometry(0.16, 0.28, 6, 16), 0x10b981, 0x059669, [-1.15, -0.7, 0.35], 0.7, 1.9);
    // Analytics — octahedron (amber)
    makeNode(new THREE.OctahedronGeometry(0.32, 0), 0xf59e0b, 0xb45309, [1.35, 1.45, -0.15], 0.55, 1.5);

    // ============================================================
    // 4. Mouse parallax
    // ============================================================
    let targetRotX = 0;
    let targetRotY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.2;
      targetRotX = -y * 0.12;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // ============================================================
    // 5. Responsive sizing (ResizeObserver + window resize)
    // ============================================================
    const applySize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.render(scene, camera);
    };
    const resizeObserver = new ResizeObserver(() => applySize());
    resizeObserver.observe(container);
    window.addEventListener('resize', applySize);

    // Immediate first render so we can see rendering works right away.
    applySize();
    renderer.render(scene, camera);

    // ============================================================
    // 6. Animation loop
    // ============================================================
    let animationFrameId = 0;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Slow idle sway blended with mouse parallax.
        const swayY = Math.sin(t * 0.3) * 0.12;
        const swayX = Math.cos(t * 0.24) * 0.05;
        world.rotation.y += (targetRotY + swayY - world.rotation.y) * 0.05;
        world.rotation.x += (targetRotX + swayX - world.rotation.x) * 0.05;

        // Database: slow spin + gentle bob.
        db.rotation.y = t * 0.5;
        db.position.y = 0.2 + Math.sin(t * 1.2) * 0.08;

        // Floating nodes: individual spin + bob.
        for (const n of nodes) {
          n.mesh.rotation.x = t * n.spin;
          n.mesh.rotation.y = t * n.spin * 0.8;
          n.mesh.position.y = n.baseY + Math.sin(t * n.floatSpeed + n.phase) * 0.09;
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    // ============================================================
    // 7. Cleanup
    // ============================================================
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', applySize);

      geometries.forEach((geo) => geo.dispose());
      materials.forEach((mat) => mat.dispose());
      textures.forEach((tex) => tex.dispose());

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[360px] sm:h-[440px] lg:h-[500px] relative pointer-events-auto cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Developer Workspace"
    >
      {webglFailed && (
        <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-slate-950 text-center p-6">
          <p className="text-sm text-slate-300">
            3D preview unavailable — your browser or device could not initialize WebGL.
          </p>
        </div>
      )}
    </div>
  );
};
