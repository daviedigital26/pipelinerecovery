interface RealeLogoProps {
  variant?: 'reversed' | 'horizontal' | 'mark' | 'stacked';
  className?: string;
  onClick?: () => void;
}

export function RealeLogo({ variant = 'reversed', className = '', onClick }: RealeLogoProps) {
  const isReversed = variant === 'reversed';
  const isMark = variant === 'mark';
  const isStacked = variant === 'stacked';

  if (isMark) {
    return (
      <div
        onClick={onClick}
        className={`inline-flex items-center justify-center cursor-pointer select-none ${className}`}
        aria-label="Reale Revenue Systems — Home"
        role="img"
      >
        <div className="w-8 h-8 rounded-lg bg-[#4F5DFF] flex items-center justify-center font-bold text-white tracking-tighter text-base shadow-sm">
          <span>R</span>
        </div>
      </div>
    );
  }

  if (isStacked) {
    return (
      <div
        onClick={onClick}
        className={`inline-flex flex-col items-center cursor-pointer select-none text-center ${className}`}
        aria-label="Reale Revenue Systems — Home"
        role="img"
      >
        <div className="flex items-center gap-1.5">
          <span className={`text-xl font-extrabold tracking-tight ${isReversed ? 'text-white' : 'text-[#081020]'}`}>
            REALE
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#4F5DFF]" />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#4F5DFF] -mt-0.5">
          Revenue Systems
        </span>
      </div>
    );
  }

  // Horizontal Lockup (Standard)
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
      aria-label="Reale Revenue Systems — Home"
      role="img"
    >
      <div className="w-7 h-7 rounded-lg bg-[#4F5DFF] flex items-center justify-center font-extrabold text-white text-xs shadow-sm group-hover:scale-105 transition-transform">
        R
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`text-base font-extrabold tracking-tight ${isReversed ? 'text-white' : 'text-[#081020]'}`}>
          REALE
        </span>
        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#4F5DFF]">
          Revenue Systems
        </span>
      </div>
    </div>
  );
}
