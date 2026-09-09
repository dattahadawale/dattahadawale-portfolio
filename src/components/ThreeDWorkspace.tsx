import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeDWorkspace: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.set(0, 1.2, 5.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = false; // keep fast
    container.appendChild(renderer.domElement);

    // Group for overall rotation & parallax
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // ============================================================
    // 1. Sleek 3D Laptop
    // ============================================================
    const laptopGroup = new THREE.Group();
    laptopGroup.position.set(-0.2, -0.2, 0);
    laptopGroup.rotation.set(0.15, -0.35, 0);
    mainGroup.add(laptopGroup);

    // Materials
    const chassisMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      metalness: 0.8,
      roughness: 0.25
    });

    const screenFrameMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.9,
      roughness: 0.2
    });

    // Base
    const baseGeo = new THREE.BoxGeometry(2.4, 0.08, 1.6);
    const baseMesh = new THREE.Mesh(baseGeo, chassisMat);
    laptopGroup.add(baseMesh);

    // Trackpad
    const trackpadGeo = new THREE.BoxGeometry(0.7, 0.005, 0.5);
    const trackpadMat = new THREE.MeshStandardMaterial({ color: 0x334155, metalness: 0.5, roughness: 0.4 });
    const trackpad = new THREE.Mesh(trackpadGeo, trackpadMat);
    trackpad.position.set(0, 0.045, 0.45);
    laptopGroup.add(trackpad);

    // Keyboard bed
    const kbGeo = new THREE.BoxGeometry(2.1, 0.005, 0.85);
    const kbMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.6 });
    const kb = new THREE.Mesh(kbGeo, kbMat);
    kb.position.set(0, 0.045, -0.25);
    laptopGroup.add(kb);

    // Screen Hinge & Lid
    const lidGroup = new THREE.Group();
    lidGroup.position.set(0, 0.04, -0.8);
    lidGroup.rotation.x = -Math.PI / 16; // tilted back ~100 deg
    laptopGroup.add(lidGroup);

    const lidGeo = new THREE.BoxGeometry(2.4, 1.5, 0.05);
    lidGeo.translate(0, 0.75, 0);
    const lidMesh = new THREE.Mesh(lidGeo, screenFrameMat);
    lidGroup.add(lidMesh);

    // Dynamic Canvas Texture for Laptop Screen (Power BI & Python Analytics Display)
    const screenCanvas = document.createElement('canvas');
    screenCanvas.width = 512;
    screenCanvas.height = 320;
    const ctx = screenCanvas.getContext('2d');
    if (ctx) {
      // Screen background
      ctx.fillStyle = '#090d16';
      ctx.fillRect(0, 0, 512, 320);

      // Top bar
      ctx.fillStyle = '#1e293b';
      ctx.fillRect(0, 0, 512, 32);
      ctx.fillStyle = '#10b981';
      ctx.beginPath();
      ctx.arc(20, 16, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#6366f1';
      ctx.beginPath();
      ctx.arc(36, 16, 5, 0, Math.PI * 2);
      ctx.fill();

      // Title
      ctx.fillStyle = '#e2e8f0';
      ctx.font = 'bold 13px Inter, sans-serif';
      ctx.fillText('Power BI Dashboard • Sales & Performance KPIs', 60, 21);

      // Chart 1: Bar Chart
      ctx.fillStyle = '#4f46e5';
      const heights = [70, 110, 85, 140, 125, 160, 145, 180];
      heights.forEach((h, i) => {
        ctx.fillStyle = i === 5 ? '#10b981' : '#6366f1';
        ctx.fillRect(40 + i * 28, 230 - h, 20, h);
      });

      // Chart 2: Metric Cards
      ctx.fillStyle = '#1e293b';
      ctx.roundRect ? ctx.roundRect(280, 55, 195, 75, 8) : ctx.fillRect(280, 55, 195, 75);
      ctx.fill();
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('TOTAL REVENUE AUDITED', 295, 80);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 22px Inter, sans-serif';
      ctx.fillText('₹ 6.30M', 295, 112);

      // Metric Card 2
      ctx.fillStyle = '#1e293b';
      ctx.roundRect ? ctx.roundRect(280, 145, 195, 75, 8) : ctx.fillRect(280, 145, 195, 75);
      ctx.fill();
      ctx.fillStyle = '#94a3b8';
      ctx.font = '11px Inter, sans-serif';
      ctx.fillText('STOCK CLEARANCE', 295, 170);
      ctx.fillStyle = '#10b981';
      ctx.font = 'bold 22px Inter, sans-serif';
      ctx.fillText('+31% BOOST', 295, 202);

      // Bottom terminal strip
      ctx.fillStyle = '#0f172a';
      ctx.fillRect(40, 250, 435, 45);
      ctx.fillStyle = '#38bdf8';
      ctx.font = '11px JetBrains Mono, monospace';
      ctx.fillText('> python app.py --workers 8 --mongo-active', 55, 275);
    }

    const screenTexture = new THREE.CanvasTexture(screenCanvas);
    const screenMat = new THREE.MeshBasicMaterial({ map: screenTexture });
    const screenGeo = new THREE.PlaneGeometry(2.25, 1.35);
    screenGeo.translate(0, 0.75, 0.027);
    const screenMesh = new THREE.Mesh(screenGeo, screenMat);
    lidGroup.add(screenMesh);

    // ============================================================
    // 2. Floating 3D Database Cylinder (MongoDB & SQL)
    // ============================================================
    const dbGroup = new THREE.Group();
    dbGroup.position.set(1.7, 0.8, 0.2);
    mainGroup.add(dbGroup);

    const cylinderMat = new THREE.MeshStandardMaterial({
      color: 0x312e81,
      metalness: 0.6,
      roughness: 0.3,
      transparent: true,
      opacity: 0.9
    });

    const ringGlowMat = new THREE.MeshBasicMaterial({
      color: 0x10b981
    });

    // 3 stacked database platters
    for (let i = 0; i < 3; i++) {
      const diskGeo = new THREE.CylinderGeometry(0.45, 0.45, 0.16, 32);
      const disk = new THREE.Mesh(diskGeo, cylinderMat);
      disk.position.y = (i - 1) * 0.28;
      dbGroup.add(disk);

      // Glowing LED band
      const ringGeo = new THREE.TorusGeometry(0.46, 0.015, 16, 32);
      ringGeo.rotateX(Math.PI / 2);
      const ring = new THREE.Mesh(ringGeo, ringGlowMat);
      ring.position.y = (i - 1) * 0.28;
      dbGroup.add(ring);
    }

    // ============================================================
    // 3. Floating 3D Geometric Accents (Analytics & ML nodes)
    // ============================================================
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0x6366f1,
      metalness: 0.1,
      roughness: 0.1,
      transmission: 0.7,
      thickness: 0.5,
      transparent: true,
      opacity: 0.85
    });

    const emeraldMat = new THREE.MeshPhysicalMaterial({
      color: 0x10b981,
      metalness: 0.2,
      roughness: 0.2,
      transmission: 0.6,
      transparent: true,
      opacity: 0.8
    });

    // Octahedron node
    const octGeo = new THREE.OctahedronGeometry(0.35, 0);
    const octMesh = new THREE.Mesh(octGeo, glassMat);
    octMesh.position.set(-1.8, 1.2, 0.5);
    mainGroup.add(octMesh);

    // Floating cube node
    const cubeGeo = new THREE.BoxGeometry(0.35, 0.35, 0.35);
    const cubeMesh = new THREE.Mesh(cubeGeo, emeraldMat);
    cubeMesh.position.set(1.6, -0.9, 0.6);
    mainGroup.add(cubeMesh);

    // Floating small sphere
    const sphereGeo = new THREE.SphereGeometry(0.18, 24, 24);
    const sphereMesh = new THREE.Mesh(sphereGeo, new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      metalness: 0.7,
      roughness: 0.2
    }));
    sphereMesh.position.set(-1.5, -0.8, 0.8);
    mainGroup.add(sphereMesh);

    // ============================================================
    // 4. Lighting System (High-End Studio Atmosphere)
    // ============================================================
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0);
    keyLight.position.set(5, 6, 5);
    scene.add(keyLight);

    const indigoRim = new THREE.PointLight(0x6366f1, 3.5, 10);
    indigoRim.position.set(-4, 3, 2);
    scene.add(indigoRim);

    const emeraldRim = new THREE.PointLight(0x10b981, 3.0, 10);
    emeraldRim.position.set(3, -2, 3);
    scene.add(emeraldRim);

    // ============================================================
    // 5. Mouse Parallax & Interaction
    // ============================================================
    let targetRotX = 0;
    let targetRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      targetRotY = x * 0.25;
      targetRotX = -y * 0.15;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // ============================================================
    // 6. Animation Loop (Smooth Spring Damping)
    // ============================================================
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Subtle floating oscillations
        dbGroup.position.y = 0.8 + Math.sin(elapsedTime * 1.5) * 0.08;
        dbGroup.rotation.y = elapsedTime * 0.4;

        octMesh.position.y = 1.2 + Math.cos(elapsedTime * 1.3) * 0.09;
        octMesh.rotation.x = elapsedTime * 0.5;
        octMesh.rotation.y = elapsedTime * 0.3;

        cubeMesh.position.y = -0.9 + Math.sin(elapsedTime * 1.8) * 0.07;
        cubeMesh.rotation.x = elapsedTime * 0.6;
        cubeMesh.rotation.z = elapsedTime * 0.4;

        sphereMesh.position.y = -0.8 + Math.cos(elapsedTime * 2.0) * 0.06;

        // Smooth mouse parallax damping
        mainGroup.rotation.y += (targetRotY - mainGroup.rotation.y) * 0.06;
        mainGroup.rotation.x += (targetRotX - mainGroup.rotation.x) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-[360px] sm:h-[440px] lg:h-[500px] relative pointer-events-auto cursor-grab active:cursor-grabbing"
      aria-label="Interactive 3D Developer Workspace"
    />
  );
};
