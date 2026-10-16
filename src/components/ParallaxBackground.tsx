import { useEffect, useState } from 'react';

// Five high-resolution architectural properties that resonate with real estate agents
const PROPERTY_SCENES = [
  {
    id: 'modern-twilight',
    image: '/src/assets/images/luxury_modern_home_realtor_bg_1791474374233.jpg',
    label: 'Modern Luxury Twilight Estate',
    type: 'Modern Architectural',
    sectionHint: 'Hero & Pipeline Audit'
  },
  {
    id: 'craftsman-golden',
    image: '/src/assets/images/golden_hour_craftsman_home_1791550699570.jpg',
    label: 'Golden Hour Craftsman Residence',
    type: 'Suburban Dream Home',
    sectionHint: 'Diagnostic & CRM Gaps'
  },
  {
    id: 'coastal-villa',
    image: '/src/assets/images/coastal_modern_villa_1791550720417.jpg',
    label: 'Coastal Waterfront Modern Villa',
    type: 'Waterfront Luxury',
    sectionHint: '5-Step Recovery System'
  },
  {
    id: 'modern-farmhouse',
    image: '/src/assets/images/luxury_modern_farmhouse_1791550742783.jpg',
    label: 'Executive Modern Farmhouse',
    type: 'Luxury Courtyard Estate',
    sectionHint: 'Economics & Process'
  },
  {
    id: 'hilltop-manor',
    image: '/src/assets/images/luxury_hilltop_manor_1791550773314.jpg',
    label: 'Hilltop Architectural Manor',
    type: 'Panoramic City View Mansion',
    sectionHint: 'Blueprint & Scope'
  }
];

export function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          setScrollY(currentY);

          // Calculate total document height and active background segment
          const scrollHeight = document.documentElement.scrollHeight;
          const clientHeight = window.innerHeight;
          const maxScroll = Math.max(1, scrollHeight - clientHeight);
          const scrollProgress = Math.min(1, Math.max(0, currentY / maxScroll));

          // Divide scroll progress across the 5 property scenes smoothly
          const numScenes = PROPERTY_SCENES.length;
          const targetIndex = Math.min(
            numScenes - 1,
            Math.floor(scrollProgress * numScenes)
          );
          setActiveIndex(targetIndex);

          ticking = false;
        });
        ticking = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Multi-tier parallax speed differentials
  const bgPhotoOffset = scrollY * 0.08;
  const farOrbOffset = scrollY * 0.14;
  const midOrbOffset = scrollY * 0.18;
  const elevationOffset = scrollY * 0.05;
  const particlesOffset = scrollY * 0.28;
  const cameraTiltDeg = Math.min(3, scrollY * 0.003);

  const scrollToScene = (idx: number) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = window.innerHeight;
    const maxScroll = Math.max(1, scrollHeight - clientHeight);
    const targetY = (idx / (PROPERTY_SCENES.length - 1)) * maxScroll;
    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none"
      style={{ perspective: '1000px' }}
    >
      {/* 1. DEEP LAYER (Speed 0.08): Dynamic Crossfading Property Photography */}
      <div
        className="absolute -inset-10 will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${-bgPhotoOffset + mousePos.y * 0.4}px, 0) rotateX(${cameraTiltDeg}deg)`,
          transition: 'transform 100ms cubic-bezier(0.1, 0.9, 0.2, 1)'
        }}
      >
        {PROPERTY_SCENES.map((scene, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isActive ? 'opacity-30 scale-105' : 'opacity-0 scale-110 pointer-events-none'
              }`}
            >
              <img
                src={scene.image}
                alt=""
                className="w-full h-full object-cover filter blur-[2.5px] brightness-[0.70] contrast-[1.12]"
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}
      </div>

      {/* 2. ATMOSPHERIC SHADOW & READABILITY SHIELDS in Midnight Ink #081020 */}
      <div className="absolute inset-0 bg-[#081020]/80 backdrop-blur-[2.5px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#081020] via-[#081020]/65 to-[#081020]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-10%,rgba(79,93,255,0.12),rgba(8,16,32,0)_75%)]" />

      {/* 3. DYNAMIC ARCHITECTURAL ELEVATION LAYER (Speed 0.05) */}
      <div
        className="absolute -inset-10 pointer-events-none will-change-transform overflow-hidden"
        style={{
          transform: `translate3d(${mousePos.x * 0.25}px, ${-elevationOffset * 1.2}px, 0)`
        }}
      >
        {PROPERTY_SCENES.map((scene, idx) => {
          const isActive = idx === activeIndex;
          return (
            <div
              key={`elevation-${scene.id}`}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-20' : 'opacity-0'
              }`}
            >
              <img
                src={scene.image}
                alt=""
                className="w-full h-full object-cover mix-blend-screen filter brightness-[0.6] contrast-[1.25] blur-[1px]"
                referrerPolicy="no-referrer"
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-[#081020] via-transparent to-[#081020]" />
      </div>

      {/* 4. MID DEPTH LAYER (Speed 0.14 & 0.18): Brand Electric Cobalt & Signal Mint Spotlight Orbs */}
      {/* Electric Cobalt Primary Spotlight Orb */}
      <div
        className="absolute top-1/4 -left-40 w-[440px] h-[440px] bg-gradient-to-tr from-[#4F5DFF]/15 to-[#4F5DFF]/5 rounded-full blur-[140px] will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 1.1}px, ${farOrbOffset + mousePos.y * 0.8}px, 0)`
        }}
      />

      {/* Signal Mint Accent Spotlight Orb */}
      <div
        className="absolute top-2/3 -right-40 w-[460px] h-[460px] bg-gradient-to-bl from-[#2DD4BF]/10 to-[#2DD4BF]/5 rounded-full blur-[150px] will-change-transform"
        style={{
          transform: `translate3d(${-mousePos.x * 1.1}px, ${-midOrbOffset - mousePos.y * 0.8}px, 0)`
        }}
      />

      {/* Deep Cobalt Accent */}
      <div
        className="absolute bottom-1/4 left-1/3 w-[340px] h-[340px] bg-[#4F5DFF]/8 rounded-full blur-[140px] will-change-transform"
        style={{
          transform: `translate3d(${mousePos.x * 0.6}px, ${scrollY * 0.1}px, 0)`
        }}
      />

      {/* 5. NEAR FOREGROUND LAYER (Speed 0.28): Subtle Floating Bokeh Light Sparks */}
      <div
        className="absolute inset-0 pointer-events-none will-change-transform opacity-35"
        style={{
          transform: `translate3d(${mousePos.x * 1.6}px, ${-particlesOffset}px, 0)`
        }}
      >
        <div className="absolute top-[18%] left-[15%] w-1.5 h-1.5 rounded-full bg-[#4F5DFF]/60 blur-[0.5px] animate-pulse" />
        <div className="absolute top-[35%] right-[22%] w-2 h-2 rounded-full bg-[#2DD4BF]/50 blur-[1px]" />
        <div className="absolute top-[52%] left-[28%] w-1.5 h-1.5 rounded-full bg-[#4F5DFF]/50 blur-[0.5px]" />
        <div className="absolute top-[68%] right-[14%] w-2.5 h-2.5 rounded-full bg-[#2DD4BF]/45 blur-[1.5px]" />
        <div className="absolute top-[82%] left-[45%] w-1.5 h-1.5 rounded-full bg-[#4F5DFF]/50 blur-[0.5px] animate-pulse" />
      </div>

      {/* 6. Minimalist Property Scene Tracker Badge */}
      <div className="absolute bottom-6 right-6 hidden lg:flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-[#081020]/85 border border-slate-800 backdrop-blur-md text-[10px] text-slate-400 shadow-2xl pointer-events-auto">
        <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-pulse" />
        <span className="font-mono uppercase tracking-wider text-slate-300 font-medium">
          Property 0{activeIndex + 1}/05 &bull; {PROPERTY_SCENES[activeIndex].label}
        </span>
        <div className="flex items-center gap-1.5 ml-1">
          {PROPERTY_SCENES.map((scene, i) => (
            <button
              key={scene.id}
              onClick={() => scrollToScene(i)}
              title={`Jump to ${scene.label}`}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? 'w-4 bg-[#4F5DFF]'
                  : 'w-1.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
