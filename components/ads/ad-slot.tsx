export function AdSlot({ variant = 'inline', className = '' }: { variant?: 'inline' | 'sidebar' | 'header'; className?: string }) {
  if (variant === 'sidebar') {
    return <div className={`ad-slot-sidebar ${className}`} aria-hidden="true">Advertisement</div>;
  }
  if (variant === 'header') {
    return <div className={`ad-slot-header ${className}`} aria-hidden="true">Advertisement</div>;
  }
  return <div className={`ad-slot ${className}`} aria-hidden="true">Advertisement</div>;
}
