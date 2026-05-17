import React, { useState, useEffect, useRef } from 'react';
import {
  Tv,
  Layers,
  Cpu,
  Sparkles,
  Send,
  Globe,
  Mail,
  X,
  ExternalLink,
  Maximize2,
  TrendingUp,
  Video,
  Box,
  Zap,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  MousePointer
} from 'lucide-react';

const PROJECTS_DATA = [
  {
    id: 1,
    title: "NEON SHIFT - Cinematic Trailer",
    category: "Video Editing",
    client: "Cyber-Tech Athletics",
    date: "Feb 2026",
    description: "A fast-paced, high-contrast promotional campaign trailer with custom speed ramps, asset-tracked HUD overlays, and heavy sound design synchronization.",
    tags: ["Premiere Pro", "After Effects", "Sound Design", "Color Grading"],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-at-night-41584-large.mp4",
    techStats: { fps: "60 FPS", resolution: "4K UHD", renderTime: "12 Hours" },
    wireframeType: "torusKnot",
    color: "#00f0ff"
  },
  {
    id: 2,
    title: "CHRONOS CORE - 3D Mechanical Node",
    category: "3D Design",
    client: "Quantum Computing Labs",
    date: "Jan 2026",
    description: "A dynamic, functional mechanical core visualization utilizing procedural textures, physical-based rendering (PBR), and dynamic soft-body animations.",
    tags: ["Blender", "Houdini", "Substance Painter", "Octane Render"],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-abstract-organic-metallic-object-rotating-42417-large.mp4",
    techStats: { polys: "450k Quads", textures: "8K PBR", renderTime: "34 Hours" },
    wireframeType: "octahedron",
    color: "#bd00ff"
  },
  {
    id: 3,
    title: "HYPERION - Music Video VFX",
    category: "Video Editing",
    client: "Sony Music Group",
    date: "Nov 2025",
    description: "Complex volumetric laser projections, particle explosions, and custom camera tracking built for an underground synthwave artist's debut music video.",
    tags: ["After Effects", "Nuke", "Unreal Engine 5", "Particles"],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-futuristic-digital-human-face-with-neon-lines-41589-large.mp4",
    techStats: { tracker: "3D Synthesized", dynamicParticles: "2.4 Million", renderTime: "18 Hours" },
    wireframeType: "dodecahedron",
    color: "#ff00a0"
  },
  {
    id: 4,
    title: "METAVERSE RETAIL - Interactive Showroom",
    category: "3D Design",
    client: "Aura Premium Brands",
    date: "Sept 2025",
    description: "An immersive, web-optimized 3D showroom layout allowing virtual customers to inspect products, interact with features, and preview customization options.",
    tags: ["Three.js", "React Three Fiber", "Tailwind CSS", "Vite"],
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-3d-digital-globe-network-spinning-41586-large.mp4",
    techStats: { bundleSize: "140kb Gzipped", targetFPS: "90 FPS", framework: "React" },
    wireframeType: "icosahedron",
    color: "#00ff66"
  }
];

export default function App() {
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [formStatus, setFormStatus] = useState({ submitted: false, loading: false, message: "" });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);

  useEffect(() => {
    if (window.THREE) {
      setThreeLoaded(true);
      return;
    }
    const script = document.createElement('script');
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;
    script.onload = () => setThreeLoaded(true);
    document.head.appendChild(script);
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-100 font-sans selection:bg-[#00f0ff] selection:text-black overflow-x-hidden relative">

      <div className="fixed inset-0 pointer-events-none z-10 border-[12px] border-[#0a0a0c]"></div>
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-20"></div>

      <header className="fixed top-0 left-0 w-full z-40 bg-[#0a0a0c]/80 backdrop-blur-md border-b border-[#00f0ff]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 border border-[#00f0ff]/50 rounded-lg flex items-center justify-center relative overflow-hidden group-hover:border-[#bd00ff] transition-all duration-500">
              <span className="text-sm font-black tracking-tighter text-[#00f0ff] group-hover:text-[#bd00ff] transition-colors">TD</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00f0ff]/10 to-[#bd00ff]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <span className="font-mono text-sm tracking-widest font-bold block uppercase text-[#00f0ff]">TRUNG DANG</span>
              <span className="text-[10px] font-mono tracking-widest text-slate-400 block -mt-1">PORTFOLIO</span>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest">
            <a href="#about" className="text-slate-400 hover:text-[#00f0ff] transition-all relative group py-2">
              <span>01. INTRO</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00f0ff] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#projects" className="text-slate-400 hover:text-[#00f0ff] transition-all relative group py-2">
              <span>02. PROJECTS</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00f0ff] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#skills" className="text-slate-400 hover:text-[#00f0ff] transition-all relative group py-2">
              <span>03. MATRIX</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00f0ff] group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="#contact" className="text-slate-400 hover:text-[#00f0ff] transition-all relative group py-2">
              <span>04. COMMS</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#00f0ff] group-hover:w-full transition-all duration-300"></span>
            </a>
          </nav>

          <div className="hidden md:block">
            <a href="#contact" className="px-5 py-2 border border-[#00f0ff]/40 rounded hover:border-[#00f0ff] text-xs font-mono tracking-widest hover:bg-[#00f0ff]/10 transition-all duration-300 relative overflow-hidden group">
              <span className="relative z-10 text-[#00f0ff]">INITIATE CONNECT</span>
              <span className="absolute inset-0 bg-[#00f0ff]/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-400 hover:text-[#00f0ff] focus:outline-none"
          >
            <div className="space-y-1">
              <span className={`block w-6 h-[2px] bg-current transform transition duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block w-6 h-[2px] bg-current transition duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block w-6 h-[2px] bg-current transform transition duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0c] border-b border-[#00f0ff]/15 px-6 py-6 flex flex-col gap-6 font-mono text-sm tracking-widest">
            <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f0ff] transition-all">// 01. INTRO</a>
            <a href="#projects" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f0ff] transition-all">// 02. PROJECTS</a>
            <a href="#skills" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f0ff] transition-all">// 03. MATRIX</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-slate-300 hover:text-[#00f0ff] transition-all">// 04. COMMS</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2.5 text-center border border-[#00f0ff]/50 rounded text-xs text-[#00f0ff] bg-[#00f0ff]/5">INITIATE CONNECT</a>
          </div>
        )}
      </header>

      <HeroSection threeLoaded={threeLoaded} />
      <AboutSection threeLoaded={threeLoaded} />
      <ProjectsSection
        activeProject={activeProject}
        setActiveProject={setActiveProject}
        threeLoaded={threeLoaded}
        carouselIndex={carouselIndex}
        setCarouselIndex={setCarouselIndex}
      />
      <SkillsSection hoveredSkill={hoveredSkill} setHoveredSkill={setHoveredSkill} />
      <ContactSection formStatus={formStatus} setFormStatus={setFormStatus} />

      {activeProject && (
        <ProjectLightbox
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}

      <footer className="border-t border-[#00f0ff]/10 py-10 bg-[#070709] relative z-30">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-mono text-xs tracking-widest text-[#00f0ff]">&copy; 2026 CYBERNETIC ARCHIVE. ALL SYSTEMS OPERATIONAL.</p>
            <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider font-mono">Designed for high-performance creative agency standards</p>
          </div>
          <div className="flex gap-4">
            <a href="https://github.com/trungdang23" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-slate-800 rounded flex items-center justify-center hover:border-[#00f0ff] text-slate-400 hover:text-[#00f0ff] transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/dangviettrung/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 border border-slate-800 rounded flex items-center justify-center hover:border-[#00f0ff] text-slate-400 hover:text-[#00f0ff] transition-all duration-300">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="mailto:trung.dang.cv@gmail.com" className="w-10 h-10 border border-slate-800 rounded flex items-center justify-center hover:border-[#00f0ff] text-slate-400 hover:text-[#00f0ff] transition-all duration-300">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HeroSection({ threeLoaded }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!threeLoaded || !containerRef.current || !window.THREE) return;

    const THREE = window.THREE;
    const container = containerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.BufferGeometry();
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const particleCount = isMobile ? 800 : 1500;

    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 12;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 12;

      const mixedColor = new THREE.Color();
      const pct = Math.random();
      mixedColor.lerpColors(new THREE.Color("#00f0ff"), new THREE.Color("#bd00ff"), pct);
      colors[i] = mixedColor.r;
      colors[i + 1] = mixedColor.g;
      colors[i + 2] = mixedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: isMobile ? 0.05 : 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const gridHelper = new THREE.GridHelper(30, 30, 0xbd00ff, 0x121217);
    gridHelper.position.y = -3;
    gridHelper.material.opacity = 0.25;
    gridHelper.material.transparent = true;
    scene.add(gridHelper);

    let mouseX = 0;
    let mouseY = 0;
    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth) - 0.5;
      mouseY = (event.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      if (!container.clientWidth || !container.clientHeight) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let clock = new THREE.Clock();
    let animationFrameId;

    const animate = function () {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      particles.rotation.y = elapsedTime * 0.04 + mouseX * 0.3;
      particles.rotation.x = elapsedTime * 0.02 + mouseY * 0.2;

      const positionsArr = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        const xIdx = i * 3;
        const yIdx = i * 3 + 1;
        const x = positionsArr[xIdx];
        positionsArr[yIdx] += Math.sin(elapsedTime + x) * 0.0025;
      }
      geometry.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
    };
  }, [threeLoaded]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      <div ref={containerRef} className="absolute inset-0 w-full h-full z-0 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0c] z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 relative z-30">
        <div className="lg:col-span-8 flex flex-col justify-center space-y-6 text-left">

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00f0ff]/10 border border-[#00f0ff]/30 text-[#00f0ff] font-mono text-xs w-fit tracking-widest animate-pulse">
            <Zap className="w-3 h-3" />
            <span>OPERATIONAL // FREELANCE WEB & VIDEO STUDIO</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase tracking-tight leading-none text-white font-sans">
            CRAFTING <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f0ff] via-[#bd00ff] to-[#ff00a0]">DIMENSIONAL</span> NARRATIVES
          </h1>

          <p className="text-slate-400 text-lg sm:text-xl max-w-xl font-sans font-light">
            Expert Video Editor & 3D Designer weaving cinematic footage, generative graphics, and high-performance WebGL to accelerate conversions for global tier-one brands.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 font-mono">
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#bd00ff] text-black font-black uppercase tracking-widest text-xs rounded hover:opacity-90 transform hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-[#00f0ff]/20 text-center"
            >
              ENTER UNIVERSE
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-[#00f0ff]/40 text-[#00f0ff] font-bold uppercase tracking-widest text-xs rounded hover:border-[#00f0ff] hover:bg-[#00f0ff]/5 transition-all duration-300 text-center"
            >
              COMMUNICATION CHANNEL
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

function AboutSection({ threeLoaded }) {
  const meshRef = useRef(null);
  const [visMode, setVisMode] = useState('crystal');
  const [activeTelemetry, setActiveTelemetry] = useState({ rotX: 0, rotY: 0, zoom: 100 });

  useEffect(() => {
    if (!threeLoaded || !meshRef.current || !window.THREE) return;

    const THREE = window.THREE;
    const container = meshRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.z = 4.5;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const interactiveGroup = new THREE.Group();
    scene.add(interactiveGroup);

    let coreGeometry;
    let outerGeometry;

    if (visMode === 'crystal') {
      coreGeometry = new THREE.IcosahedronGeometry(1.0, 1);
      outerGeometry = new THREE.IcosahedronGeometry(1.3, 0);
    } else if (visMode === 'camera') {
      coreGeometry = new THREE.CylinderGeometry(0.6, 0.6, 1.0, 6, 2);
      outerGeometry = new THREE.TorusGeometry(1.1, 0.1, 8, 24);
    } else {
      coreGeometry = new THREE.TorusKnotGeometry(0.5, 0.15, 64, 8);
      outerGeometry = new THREE.SphereGeometry(1.3, 12, 12);
    }

    const coreMaterial = new THREE.MeshBasicMaterial({
      color: visMode === 'quantum' ? 0xff00a0 : 0xbd00ff,
      wireframe: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending
    });

    const outerMaterial = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
      blending: THREE.AdditiveBlending
    });

    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    const outerMesh = new THREE.Mesh(outerGeometry, outerMaterial);

    interactiveGroup.add(coreMesh);
    interactiveGroup.add(outerMesh);

    const particleCount = 120;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 1.8;
    }
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x00f0ff,
      size: 0.025,
      transparent: true,
      opacity: 0.8
    });
    const coreParticles = new THREE.Points(particleGeometry, particleMaterial);
    interactiveGroup.add(coreParticles);

    let targetScale = 1;
    let targetRotateSpeed = 0.005;
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handleMouseEnter = () => {
      targetScale = 1.15;
      targetRotateSpeed = 0.015;
    };

    const handleMouseLeave = () => {
      targetScale = 1.0;
      targetRotateSpeed = 0.005;
      isDragging = false;
    };

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.offsetX, y: e.offsetY };
    };

    const handleMouseMove = (e) => {
      if (isDragging) {
        const deltaX = e.offsetX - previousMousePosition.x;
        const deltaY = e.offsetY - previousMousePosition.y;

        interactiveGroup.rotation.y += deltaX * 0.01;
        interactiveGroup.rotation.x += deltaY * 0.01;
      }
      previousMousePosition = { x: e.offsetX, y: e.offsetY };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    const handleTouchStart = (e) => {
      if (e.touches.length === 1) {
        isDragging = true;
        const rect = container.getBoundingClientRect();
        previousMousePosition = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top
        };
      }
    };

    const handleTouchMove = (e) => {
      if (isDragging && e.touches.length === 1) {
        const rect = container.getBoundingClientRect();
        const currentX = e.touches[0].clientX - rect.left;
        const currentY = e.touches[0].clientY - rect.top;

        const deltaX = currentX - previousMousePosition.x;
        const deltaY = currentY - previousMousePosition.y;

        interactiveGroup.rotation.y += deltaX * 0.015;
        interactiveGroup.rotation.x += deltaY * 0.015;

        previousMousePosition = { x: currentX, y: currentY };
      }
    };

    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleMouseUp);

    const handleResize = () => {
      if (!container.clientWidth || !container.clientHeight) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDragging) {
        interactiveGroup.rotation.y += targetRotateSpeed;
        interactiveGroup.rotation.x += targetRotateSpeed * 0.5;
      }

      outerMesh.rotation.z -= 0.002;
      coreParticles.rotation.y -= 0.001;

      interactiveGroup.scale.x += (targetScale - interactiveGroup.scale.x) * 0.15;
      interactiveGroup.scale.y += (targetScale - interactiveGroup.scale.y) * 0.15;
      interactiveGroup.scale.z += (targetScale - interactiveGroup.scale.z) * 0.15;

      setActiveTelemetry({
        rotX: Math.round(interactiveGroup.rotation.x * 57.2958) % 360,
        rotY: Math.round(interactiveGroup.rotation.y * 57.2958) % 360,
        zoom: Math.round(interactiveGroup.scale.x * 100)
      });

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleMouseUp);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      coreGeometry.dispose();
      outerGeometry.dispose();
      coreMaterial.dispose();
      outerMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
    };
  }, [threeLoaded, visMode]);

  return (
    <section id="about" className="relative py-24 px-6 bg-[#070709] border-t border-b border-[#00f0ff]/5 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#bd00ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-7 space-y-6">

          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-tight">
            NARRATIVE MEETS MULTI-DIMENSIONAL TECH
          </h2>

          <div className="p-[1px] bg-gradient-to-r from-[#00f0ff]/30 to-[#bd00ff]/10 rounded">
            <div className="bg-[#0a0a0c] p-6 rounded space-y-4">
              <p className="text-slate-300 leading-relaxed font-sans">
                My professional philosophy is centered around creating highly immersive video and WebGL 3D designs that convert viewers into clients. I bridge the physical divide of virtual mediums by engineering experiences that engage both visual and tactile receptors.
              </p>
              <p className="text-slate-400 leading-relaxed font-sans">
                Whether implementing dynamic, high-action camera transitions in Premiere Pro, simulating particle flows in Houdini, or deploying fluid custom 3D web rendering solutions, my projects maximize dynamic user interaction and premium brand authority.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4 font-mono text-xs">
            <div className="bg-[#0e0e13] p-4 border-l-2 border-[#00f0ff] rounded">
              <span className="text-[#00f0ff] block font-bold mb-1">3D EXPERTISE</span>
              <span className="text-slate-400">Hard-surface modeling, particle/dynamics rendering, dynamic web textures</span>
            </div>
            <div className="bg-[#0e0e13] p-4 border-l-2 border-[#bd00ff] rounded">
              <span className="text-[#bd00ff] block font-bold mb-1">VIDEO PRODUCTION</span>
              <span className="text-slate-400">Cinematic storyboarding, asset pacing, premium motion assets</span>
            </div>
            <div className="bg-[#0e0e13] p-4 border-l-2 border-emerald-500 rounded col-span-2 md:col-span-1">
              <span className="text-emerald-500 block font-bold mb-1">DEV DEPLOYMENT</span>
              <span className="text-slate-400">Optimized bundles, shader modifications, real-time reactive WebGL loops</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="w-full max-w-[400px] h-[450px] bg-[#0a0a0c]/80 border border-[#00f0ff]/15 rounded-xl relative overflow-hidden group shadow-2xl shadow-[#bd00ff]/5 flex flex-col justify-between">

            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00f0ff]/40 animate-pulse shadow-[0_0_10px_#00f0ff] z-10 pointer-events-none"></div>

            <div className="p-4 border-b border-slate-900 bg-[#070709]/90 flex justify-between items-center font-mono text-[9px] text-slate-500 z-10">
              <div className="flex gap-3 uppercase">
                <span>ROT_X: <b className="text-white">{activeTelemetry.rotX}&deg;</b></span>
                <span>ROT_Y: <b className="text-white">{activeTelemetry.rotY}&deg;</b></span>
                <span>SCALE: <b className="text-white">{activeTelemetry.zoom}%</b></span>
              </div>
            </div>

            <div ref={meshRef} className="w-full flex-1 cursor-grab active:cursor-grabbing"></div>

            <div className="p-4 bg-[#070709]/90 border-t border-slate-900 z-10 space-y-3">
              <div className="grid grid-cols-3 gap-1.5 font-mono text-[9px]">
                <button
                  onClick={() => setVisMode('crystal')}
                  className={`py-1.5 rounded border transition-all duration-300 uppercase ${visMode === 'crystal' ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/5' : 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'}`}
                >
                  [ Crystal ]
                </button>
                <button
                  onClick={() => setVisMode('camera')}
                  className={`py-1.5 rounded border transition-all duration-300 uppercase ${visMode === 'camera' ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/5' : 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'}`}
                >
                  [ Cam_Core ]
                </button>
                <button
                  onClick={() => setVisMode('quantum')}
                  className={`py-1.5 rounded border transition-all duration-300 uppercase ${visMode === 'quantum' ? 'border-[#00f0ff] text-[#00f0ff] bg-[#00f0ff]/5' : 'border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'}`}
                >
                  [ Quantum ]
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function ProjectsSection({ activeProject, setActiveProject, threeLoaded, carouselIndex, setCarouselIndex }) {
  const carouselContainerRef = useRef(null);

  useEffect(() => {
    if (!threeLoaded || !carouselContainerRef.current || !window.THREE) return;

    const THREE = window.THREE;
    const container = carouselContainerRef.current;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const carouselGroup = new THREE.Group();
    scene.add(carouselGroup);

    const cardRadius = 4.5;
    const cardWidth = 3.2;
    const cardHeight = 2.0;
    const cardsArray = [];
    const videoElements = [];

    // Helper: programmatically draw cyberpunk-grid wireframes on canvas texture
    const generateFallbackTexture = (title, category, colorHex) => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 320;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#0a0a0c';
      ctx.fillRect(0, 0, 512, 320);

      ctx.strokeStyle = colorHex;
      ctx.lineWidth = 4;
      ctx.strokeRect(8, 8, 496, 304);

      ctx.strokeStyle = 'rgba(255,255,255,0.04)';
      ctx.lineWidth = 1;
      for (let i = 0; i < 512; i += 32) {
        ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i, 320); ctx.stroke();
      }
      for (let j = 0; j < 320; j += 32) {
        ctx.beginPath(); ctx.moveTo(0, j); ctx.lineTo(512, j); ctx.stroke();
      }

      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 24px monospace';
      ctx.fillText(title.toUpperCase(), 30, 200);

      ctx.fillStyle = colorHex;
      ctx.font = '14px monospace';
      ctx.fillText(`// CATEGORY: ${category.toUpperCase()}`, 30, 240);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
      ctx.fillText("[ HOVER TO PLAY LOOP ]", 30, 280);

      const texture = new THREE.CanvasTexture(canvas);
      return texture;
    };

    PROJECTS_DATA.forEach((proj, idx) => {
      const cardGroup = new THREE.Group();

      const angle = (idx / PROJECTS_DATA.length) * Math.PI * 2;
      cardGroup.position.x = cardRadius * Math.sin(angle);
      cardGroup.position.z = cardRadius * Math.cos(angle);
      cardGroup.rotation.y = angle;

      const video = document.createElement('video');
      video.src = proj.videoUrl;
      video.crossOrigin = "anonymous";
      video.loop = true;
      video.muted = true;
      video.playsInline = true;
      videoElements.push(video);

      const fallbackTex = generateFallbackTexture(proj.title, proj.category, proj.color);
      const videoTex = new THREE.VideoTexture(video);
      videoTex.minFilter = THREE.LinearFilter;
      videoTex.magFilter = THREE.LinearFilter;

      const geometry = new THREE.PlaneGeometry(cardWidth, cardHeight);
      const material = new THREE.MeshBasicMaterial({
        map: fallbackTex,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.95
      });

      const mesh = new THREE.Mesh(geometry, material);
      cardGroup.add(mesh);

      const borderGeo = new THREE.EdgesGeometry(geometry);
      const borderMat = new THREE.LineBasicMaterial({ color: proj.color, linewidth: 2 });
      const borderLines = new THREE.LineSegments(borderGeo, borderMat);
      borderLines.position.z = 0.01;
      cardGroup.add(borderLines);

      let subMeshGeo;
      if (proj.wireframeType === 'torusKnot') subMeshGeo = new THREE.TorusKnotGeometry(0.18, 0.05, 32, 4);
      else if (proj.wireframeType === 'octahedron') subMeshGeo = new THREE.OctahedronGeometry(0.24, 0);
      else if (proj.wireframeType === 'dodecahedron') subMeshGeo = new THREE.DodecahedronGeometry(0.24, 0);
      else subMeshGeo = new THREE.IcosahedronGeometry(0.24, 0);

      const subMeshMat = new THREE.MeshBasicMaterial({ color: proj.color, wireframe: true, transparent: true, opacity: 0.5 });
      const subMesh = new THREE.Mesh(subMeshGeo, subMeshMat);
      subMesh.position.set(1.2, 0.6, 0.15);
      cardGroup.add(subMesh);

      cardGroup.userData = {
        index: idx,
        project: proj,
        mesh: mesh,
        video: video,
        videoTex: videoTex,
        fallbackTex: fallbackTex,
        subMesh: subMesh,
        angle: angle
      };

      carouselGroup.add(cardGroup);
      cardsArray.push(cardGroup);
    });

    let currentRotation = 0;
    let targetRotation = 0;
    let isDragging = false;
    let isHoveringAny = false;
    let previousMouseX = 0;
    let dragVelocity = 0;
    const dragFactor = 0.005;

    const handleMouseDown = (e) => {
      isDragging = true;
      previousMouseX = e.clientX;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) {
        const rect = container.getBoundingClientRect();
        const mouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
        const mouseY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

        const intersects = raycaster.intersectObjects(carouselGroup.children, true);

        let hoveredThisFrame = false;
        cardsArray.forEach((card) => {
          let parentCard = card;
          let isHovered = intersects.some(i => i.object.parent === parentCard || i.object === parentCard.children[0]);

          if (isHovered) {
            parentCard.scale.set(1.12, 1.12, 1.12);
            parentCard.userData.mesh.material.map = parentCard.userData.videoTex;
            parentCard.userData.mesh.material.needsUpdate = true;
            parentCard.userData.subMesh.rotation.y += 0.05;
            parentCard.userData.subMesh.rotation.x += 0.02;
            parentCard.userData.video.play().catch(() => {});
            hoveredThisFrame = true;
          } else {
            parentCard.scale.set(1, 1, 1);
            parentCard.userData.mesh.material.map = parentCard.userData.fallbackTex;
            parentCard.userData.mesh.material.needsUpdate = true;
            parentCard.userData.video.pause();
          }
        });
        isHoveringAny = hoveredThisFrame;
        return;
      }

      const deltaX = e.clientX - previousMouseX;
      targetRotation += deltaX * dragFactor;
      dragVelocity = deltaX * dragFactor;
      previousMouseX = e.clientX;
    };

    const handleMouseLeaveCanvas = () => {
      isHoveringAny = false;
      cardsArray.forEach((card) => {
        card.scale.set(1, 1, 1);
        card.userData.mesh.material.map = card.userData.fallbackTex;
        card.userData.mesh.material.needsUpdate = true;
        card.userData.video.pause();
      });
    };

    const handleMouseUp = (e) => {
      isDragging = false;
      const rect = container.getBoundingClientRect();
      const mouseX = ((e.clientX - rect.left) / container.clientWidth) * 2 - 1;
      const mouseY = -((e.clientY - rect.top) / container.clientHeight) * 2 + 1;

      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);
      const intersects = raycaster.intersectObjects(carouselGroup.children, true);

      if (intersects.length > 0 && Math.abs(dragVelocity) < 0.01) {
        let parentCard = intersects[0].object.parent;
        if (parentCard.userData && parentCard.userData.project) {
          setActiveProject(parentCard.userData.project);
        }
      }
    };

    const handleTouchStart = (e) => {
      isDragging = true;
      previousMouseX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.touches[0].clientX - previousMouseX;
      targetRotation += deltaX * dragFactor * 1.5;
      dragVelocity = deltaX * dragFactor;
      previousMouseX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const handleWheel = (e) => {
      // Chặn hành vi cuộn trang mặc định của trình duyệt khi lăn chuột trên 3D Canvas
      e.preventDefault();
      targetRotation += e.deltaY * 0.0012;
    };

    container.addEventListener('mousedown', handleMouseDown);
    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeaveCanvas);
    window.addEventListener('mouseup', handleMouseUp);
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('wheel', handleWheel, { passive: false });

    const handleResize = () => {
      if (!container.clientWidth || !container.clientHeight) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDragging) {
        // Tự động xoay nhẹ khi không kéo và không di chuột vào thẻ
        if (!isHoveringAny) {
          targetRotation -= 0.0015;
        }
        targetRotation += dragVelocity;
        dragVelocity *= 0.95;
      }

      currentRotation += (targetRotation - currentRotation) * 0.1;
      carouselGroup.rotation.y = currentRotation;

      cardsArray.forEach((card) => {
        const worldPosition = new THREE.Vector3();
        card.getWorldPosition(worldPosition);

        const fadeValue = THREE.MathUtils.mapLinear(worldPosition.z, -2, 5, 0.25, 1);
        card.userData.mesh.material.opacity = THREE.MathUtils.clamp(fadeValue, 0.15, 1);
        card.userData.subMesh.rotation.y += 0.008;
      });

      const normalizedAngle = (-currentRotation) % (Math.PI * 2);
      const rawIdx = Math.round((normalizedAngle / (Math.PI * 2)) * PROJECTS_DATA.length);
      const activeIdx = ((rawIdx % PROJECTS_DATA.length) + PROJECTS_DATA.length) % PROJECTS_DATA.length;
      setCarouselIndex(activeIdx);

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('mousedown', handleMouseDown);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeaveCanvas);
      window.removeEventListener('mouseup', handleMouseUp);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('wheel', handleWheel);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      videoElements.forEach(v => {
        v.pause();
        v.src = "";
        v.load();
      });

      cardsArray.forEach(card => {
        card.userData.mesh.geometry.dispose();
        card.userData.mesh.material.dispose();
        card.userData.videoTex.dispose();
        card.userData.fallbackTex.dispose();
        card.userData.subMesh.geometry.dispose();
        card.userData.subMesh.material.dispose();
      });
    };
  }, [threeLoaded]);

  return (
    <section id="projects" className="relative py-24 px-6 bg-[#0a0a0c] overflow-hidden border-b border-[#00f0ff]/5">
      <div className="max-w-7xl mx-auto space-y-12">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-2">CYLINDRICAL VIEWPORT</h2>
          </div>
        </div>

        <div className="relative w-full h-[480px] bg-[#0c0c11]/40 border border-[#00f0ff]/10 rounded-2xl overflow-hidden flex items-center justify-center">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,240,255,0.02)_0%,transparent_70%)] pointer-events-none"></div>
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 border-t border-dashed border-[#00f0ff]/10 pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 border-l border-dashed border-[#00f0ff]/10 pointer-events-none z-10"></div>

          <div ref={carouselContainerRef} className="w-full h-full cursor-grab active:cursor-grabbing z-20"></div>

        </div>

        <div className="max-w-md mx-auto grid grid-cols-4 gap-2 font-mono text-[10px]">
          {PROJECTS_DATA.map((proj, idx) => {
            const isActive = carouselIndex === idx;
            return (
              <button
                key={proj.id}
                onClick={() => {
                  setActiveProject(proj);
                }}
                className={`py-3 px-2 border rounded-lg transition-all duration-500 text-left uppercase flex flex-col justify-between h-20 ${isActive ? 'border-[#00f0ff] bg-[#00f0ff]/5 text-[#00f0ff]' : 'border-slate-800 text-slate-500 hover:text-white hover:border-slate-700'}`}
              >
                <span>0{idx + 1}.</span>
                <span className="font-bold truncate tracking-tighter block mt-2 text-[9px]">{proj.title.split('-')[0]}</span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function SkillsSection({ hoveredSkill, setHoveredSkill }) {
  const skillsList = [
    { name: "Video Editing", score: 95, color: "#00f0ff", desc: "Expert speed ramps, creative dynamic overlays, heavy color grading & sound pacing." },
    { name: "3D Modeling", score: 88, color: "#bd00ff", desc: "Procedural procedural assets, volumetric modeling, lighting architecture & particle flows." },
    { name: "Motion Graphics", score: 92, color: "#ff00a0", desc: "Expressive neon typographies, functional interface elements & reactive dynamic visualizers." },
    { name: "VFX", score: 85, color: "#00ff66", desc: "Camera tracking, green screen tracking, volumetric lighting & structural destruction assets." }
  ];

  return (
    <section id="skills" className="relative py-24 px-6 bg-[#070709] border-t border-b border-[#00f0ff]/5 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#00f0ff/0.01_1px,transparent_1px)] bg-[length:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div className="lg:col-span-6 space-y-6">
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white leading-none">
            CAPABILITY MATRIX
          </h2>
          <p className="text-slate-400 font-sans text-sm leading-relaxed">
            A comprehensive overview mapping out my technological disciplines. Select an axis on the live holographic chart to inspect active terminal metrics and structural software tags.
          </p>

          <div className="p-[1px] bg-gradient-to-r from-slate-800 to-slate-900 rounded">
            <div className="bg-[#0a0a0c] p-6 rounded space-y-3 min-h-[160px] flex flex-col justify-center">
              {hoveredSkill ? (
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: hoveredSkill.color }}></span>
                    <span className="font-mono text-sm tracking-widest font-bold text-white uppercase">{hoveredSkill.name}</span>
                  </div>
                  <p className="text-slate-300 text-xs font-sans leading-relaxed">{hoveredSkill.desc}</p>
                </div>
              ) : (
                <div className="text-center py-6">
                  <span className="font-mono text-xs text-slate-500 uppercase tracking-widest animate-pulse">HOVER THE RADAR NODES TO INITIATE INTENSITY FEEDBACK</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">

            <div className="absolute inset-0 border border-dashed border-[#00f0ff]/15 rounded-full animate-spin" style={{ animationDuration: '40s' }}></div>
            <div className="absolute inset-8 border border-slate-800 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}></div>

            <svg viewBox="0 0 100 100" className="w-full h-full z-10 transform -rotate-45">

              <circle cx="50" cy="50" r="40" fill="none" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="30" fill="none" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="20" fill="none" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="10" fill="none" stroke="#ffffff" strokeOpacity="0.03" strokeWidth="0.5" />

              <line x1="50" y1="10" x2="50" y2="90" stroke="#00f0ff" strokeOpacity="0.1" strokeWidth="0.5" />
              <line x1="10" y1="50" x2="90" y2="50" stroke="#00f0ff" strokeOpacity="0.1" strokeWidth="0.5" />

              <polygon
                points={`
                  50,${50 - (skillsList[0].score * 0.4)}
                  ${50 + (skillsList[1].score * 0.4)},50
                  50,${50 + (skillsList[2].score * 0.4)}
                  ${50 - (skillsList[3].score * 0.4)},50
                `}
                fill="url(#radar-grad)"
                stroke="#00f0ff"
                strokeWidth="1"
                className="transition-all duration-500 ease-out"
              />

              <circle
                cx="50"
                cy={50 - (skillsList[0].score * 0.4)}
                r="2.5"
                fill="#00f0ff"
                className="cursor-pointer hover:scale-125 transition-all duration-300"
                onMouseEnter={() => setHoveredSkill(skillsList[0])}
              />
              <circle
                cx={50 + (skillsList[1].score * 0.4)}
                cy="50"
                r="2.5"
                fill="#bd00ff"
                className="cursor-pointer hover:scale-125 transition-all duration-300"
                onMouseEnter={() => setHoveredSkill(skillsList[1])}
              />
              <circle
                cx="50"
                cy={50 + (skillsList[2].score * 0.4)}
                r="2.5"
                fill="#ff00a0"
                className="cursor-pointer hover:scale-125 transition-all duration-300"
                onMouseEnter={() => setHoveredSkill(skillsList[2])}
              />
              <circle
                cx={50 - (skillsList[3].score * 0.4)}
                cy="50"
                r="2.5"
                fill="#00ff66"
                className="cursor-pointer hover:scale-125 transition-all duration-300"
                onMouseEnter={() => setHoveredSkill(skillsList[3])}
              />

              <defs>
                <linearGradient id="radar-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#bd00ff" stopOpacity="0.35" />
                </linearGradient>
              </defs>
            </svg>

            <span className="absolute top-1/2 left-2 -translate-y-1/2 font-mono text-[9px] text-[#00ff66] tracking-widest font-bold">VFX</span>
            <span className="absolute top-1/2 right-2 -translate-y-1/2 font-mono text-[9px] text-[#bd00ff] tracking-widest font-bold">MODELING</span>
            <span className="absolute top-2 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#00f0ff] tracking-widest font-bold">EDITING</span>
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 font-mono text-[9px] text-[#ff00a0] tracking-widest font-bold">MOTION</span>
          </div>
        </div>

      </div>
    </section>
  );
}

function ContactSection({ formStatus, setFormStatus }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: false, loading: true, message: "" });

    setTimeout(() => {
      setFormStatus({
        submitted: true,
        loading: false,
        message: "ENCRYPTION CONNECT SUCCESSFUL // WE WILL RESPOND VIA SECURE CHANNELS WITHIN 24 HOURS."
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 px-6 bg-[#0a0a0c] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00f0ff]/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto border border-[#00f0ff]/15 rounded-xl bg-[#0e0e13]/80 backdrop-blur-xl relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#00f0ff] via-[#bd00ff] to-[#00f0ff] pointer-events-none"></div>

        <div className="p-8 sm:p-12 space-y-8">

          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">INITIATE CONNECTION</h2>
            <p className="text-slate-400 font-sans text-sm max-w-md mx-auto">
              Ready to construct cinematic, volumetric assets for your brands? Transmit your metrics below.
            </p>
          </div>

          {formStatus.submitted ? (
            <div className="bg-[#00ff66]/10 border border-[#00ff66]/40 p-6 rounded-lg flex flex-col items-center text-center space-y-3">
              <CheckCircle className="w-12 h-12 text-[#00ff66] animate-bounce" />
              <span className="font-mono text-xs tracking-widest text-[#00ff66] uppercase font-bold">TRANSMISSION ENCRYPTED & LOGGED</span>
              <p className="text-slate-300 text-sm max-w-sm">{formStatus.message}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 font-mono text-xs">

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-400 tracking-widest uppercase block">AGENT IDENTITY (NAME)</label>
                  <input
                    type="text"
                    required
                    placeholder="E.g. ALICE SMITH"
                    className="w-full bg-[#070709] border border-slate-800 rounded p-4 text-white focus:outline-none focus:border-[#00f0ff] transition-all duration-300"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-400 tracking-widest uppercase block">COMM CHANNELS (EMAIL)</label>
                  <input
                    type="email"
                    required
                    placeholder="E.g. ALICE@AGENCY.COM"
                    className="w-full bg-[#070709] border border-slate-800 rounded p-4 text-white focus:outline-none focus:border-[#00f0ff] transition-all duration-300"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-slate-400 tracking-widest uppercase block">OPERATION DETAILS (PROJECT BRIEF)</label>
                <textarea
                  rows="4"
                  required
                  placeholder="SPECIFY COMPREHENSIVE NARRATIVE & RENDERING BUDGET PARAMETERS..."
                  className="w-full bg-[#070709] border border-slate-800 rounded p-4 text-white focus:outline-none focus:border-[#00f0ff] transition-all duration-300 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={formStatus.loading}
                className="w-full py-4 bg-[#00f0ff] hover:bg-[#bd00ff] text-black hover:text-white font-black uppercase tracking-widest text-xs rounded transition-all duration-500 shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {formStatus.loading ? (
                  <span>TRANSMITTING BUNDLE...</span>
                ) : (
                  <>
                    <span>TRANSMIT METRICS</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

            </form>
          )}

        </div>
      </div>
    </section>
  );
}

function ProjectLightbox({ project, onClose }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => { });
    }
  }, [project]);

  return (
    <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 sm:p-6 backdrop-blur-md">
      <div className="absolute inset-0 cursor-zoom-out" onClick={onClose}></div>

      <div className="bg-[#0e0e13] border border-[#00f0ff]/30 rounded-xl max-w-4xl w-full overflow-hidden relative z-10 flex flex-col max-h-[90vh]">

        <div className="border-b border-slate-800 px-6 py-4 flex justify-between items-center bg-[#0a0a0c]">
          <div className="font-mono text-xs">
            <span className="text-[#00f0ff] uppercase block tracking-widest font-bold">// SIMULATOR VIEWPORT</span>
            <span className="text-slate-500 text-[10px] uppercase block tracking-wider -mt-0.5">{project.client} &bull; {project.date}</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-[#00f0ff] p-2 hover:bg-slate-900 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="relative aspect-video bg-black overflow-hidden">
          <video
            ref={videoRef}
            src={project.videoUrl}
            controls
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 overflow-y-auto bg-[#0a0a0c] border-t border-slate-800 grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 space-y-4">
            <h4 className="font-bold text-lg text-white uppercase tracking-tight">{project.title}</h4>
            <p className="text-slate-400 text-xs font-sans leading-relaxed">{project.description}</p>
          </div>

          <div className="md:col-span-4 border-l-0 md:border-l border-slate-800 pl-0 md:pl-6 space-y-3 font-mono text-[10px] text-slate-400">
            <span className="text-[#00f0ff] block font-bold text-xs uppercase tracking-widest mb-1">// HARDWARE TELEMETRY</span>
            {Object.entries(project.techStats).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-slate-900 pb-1.5 uppercase">
                <span>{key}</span>
                <span className="text-white">{value}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
