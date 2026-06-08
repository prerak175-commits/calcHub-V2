import { Calculator } from 'lucide-react';

export function Logo({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative w-8 h-8 rounded-lg bg-primary flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <Calculator className="w-4 h-4 text-primary-foreground relative z-10" />
      </div>
      <span className="text-lg font-bold tracking-tight text-foreground">
        Calc<span className="text-primary">Hub</span>
      </span>
    </div>
  );
}

export function LogoIcon({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-8 h-8 rounded-lg bg-primary flex items-center justify-center overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
      <Calculator className="w-4 h-4 text-primary-foreground relative z-10" />
    </div>
  );
}
